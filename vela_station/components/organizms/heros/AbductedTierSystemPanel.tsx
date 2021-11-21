import styled from 'styled-components';
import { fontSizes } from 'styles/variables';
import TypeWriter from 'styles/effects/TypeWriter';
import ZoomOut from 'styles/effects/ZoomOut';
import DefaultButton from 'components/atoms/DefaultButton';
import GlassFrame from 'components/molecules/GlassFrame';
import Headline from 'components/atoms/Headline';

const AbductedTierSystemPanelStyled = styled.div`
  .tier-system-panel {
    position: relative;
    display: grid;
    height: 100vh;
    width: 100vw;
    grid-template-columns: 150px 40px 40px 330px 370px 1fr;
    grid-template-rows: 270px 50px 20px ${fontSizes.litleBig} 10px 140px 10px 1fr;

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

      &--text {
        line-height: 180%;
      }
    }

    &__block-2 {
      font-size: ${fontSizes.litleBig};
      grid-column: 3 / 6;
      grid-row: 8;
    }

    &__button {
      grid-column: 5 / 6;
      grid-row: 8;
    }
  }
`;

const AbductedTierSystemPanel = (props: { delay?: number }) => {
  const delay: number = props.delay === undefined ? 0 : props.delay;

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
            <div className='tier-system-panel__frame-text'>
              <TypeWriter text='Our abducted tier system offers a fair and equel opportunity for' duration={3} delay={1.5 + delay} /><br />
              <TypeWriter text='everyone to be probed proportionately to their shares of the pool. No' duration={3} delay={4.5 + delay} /><br />
              <TypeWriter text='less.. No more.. That has been our promise to the human race since our' duration={3} delay={7.5 + delay} /><br />
              <TypeWriter text='first day on earth. Invasion of more information is imminent...' duration={3} delay={10.5 + delay} />
            </div>
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
        <ZoomOut delay={delay}>
          <img src='/images/hero/hero02.jpg' alt='This is the hero image number 2.' />
        </ZoomOut>
      </div>
    </AbductedTierSystemPanelStyled>
  );
}

export default AbductedTierSystemPanel;
