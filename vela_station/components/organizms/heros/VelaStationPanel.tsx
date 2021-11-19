import styled from 'styled-components';
import VelaStation from 'components/atoms/logos/VelaStation';
import { fontSizes } from 'styles/variables';
import TypeWriter from 'styles/effects/TypeWriter';
import ZoomOut from 'styles/effects/ZoomOut';
import DefaultButton from 'components/atoms/DefaultButton';
import GlassFrame from 'components/molecules/GlassFrame';
import Telegram from 'components/atoms/icons/Telegram';
import Twitter from 'components/atoms/icons/Twitter';
import React from 'react';

const VelaStationPanelStyled = styled.div`
  .vela-station-panel {
    position: relative;
    display: grid;
    height: 100vh;
    width: 100vw;
    grid-template-columns: 150px 40px 40px 280px 260px 60px repeat(5, 100px) 1fr;
    grid-template-rows: 150px 150px 40px ${fontSizes.litleBig} 10px 140px 10px 40px 80px 40px;

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

      &--text {
        line-height: 180%;
      }
    }

    &__block-2 {
      font-size: ${fontSizes.litleBig};
      grid-column: 3 / 6;
      grid-row: 8;
    }

    &__buy {
      grid-column: 5 / 6;
      grid-row: 8;
    }

    &__icons {
      display: flex;
      grid-column: 6 / 7;
      grid-row: 8;

      svg {
        margin: 0 5px;
      }
    }

    &__contract {
      padding: 10px;
      text-align: center;
      background-color: rgb(255,255,255,0.12);
      grid-column: 7 / 12;
      grid-row: 10 / 11;
    }
  }
`;

const VelaStationPanel = () => {
  return (
    <VelaStationPanelStyled>
      <div className='vela-station-panel'>
        <div className='vela-station-panel__hero-title'>
          <VelaStation />
        </div>
        <div className='vela-station-panel__block-1'>
          <TypeWriter text='INCOMING TRANSMISSION . . .' duration={1.5} />
        </div>
        <div className='vela-station-panel__frame'>
          <GlassFrame>
            <div className='vela-station-panel__frame--text'>
              <TypeWriter text='The first community driven lounchpad on Velas chain! Aspiring to private the' duration={3} delay={1.5} /><br />
              <TypeWriter text='the way for future de-fi projects, VelaStation offers a chance for all to' duration={3} delay={4.5} /><br />
              <TypeWriter text='get in on the action with a fair and well structured their system.' duration={3} delay={7.5} />
            </div>
          </GlassFrame>
        </div>
        <div className='vela-station-panel__block-2'>
          <TypeWriter text='TRANSMISSION ENDED . . .' duration={1.5} delay={10.5} />
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
          <TypeWriter text='CONTRACT：0xaf472e8ed4f13f2e47e748f7869bfb6f9093d2b0' duration={1.5} />
        </div>
        <ZoomOut>
          <img src='/images/hero/hero01.jpg' alt='This is the hero image number 1.' />
        </ZoomOut>
      </div>
    </VelaStationPanelStyled>
  );
}

export default VelaStationPanel;
