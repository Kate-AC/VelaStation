import styled, { css } from 'styled-components';
import VelaStation from 'components/atoms/logos/VelaStation';
import { fontSizes, breakPoints } from 'styles/variables';
import { mediaDown } from 'styles/mixins';
import TypeWriter from 'styles/effects/TypeWriter';
import ZoomOut from 'styles/effects/ZoomOut';
import VSTransition from 'styles/effects/VSTransition';
import DefaultButton from 'components/atoms/DefaultButton';
import GlassFrame from 'components/molecules/GlassFrame';
import Telegram from 'components/atoms/icons/Telegram';
import Twitter from 'components/atoms/icons/Twitter';
import { useState, useEffect } from 'react';

const VelaStationPanelStyled = styled.div`
  .vela-station-panel {
    position: relative;
    display: grid;
    height: 100vh;
    width: 100vw;
    grid-template-columns: 12% 40px 40px 280px 260px 4% 80px 420px 1fr;
    grid-template-rows: 150px 150px 40px ${fontSizes.litleBig} 10px 140px 10px 40px 80px 40px;

    ${mediaDown('uxga', css`
      grid-template-columns: 12% 40px 40px 280px 260px 4% 80px 120px 1fr;
    `)};

    ${mediaDown('xga', css`
      grid-template-columns: 12% 40px 40px 200px 220px 4% 140px 1fr;
    `)};

    ${mediaDown('tablet', css`
      grid-template-columns: 8% 40px 40px 200px 220px 4% 100px 1fr;
      grid-template-rows: 150px 150px 40px ${fontSizes.litleBig} 10px 165px 10px 40px 80px 40px;
    `)};

    ${mediaDown('vga', css`
      grid-template-columns: 4% 25px 0px 200px 100px 20px 1fr;
      grid-template-rows: 90px 80px 40px ${fontSizes.litleBig} 10px 110px 10px ${fontSizes.litleBig} 10px 40px 40px 30px;
    `)};

    &__hero-title {
      grid-row: 2;
      grid-column: 4 / 8;
    }

    &__block-1 {
      font-size: ${fontSizes.litleBig};
      grid-column: 3 / 6;
      grid-row: 4;
    }

    &__frame {
      font-size: ${fontSizes.litleBig};
      grid-column: 2 / 8;
      grid-row: 6;

      ${mediaDown('xga', css`
        grid-column: 2 / 8;
      `)};

      ${mediaDown('tablet', css`
        grid-column: 2 / 7;
      `)};

      ${mediaDown('vga', css`
        font-size: 0.9em;
        line-height: 220%;
      `)};
    }

    &__block-2 {
      font-size: ${fontSizes.litleBig};
      grid-column: 3 / 6;
      grid-row: 8;
    }

    &__buy {
      grid-column: 5 / 6;
      grid-row: 8;

      ${mediaDown('vga', css`
        grid-column: 3 / 5;
        grid-row: 10;
      `)};
    }

    &__icons {
      display: flex;
      grid-column: 6 / 7;
      grid-row: 8;

      ${mediaDown('vga', css`
        grid-column: 5 / 6;
        grid-row: 10;
      `)};

      svg {
        margin: 0 5px;
      }
    }

    &__contract {
      padding: 10px;
      text-align: center;
      background-color: rgb(255,255,255,0.12);
      grid-column: 7 / 9;
      grid-row: 10 / 11;

      ${mediaDown('uxga', css`
        grid-column: 5 / 9;
      `)};

      ${mediaDown('xga', css`
        grid-column: 4 / 6;
      `)};

      ${mediaDown('vga', css`
        grid-column: 4 / 7;
        grid-row: 12 / 13;
      `)};
    }
  }
`;

const VelaStationPanel = (props: { delay?: number; stop?: boolean; }) => {
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
    <VelaStationPanelStyled>
      <div className='vela-station-panel'>
        <div className='vela-station-panel__hero-title'>
          <VelaStation />
        </div>
        <div className='vela-station-panel__block-1'>
          <TypeWriter text='INCOMING TRANSMISSION . . .' duration={1.5} delay={delay} />
        </div>
        <div className='vela-station-panel__frame'>
          <GlassFrame>
            {
              stepDown ? (
                <div className='vela-station-panel__frame--text'>
                  <TypeWriter text='The first community driven lounchpad on Velas chain!' duration={2.25} delay={1.5 + delay} /><br />
                  <TypeWriter text='Aspiring to private the the way for future de-fi' duration={2.25} delay={3.75 + delay} /><br />
                  <TypeWriter text='projects, VelaStation offers a chance for all to get in on' duration={2.25} delay={6 + delay} /><br />
                  <TypeWriter text='the action with a fair and well structured their system.' duration={2.25} delay={8.25 + delay} />
                </div>
              ) : (
                <div className='vela-station-panel__frame--text'>
                  <TypeWriter text='The first community driven lounchpad on Velas chain! Aspiring to private the' duration={3} delay={1.5 + delay} /><br />
                  <TypeWriter text='the way for future de-fi projects, VelaStation offers a chance for all to' duration={3} delay={4.5 + delay} /><br />
                  <TypeWriter text='get in on the action with a fair and well structured their system.' duration={3} delay={7.5 + delay} />
                </div>
              )
            }

          </GlassFrame>
        </div>
        <div className='vela-station-panel__block-2'>
          <TypeWriter text='TRANSMISSION ENDED . . .' duration={1.5} delay={10.5 + delay} />
        </div>
        <div className='vela-station-panel__buy'>
          <DefaultButton
            clickEvent={() => window.open('https://exchange.wagyuswap.app/swap', '_blank')}
            text='Buy on Wagyu Swap'
            type='small'
          />
        </div>
        <div className='vela-station-panel__icons'>
          <Telegram />
          <Twitter />
        </div>
        <div className='vela-station-panel__contract'>
          <TypeWriter text='CONTRACT：0xaf472e8ed4f13f2e47e748f7869bfb6f9093d2b0' duration={1.5} delay={delay} />
        </div>

        <VSTransition stop={stop}>
          <ZoomOut delay={0}>
            <img src='/images/hero/hero01.jpg' alt='This is the hero image number 1.' />
          </ZoomOut>
        </VSTransition>
      </div>
    </VelaStationPanelStyled>
  );
}

export default VelaStationPanel;
