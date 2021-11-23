import styled, { css } from 'styled-components';
import { fontSizes, breakPoints } from 'styles/variables';
import TypeWriter from 'styles/effects/TypeWriter';
import ZoomOut from 'styles/effects/ZoomOut';
import { mediaDown } from 'styles/mixins';
import DefaultButton from 'components/atoms/DefaultButton';
import GlassFrame from 'components/molecules/GlassFrame';
import Headline from 'components/atoms/Headline';
import VSTransition from 'styles/effects/VSTransition';
import { useState, useEffect } from 'react';

const AbductedTierSystemPanelStyled = styled.div`
  .tier-system-panel {
    position: relative;
    display: grid;
    height: 100vh;
    width: 100vw;
    grid-template-columns: 12% 40px 40px 330px 320px 1fr;
    grid-template-rows: 270px 50px 20px ${fontSizes.litleBig} 10px 140px 10px 1fr;

    ${mediaDown('xga', css`
      grid-template-columns: 12% 40px 40px 200px 180px 4% 140px 1fr;
    `)};

    ${mediaDown('tablet', css`
      grid-template-columns: 8% 40px 40px 200px 220px 90px 1fr;
      grid-template-rows: 270px 50px 20px ${fontSizes.litleBig} 10px 165px 10px 1fr;
    `)};

    ${mediaDown('vga', css`
      grid-template-columns: 4% 25px 40px 200px 60px 1fr;
      grid-template-rows: 100px 70px 20px ${fontSizes.litleBig} 10px 110px 10px ${fontSizes.litleBig} 10px 40px 1fr;
    `)};

    &__hero-title {
      grid-row: 2;
      grid-column: 2 / 8;
    }

    &__block-1 {
      font-size: ${fontSizes.litleBig};
      grid-column: 3 / 6;
      grid-row: 4;
    }

    &__frame {
      font-size: ${fontSizes.litleBig};
      grid-column: 2 / 6;
      grid-row: 6;

      ${mediaDown('xga', css`
        grid-column: 2 / 8;
      `)};

      ${mediaDown('tablet', css`
        grid-column: 2 / 7;
      `)};

      ${mediaDown('vga', css`
        grid-column: 2 / 6;
        font-size: 0.9em;
        line-height: 150%;
      `)};
    }

    &__block-2 {
      font-size: ${fontSizes.litleBig};
      grid-column: 3 / 6;
      grid-row: 8;
    }

    &__button {
      grid-column: 5 / 6;
      grid-row: 8;

      ${mediaDown('vga', css`
        grid-column: 3 / 5;
        grid-row: 10;
      `)};
    }
  }
`;

const AbductedTierSystemPanel = (props: { delay?: number; stop?: boolean; }) => {
  const delay: number = props.delay === undefined ? 0 : props.delay;
  const stop: boolean = props.stop === undefined ? false : props.stop;

  const [stepDown, setStepDown] = useState(false);

  const resizeEvent = () => {
    setStepDown(window.innerWidth < breakPoints.tablet);
  }

  useEffect(() => {
    resizeEvent();
    window.addEventListener('resize', resizeEvent);
  }, []);

  return (
    <AbductedTierSystemPanelStyled>
      <div className='tier-system-panel'>
        <div className='tier-system-panel__hero-title'>
          <Headline title='Abducted Tier System' />
        </div>
        <div className='tier-system-panel__block-1'>
          <TypeWriter text='INCOMING TRANSMISSION . . .' duration={1.5} delay={delay} />
        </div>
        <div className='tier-system-panel__frame'>
          <GlassFrame>
            {
              stepDown ? (
                <div className='tier-system-panel__frame-text'>
                  <TypeWriter text='Our abducted tier system offers a fair and equel' duration={2} delay={1.5 + delay} /><br />
                  <TypeWriter text='opportunity for everyone to be probed proportionately' duration={2} delay={3.5 + delay} /><br />
                  <TypeWriter text='to their shares of the pool. No less.. No more..' duration={2} delay={5.5 + delay} /><br />
                  <TypeWriter text='That has been our promise to the human race since' duration={2} delay={7.5 + delay} /><br />
                  <TypeWriter text='our first day on earth. Invasion of more information' duration={2} delay={9.5 + delay} /><br />
                  <TypeWriter text='is imminent...' duration={0.8} delay={11.5 + delay} />
                </div>
              ) : (
                <div className='tier-system-panel__frame-text'>
                  <TypeWriter text='Our abducted tier system offers a fair and equel opportunity for' duration={3} delay={1.5 + delay} /><br />
                  <TypeWriter text='everyone to be probed proportionately to their shares of the pool. No' duration={3} delay={4.5 + delay} /><br />
                  <TypeWriter text='less.. No more.. That has been our promise to the human race since our' duration={3} delay={7.5 + delay} /><br />
                  <TypeWriter text='first day on earth. Invasion of more information is imminent...' duration={3} delay={10.5 + delay} />
                </div>
              )
            }
          </GlassFrame>
        </div>
        <div className='tier-system-panel__block-2'>
          <TypeWriter text='TRANSMISSION ENDED . . .' duration={1.5} delay={13.5 + delay} />
        </div>
        <div className='tier-system-panel__button'>
          <DefaultButton
            clickEvent={() => {}}
            text='TIER SYSTEM TO BE ANNOUNCED'
            type='small'
          />
        </div>
        <VSTransition stop={stop}>
          <ZoomOut delay={delay}>
            <img src='/images/hero/hero02.jpg' alt='This is the hero image number 2.' />
          </ZoomOut>
        </VSTransition>
      </div>
    </AbductedTierSystemPanelStyled>
  );
}

export default AbductedTierSystemPanel;
