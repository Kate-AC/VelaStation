import styled, { css } from 'styled-components';
import { fontSizes, breakPoints } from 'styles/variables';
import { mediaDown } from 'styles/mixins';
import TypeWriter from 'styles/effects/TypeWriter';
import ZoomOut from 'styles/effects/ZoomOut';
import DefaultButton from 'components/atoms/DefaultButton';
import GlassFrame from 'components/molecules/GlassFrame';
import Headline from 'components/atoms/Headline';
import VSTransition from 'styles/effects/VSTransition';
import { useState, useEffect } from 'react';

const LaunchPadOfThePastPanelStyled = styled.div`
  .launch-pad {
    position: relative;
    display: grid;
    height: 100vh;
    width: 100vw;
    grid-template-columns: 150px 40px 40px 330px 370px 1fr;
    grid-template-rows: 270px 50px 20px ${fontSizes.litleBig} 10px 140px 10px 1fr;

    ${mediaDown('xga', css`
      grid-template-columns: 12% 40px 40px 200px 180px 4% 140px 1fr;
    `)};

    ${mediaDown('tablet', css`
      grid-template-columns: 8% 40px 40px 200px 220px 90px 1fr;
      grid-template-rows: 270px 50px 20px ${fontSizes.litleBig} 10px 165px 10px 1fr;
    `)};

    ${mediaDown('vga', css`
      grid-template-columns: 4% 25px 40px 200px 80px 1fr;
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
        line-height: 150%;
      `)};

      ${mediaDown('vga', css`
        grid-column: 2 / 6;
        font-size: 0.9em;
        line-height: 180%;
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

const LaunchPadOfThePastPanel = (props: { delay?: number; stop?: boolean; }) => {
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
    <LaunchPadOfThePastPanelStyled>
      <div className='launch-pad'>
        <div className='launch-pad__hero-title'>
          <Headline title='Launchpad of the past...' />
        </div>
        <div className='launch-pad__block-1'>
          <TypeWriter text='INCOMING TRANSMISSION . . .' duration={1.5} delay={delay} />
        </div>
        <div className='launch-pad__frame'>
          <GlassFrame>
            {
              stepDown ? (
                <div className='tier-system-panel__frame-text'>
                  <TypeWriter text='The ideal platform for all terrans to come see us' duration={2.3} delay={1.5 + delay} /><br />
                  <TypeWriter text='display the best and most unnoticed spaceships that' duration={2.3} delay={3.8 + delay} /><br />
                  <TypeWriter text='are about to take off to distant stars. Our noble race' duration={2.3} delay={6.1 + delay} /><br />
                  <TypeWriter text='feels that without the proper security protocols in place,' duration={2.3} delay={8.8 + delay} />
                  <TypeWriter text='and marketing they may face grave danger on the way.' duration={2.3} delay={11.1 + delay} />
                </div>
              ) : (
                <div className='launch-pad__frame-text'>
                  <TypeWriter text='The ideal platform for all terrans to come see us display the best and' duration={3} delay={1.5 + delay} /><br />
                  <TypeWriter text='most unnoticed spaceships that are about to take off to distant stars.' duration={3} delay={4.5 + delay} /><br />
                  <TypeWriter text='Our noble race feels that without the proper security protocols in place,' duration={3} delay={7.5 + delay} /><br />
                  <TypeWriter text='and marketing they may face grave danger on the way.' duration={3} delay={10.5 + delay} />
                </div>
              )
            }
          </GlassFrame>
        </div>
        <div className='launch-pad__block-2'>
          <TypeWriter text='TRANSMISSION ENDED . . .' duration={1.5} delay={13.5 + delay} />
        </div>
        <div className='launch-pad__button'>
          <DefaultButton
            clickEvent={() => {}}
            text="IDO'S TO BE ANNOUNCED"
            type='small'
          />
        </div>
        <VSTransition stop={stop}>
          <ZoomOut delay={delay}>
            <img src='/images/hero/hero04.jpg' alt='This is the hero image number 4.' />
          </ZoomOut>
        </VSTransition>
      </div>
    </LaunchPadOfThePastPanelStyled>
  );
}

export default LaunchPadOfThePastPanel;
