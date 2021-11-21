import styled from 'styled-components';
import { zIndexes } from 'styles/variables';
import { useState, useEffect, useRef } from 'react';
import { clearInterval, setInterval } from 'timers';

const TvStaticStyled = styled.div.attrs((props: { opacity: number }) => ({
  opacity: props.opacity
}))`
  .tv-static {
    position: relative;

    &__filter {
      position: absolute;
      top: -50px;
      left:-50px;
      height: calc(100vh + 100px);
      width: calc(100vw + 100px);
      background: repeating-linear-gradient(#ccc, #ccc 50%, transparent 50%, transparent);
      background-size: 5px 5px;
      filter: url(#noise);
      opacity: ${props => props.opacity};
      mix-blend-mode: screen;
      z-index: ${zIndexes.tvStaticEffect};

      svg {
        width: 0;
        height: 0;
      }      
    }
  }
`;

const MIN_OPACITY = 0;
const MAX_OPACITY = 0.5;
const ABS_OPACITY = 0.08;
const CYCLE_OPACITY = 120;

const TvStatic = (props: { children: React.ReactElement, delay?: number, reverse?: boolean }) => {
  const delay = props.delay === undefined ? 0 : props.delay;
  const reverse = props.reverse === undefined ? false : props.reverse;
  const [started, setStarted] = useState(false);
  const [opacity, setOpacity] = useState(reverse ? MAX_OPACITY : MIN_OPACITY);
  const ref = useRef<NodeJS.Timer | null>(null);

  setTimeout(() => {
    setStarted(true);
  }, delay * 1000);

  useEffect(() => {
    if (
      (reverse && opacity < MIN_OPACITY) ||
      (!reverse && opacity > MAX_OPACITY)
    ) {
      clearInterval(ref.current as NodeJS.Timer);
      return;
    }

    if (ref.current !== null) {
      return;
    }

    if (started) {
      ref.current = setInterval(() => {
        setOpacity(opacity => reverse ? opacity - ABS_OPACITY : opacity + ABS_OPACITY);
      }, CYCLE_OPACITY);
    }
  }, [started, opacity]);

  return (
    <TvStaticStyled opacity={opacity}>
      <div className='tv-static'>
        <div className={started ? 'tv-static__filter' : ''}>
          <svg>
            <filter id="noise">
              <feTurbulence id="turbulence">
                <animate
                  attributeName="baseFrequency"
                  dur="50s"
                  values="0.9 0.9;0.8 0.8; 0.9 0.9"
                  repeatCount="indefinite"
                ></animate>
              </feTurbulence>
              <feDisplacementMap in="SourceGraphic" scale="60"></feDisplacementMap>
            </filter>
          </svg>
        </div>

        { props.children }
      </div>
    </TvStaticStyled>
  );
}

export default TvStatic;