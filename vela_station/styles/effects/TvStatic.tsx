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
      top: 0;
      left: 0;
      height: 100vh;
      width: 100vw;
      background-image: url('/images/effect/tvstatic4.gif');
      background-repeat: no-repeat;
      background-size: cover;
      opacity: ${props => props.opacity};
      mix-blend-mode: overlay;
      z-index: ${zIndexes.tvStaticEffect};
    }
  }
`;

const MIN_OPACITY = 0;
const MAX_OPACITY = 0.3;
const ABS_OPACITY = 0.05;
const CYCLE_OPACITY = 300;

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
        <div className={started ? 'tv-static__filter' : ''} />
        { props.children }
      </div>
    </TvStaticStyled>
  );
}

export default TvStatic;