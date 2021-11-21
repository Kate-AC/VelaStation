import styled from 'styled-components';
import { zIndexes } from 'styles/variables';
import { useState, useEffect, useRef } from 'react';
import { clearInterval, setInterval } from 'timers';

const LinearStyled = styled.div.attrs((props: { opacity: number }) => ({
  opacity: props.opacity
}))`
  .linear {
    position: relative;

    &__filter {
      position: fixed;
      top:0px;
      left:0px;
      height: 100vh;
      width: 100vw;
      z-index: ${zIndexes.linearEffect};
      background: repeating-linear-gradient(0deg, #111 0px, #111 2px, transparent 2px, transparent 5px);
      background-size: 100% 5px;
      animation: lines 1s ease-out infinite;
      opacity: ${props => props.opacity};
      mix-blend-mode: color-burn;
    }
  }

  @keyframes lines {
    0% {
       background-position:0px 0px;
    }
    100% {
       background-position:0px 20px;
    }
  }
`;

const MIN_OPACITY = 0;
const MAX_OPACITY = 0.8;
const ABS_OPACITY = 0.1;
const CYCLE_OPACITY = 100;

const Linear = (props: { children: React.ReactElement, delay?: number, reverse?: boolean }) => {
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
    <LinearStyled opacity={opacity}>
      <div className='linear'>
        <div className={started ? 'linear__filter' : ''} />
        { props.children }
      </div>
    </LinearStyled>
  );
}

export default Linear;