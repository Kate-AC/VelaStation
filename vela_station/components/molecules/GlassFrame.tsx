import React from 'react';
import styled, { css } from 'styled-components';
import { mediaDown } from 'styles/mixins';

const GlassFrameStyled = styled.div`
  .glass-frame {
    position: relative;
    height: calc(100px + 40px);
    box-sizing: border-box;

    &__wrapper {
      padding: 20px 30px;
      border: 1px solid #555;
      backdrop-filter: blur(12px);
      transform:skewX(-10deg);
      height: calc(100px + 40px);

      ${mediaDown('xga', css`
        height: 130px;
      `)};

      ${mediaDown('tablet', css`
        height: 165px;
      `)};

      ${mediaDown('vga', css`
        height: 110px;
      `)};

      * {
        color: rgba(0,0,0,0);
      }
      &:after {
        oprcity: none;
      }
    }

    &__text {
      position: absolute;
      top: 20px;
      left: 40px;

      ${mediaDown('vga', css`
        top: 10px;
        left: 25px;
      `)};

    }
  }
`;

const GlassFrame = (props: { children: React.ReactElement}) => (
  <GlassFrameStyled>
    <div className='glass-frame'>
      <div className='glass-frame__wrapper'>
        { props.children }
      </div>
      <div className='glass-frame__text'>
        { props.children }
      </div>
    </div>
  </GlassFrameStyled>
);

export default GlassFrame;