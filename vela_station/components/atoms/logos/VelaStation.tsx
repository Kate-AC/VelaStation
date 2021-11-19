import styled from 'styled-components';
import Image from 'next/image';
import { fontSizes } from 'styles/variables';

const VelaStationStyled = styled.div`
  .vela-station {
    position: relative;

    &__text {
      position: absolute;
      bottom: -8px;
      left: 95px;
      font-size: ${fontSizes.quadruple};
      color: #fff;
      font-family: HeroTitle;
      font-style: italic;
      text-shadow: 0px 5px 0px rgba(0,0,0,0.6);
    }
  }
`;

const VelaStation = () => {
  return (
    <VelaStationStyled>
      <div className='vela-station'>
        <Image
          src='/images/logo/V.png'
          width={148}
          height={140}
        />
        <span className='vela-station__text'>
          elaStation
        </span>
      </div>
    </VelaStationStyled>
  );
}

export default VelaStation;