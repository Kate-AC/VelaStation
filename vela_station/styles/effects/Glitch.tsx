import styled from 'styled-components';
import { zIndexes } from 'styles/variables';
import { rgbScramble, glitch } from 'styles/mixins';
import { useState, useEffect, useRef } from 'react';
import { clearInterval, setInterval } from 'timers';

const GlitchStyled = styled.div.attrs((props: { opacity: number }) => ({
  opacity: props.opacity
}))`
  .glitch {
    position: relative;
    opacity: ${props => props.opacity};

    &__filter {
      background: #000 no-repeat center;
      background-size: 0;
      height: 100vh;
      overflow: hidden;
      position: relative;
      top: 0;
      left: 0;
      width: 100vw;
      z-index: ${zIndexes.glitchEffect};

      &::before,
      &::after,
      .channel {
        background: inherit;
        background-size: cover;
        bottom: 0;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
      }

      &::before {
        ${glitch('Before')};
        content: "";
      }

      &::after {
        ${glitch('After')};
        content: "";
      }

      .channel {
        mix-blend-mode: screen;

        &::before {
          bottom: 0;
          content: "";
          display: block;
          left: 0;
          mix-blend-mode: multiply;
          position: absolute;
          right: 0;
          top: 0;
        }
      }

      .r {
        ${rgbScramble('R')};
        &::before {
          background: #f00;
        }
      }

      .g {
        ${rgbScramble('G')};
        &::before {
          background: #0f0;
        }
      }

      .b {
        ${rgbScramble('B')};
        &::before {
          background: #00f;
        }
      }
    }
  }
`;

const MIN_OPACITY = 0;
const MAX_OPACITY = 1;
const ABS_OPACITY = 1;
const CYCLE_OPACITY = 0;

const Glitch = (props: { children: React.ReactElement, delay?: number, reverse?: boolean }) => {
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
    <GlitchStyled opacity={opacity}>
      <div className='glitch'>
        <div
          className={started ? 'glitch__filter' : ''}
          style={{backgroundImage: `url(${props.children.props.src})`}}
        >
          <div className="channel r"></div>
          <div className="channel g"></div>
          <div className="channel b"></div>
        </div>
        { props.children }
      </div>
    </GlitchStyled>
  );
}

export default Glitch;