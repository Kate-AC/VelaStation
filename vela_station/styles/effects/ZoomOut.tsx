import styled from 'styled-components';
import { zIndexes } from 'styles/variables';
import { useState } from 'react';

const ZoomOutStyled = styled.div`
  @keyframes zoomOut {
    0% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }
 
  .zoom-out {
    top: 0;
    left: 0;
    position: absolute;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    z-index: ${zIndexes.heroImage};

    &__filter {
      img {
        animation-name: zoomOut;
        animation-fill-mode: forwards;
        animation-duration: 20s;
        animation-timing-function: linear;
      }
    }

    img {
      height: 100vh;
      min-width: 100vw;
      object-fit: cover;
      transform: scale(1.2);
    }
  }
`;

const ZoomOut = (props: { children: React.ReactElement, delay?: number }) => {
  const delay: number = props.delay === undefined ? 0 : props.delay;
  const [started, setStarted] = useState(false);

  setTimeout(() => {
    setStarted(true);
  }, delay * 1000);

  return (
    <ZoomOutStyled>
      <div className={[
        'zoom-out',
        started ? 'zoom-out__filter' : ''
      ].join(' ')}>
        { props.children }
      </div>
    </ZoomOutStyled>
  );
}

export default ZoomOut;