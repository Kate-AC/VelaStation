import styled from 'styled-components';
import { colors } from 'styles/variables';
import { useState, useEffect } from 'react';

type CurtainOpenStyleType = {
  duration: number;
  delay?: number;
}

const CurtainOpenStyled = styled.div.attrs((props: CurtainOpenStyleType) => ({
  duration: props.duration,
  delay: props.delay,
}))`
  display: inline-block;

  @keyframes open {
    0% { width: 0; }
    100% { width: 100%; }
  }

  .curtain-open {
    color: ${colors.white};
    display: flex;

    &__text {
      overflow: hidden;
      white-space: nowrap;
      width: 0;

      &.effect {
        animation-name: open;
        animation-fill-mode: forwards;
        animation-delay: ${props => props.delay + 's'};
        animation-duration: ${props => props.duration + 's'};
        animation-timing-function: linear;
      }
    }
  }
`;

const CurtainOpen = (props: CurtainOpenStyleType & { text: string }) => {
  const delay = undefined === props.delay ? 0 : props.delay;

  return (
    <CurtainOpenStyled
      duration={props.duration}
      delay={delay}
    >
      <div className={'curtain-open'}>
        <div className={['curtain-open__text', 'effect'].join(' ')}>
          { props.text }
        </div>
      </div>
    </CurtainOpenStyled>
  );
}

export default CurtainOpen;