import styled from 'styled-components';
import { zIndexes } from 'styles/variables';

const ZoomOutStyled = styled.div`
  z-index: -1;

  @keyframes zoomOut {
    0% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }
 
  .zoom-out {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    z-index: ${zIndexes.heroImage};

    img {
      height: 100vh;
      min-width: 100vw;
      object-fit: cover;
      animation-name: zoomOut;
      animation-fill-mode: forwards;
      animation-duration: 20s;
      animation-timing-function: linear;
    }
  }
`;

const ZoomOut = (props: { children: React.ReactElement }) => {
  return (
    <ZoomOutStyled>
      <div className='zoom-out'>
        { props.children }
      </div>
    </ZoomOutStyled>
  );
}

export default ZoomOut;