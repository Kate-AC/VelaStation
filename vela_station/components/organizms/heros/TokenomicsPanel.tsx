import styled from 'styled-components';
import { fontSizes } from 'styles/variables';
import TypeWriter from 'styles/effects/TypeWriter';
import ZoomOut from 'styles/effects/ZoomOut';
import DefaultButton from 'components/atoms/DefaultButton';
import Headline from 'components/atoms/Headline';

const TokenomicsPanelStyled = styled.div`
  .tokenomics-panel {
    position: relative;
    display: grid;
    height: 100vh;
    width: 100vw;
    grid-template-columns: 0px 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 100px 50px 80px repeat(3, 60px) 50px 80px 1fr;

    &__hero-title {
      grid-row: 2;
      grid-column: 4 / 6;
      text-align: center;
    }

    &__name {
      font-size: ${fontSizes.litleBig};
      grid-column: 3 / 8;
      grid-row: 4;
    }

    &__contract {
      font-size: ${fontSizes.litleBig};
      grid-column: 3 / 8;
      grid-row: 5;
    }

    &__supply {
      font-size: ${fontSizes.litleBig};
      grid-column: 3 / 8;
      grid-row: 6;
    }

    &__button {
      grid-column: 4 / 6;
      grid-row: 8;
      text-align: center;
    }
  }
`;

const TokenomicsPanel = (props: { delay?: number }) => {
  const delay: number = props.delay === undefined ? 0 : props.delay;

  return (
    <TokenomicsPanelStyled>
      <div className='tokenomics-panel'>
        <div className='tokenomics-panel__hero-title'>
          <Headline title='Tokenomics' />
        </div>
        <div className='tokenomics-panel__name'>
          <TypeWriter duration={1} delay={delay}>
            <Headline title='Name: VelaStation(VLXS)' type='small' />
          </TypeWriter>
        </div>
        <div className='tokenomics-panel__contract'>
          <TypeWriter duration={2} delay={delay}>
            <Headline title='Contract: 0xaf472e8ed4f13f2e47e748f7869bfb6f9093d2b0' type='small' />
          </TypeWriter>
        </div>
        <div className='tokenomics-panel__supply'>
          <TypeWriter duration={1} delay={delay}>
            <Headline title='Supply: 1,000,000,000' type='small' />
          </TypeWriter>
        </div>
        <div className='tokenomics-panel__button'>
          <DefaultButton text='TOKENOMICS TO BE ANNOUNCED' type='large' />
        </div>
        <ZoomOut delay={delay}>
          <img src='/images/hero/hero03.jpg' alt='This is the hero image number 3.' />
        </ZoomOut>
      </div>
    </TokenomicsPanelStyled>
  );
}

export default TokenomicsPanel;
