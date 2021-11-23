import styled, { css } from 'styled-components';
import Image from 'next/image';
import { fontSizes, breakPoints } from 'styles/variables';
import { useState, useEffect } from 'react';
import { mediaDown } from 'styles/mixins';

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

      ${mediaDown('vga', css`
        left: 70px;
      `)};
    }
  }
`;

const VelaStation = () => {
  const [width, setWidth] = useState(148);
  const [height, setHeight] = useState(140);

  const resizeEvent = () => {
    if (window.innerWidth < breakPoints.vga) {
      setWidth(103.6);
      setHeight(98);
    } else {
      setWidth(148);
      setHeight(140);
    }
  }

  useEffect(() => {
    resizeEvent();
    window.addEventListener('resize', resizeEvent);  
  }, []);

  return (
    <VelaStationStyled>
      <div className='vela-station'>
        <Image
          src='/images/logo/V.png'
          width={width}
          height={height}
          alt="This is VelaStation's symbol."
        />
        <span className='vela-station__text'>
          elaStation
        </span>
      </div>
    </VelaStationStyled>
  );
}

export default VelaStation;