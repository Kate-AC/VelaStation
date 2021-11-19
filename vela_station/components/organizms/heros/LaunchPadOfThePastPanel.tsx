import styled from 'styled-components';
import { fontSizes } from 'styles/variables';
import TypeWriter from 'styles/effects/TypeWriter';
import ZoomOut from 'styles/effects/ZoomOut';
import DefaultButton from 'components/atoms/DefaultButton';
import GlassFrame from 'components/molecules/GlassFrame';
import Headline from 'components/atoms/Headline';

const LaunchPadOfThePastPanelStyled = styled.div`
  .launch-pad {
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

const LaunchPadOfThePastPanel = () => {
  return (
    <LaunchPadOfThePastPanelStyled>
      <div className='launch-pad'>
        <div className='launch-pad__hero-title'>
          <Headline title='Launchpad of the past...' />
        </div>
        <div className='launch-pad__block-1'>
          <TypeWriter text='INCOMING TRANSMISSION . . .' duration={1.5} />
        </div>
        <div className='launch-pad__frame'>
          <GlassFrame>
            <div className='launch-pad__frame-text'>
              <TypeWriter text='The ideal platform for all terrans to come see us display the best and' duration={3} delay={1.5} /><br />
              <TypeWriter text='most unnoticed spaceships that are about to take off to distant stars.' duration={3} delay={4.5} /><br />
              <TypeWriter text='Our noble race feels that without the proper security protocols in place,' duration={3} delay={7.5} /><br />
              <TypeWriter text='and marketing they may face grave danger on the way.' duration={3} delay={10.5} />
            </div>
          </GlassFrame>
        </div>
        <div className='launch-pad__block-2'>
          <TypeWriter text='TRANSMISSION ENDED . . .' duration={1.5} delay={13.5} />
        </div>
        <div className='launch-pad__button'>
          <DefaultButton
            clickEvent={() => {}}
            text="IDO'S TO BE ANNOUNCED"
            type='small'
          />
        </div>
        <ZoomOut>
          <img src='/images/hero/hero04.jpg' />
        </ZoomOut>
      </div>
    </LaunchPadOfThePastPanelStyled>
  );
}

export default LaunchPadOfThePastPanel;
