import styled, { css } from 'styled-components';
import { fontSizes, breakPoints } from 'styles/variables';
import TypeWriter from 'styles/effects/TypeWriter';
import ZoomOut from 'styles/effects/ZoomOut';
import DefaultButton from 'components/atoms/DefaultButton';
import Headline from 'components/atoms/Headline';
import VSTransition from 'styles/effects/VSTransition';
import { mediaDown } from 'styles/mixins';
import { useState, useEffect } from 'react';

const TokenomicsPanelStyled = styled.div`
  .tokenomics-panel {
    position: relative;
    display: grid;
    height: 100vh;
    width: 100vw;
    grid-template-columns: 18% 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 100px 50px 80px repeat(3, 60px) 50px 80px 1fr;

    ${mediaDown('uxga', css`
      grid-template-columns: 12% 20% 1fr 1fr 1fr 1fr;
    `)};

    ${mediaDown('wxga', css`
      grid-template-rows: 100px 50px 80px repeat(3, 100px) 50px 80px 1fr;
    `)};

    ${mediaDown('xga', css`
      grid-template-columns: 18% 1fr 1fr 1fr 1fr 1fr;
      grid-template-rows: 100px 50px 80px repeat(3, 100px) 50px 80px 1fr;
    `)};

    &__hero-title {
      grid-row: 2;
      grid-column: 3 / 5;
      text-align: center;

      ${mediaDown('tablet', css`
        font-size: ${fontSizes.litleBig};
        grid-column: 1 / 7;
      `)};
    }

    &__name,
    &__contract,
    &__supply {
      font-size: ${fontSizes.litleBig};
      grid-column: 2 / 7;

      ${mediaDown('uxga', css`
        font-size: ${fontSizes.default};
      `)};

      ${mediaDown('wxga', css`
        font-size: ${fontSizes.litleBig};
        grid-column: 2 / 6;
        text-align: center;
      `)};

      ${mediaDown('tablet', css`
        grid-column: 1 / 7;
      `)};

      ${mediaDown('vga', css`
        font-size: ${fontSizes.onePointSeven};
      `)};
    }

    &__name {
      grid-row: 4;
    }

    &__contract {
      grid-row: 5;

      ${mediaDown('xga', css`
        grid-column: 1 / 7;
      `)};

      &--value {
        ${mediaDown('wxga', css`
          font-size: 0.8em;
        `)};

        ${mediaDown('tablet', css`
          font-size: 0.6em;
        `)};

        ${mediaDown('vga', css`
          font-size: 0.4em;
        `)};

        ${mediaDown('phone', css`
          font-size: 0.3em;
        `)};
      }
    }

    &__supply {
      grid-row: 6;
    }

    &__button {
      grid-column: 3 / 5;
      grid-row: 8;
      text-align: center;

      ${mediaDown('tablet', css`
        grid-column: 1 / 7;
      `)};
    }
  }
`;

const TokenomicsPanel = (props: { delay?: number; stop?: boolean; }) => {
  const delay: number = props.delay === undefined ? 0 : props.delay;
  const stop: boolean = props.stop === undefined ? false : props.stop;

  const [stepDown, setStepDown] = useState(false);

  const resizeEvent = () => {
    setStepDown(window.innerWidth < breakPoints.wxga);
  }

  useEffect(() => {
    resizeEvent();
    window.addEventListener('resize', resizeEvent);
  }, []);

  return (
    <TokenomicsPanelStyled>
      <div className='tokenomics-panel'>
        <div className='tokenomics-panel__hero-title'>
          <Headline title='Tokenomics' />
        </div>
        <div className='tokenomics-panel__name'>
        {
          stepDown ? (
            <>
              <div className='tokenomics-panel__name--title'>
                <TypeWriter duration={0.5} delay={delay}>
                  <Headline title='Name' type='small' />
                </TypeWriter>
              </div>
              <div className='tokenomics-panel__name--value'>
                <TypeWriter duration={1} delay={delay}>
                  <Headline title='VelaStation(VLXS)' type='small' />
                </TypeWriter>
              </div>
            </>
          ) : (
            <TypeWriter duration={1} delay={delay}>
              <Headline title='Name: VelaStation(VLXS)' type='small' />
            </TypeWriter>
          )
        }
        </div>
        <div className='tokenomics-panel__contract'>
        {
          stepDown ? (
            <>
              <div className='tokenomics-panel__contract--title'>
                <TypeWriter duration={0.5} delay={delay}>
                  <Headline title='Contract' type='small' />
                </TypeWriter>
              </div>
              <div className='tokenomics-panel__contract--value'>
                <TypeWriter duration={1.5} delay={delay}>
                  <Headline title='0xaf472e8ed4f13f2e47e748f7869bfb6f9093d2b0' type='small' />
                </TypeWriter>
              </div>
            </>
          ) : (
            <TypeWriter duration={2} delay={delay}>
              <Headline title='Contract: 0xaf472e8ed4f13f2e47e748f7869bfb6f9093d2b0' type='small' />
            </TypeWriter>
          )
        }
        </div>
        <div className='tokenomics-panel__supply'>
        {
          stepDown ? (
            <>
              <div className='tokenomics-panel__supply--title'>
                <TypeWriter duration={0.5} delay={delay}>
                  <Headline title='Supply' type='small' />
                </TypeWriter>
              </div>
              <div className='tokenomics-panel__supply--title'>
                <TypeWriter duration={1} delay={delay}>
                  <Headline title='1,000,000,000' type='small' />
                </TypeWriter>
              </div>
            </>
          ) : (
            <TypeWriter duration={1} delay={delay}>
              <Headline title='Supply: 1,000,000,000' type='small' />
            </TypeWriter>
          )
        }
        </div>
        <div className='tokenomics-panel__button'>
          <DefaultButton text='TOKENOMICS TO BE ANNOUNCED' type='large' />
        </div>
        <VSTransition stop={stop}>
          <ZoomOut delay={delay}>
            <img src='/images/hero/hero03.jpg' alt='This is the hero image number 3.' />
          </ZoomOut>
        </VSTransition>
      </div>
    </TokenomicsPanelStyled>
  );
}

export default TokenomicsPanel;
