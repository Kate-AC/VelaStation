import styled from 'styled-components';
import { getSelectMenuState } from 'contexts/SelectMenuContext';
import { useState, useEffect, cloneElement } from 'react';
import { zIndexes } from 'styles/variables';

const PanelSwitcherStyled = styled.div`
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  .panel-switcher {
    &__panel {

      &--current {
        position: absolute;
        top: 0;
        left: 0;
        z-index: ${zIndexes.currentPanel};

        &.fadeout {
          animation-name: fadeOut;
          animation-fill-mode: forwards;
          animation-duration: 0.8s;
          animation-timing-function: linear;
        }
      }

      &--next {
        position: absolute;
        top: 0;
        left: 0;
        z-index: ${zIndexes.nextPanel};
      }
    }
  }
`;

const PanelSwitcher = (props: { children: React.ReactNode }) => {
  const panelList: any = props.children;
  const { clickedMenu } = getSelectMenuState();
  const [currentPanel, setCurrentPanel] = useState(panelList[clickedMenu - 1]);
  const [nextPanel, setNextPanel] = useState(panelList[clickedMenu - 1]);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setFadeOut(true);
    setNextPanel(panelList[clickedMenu - 1]);

    setTimeout(() => {
      setCurrentPanel(
        cloneElement(
          panelList[clickedMenu - 1],
          {
            stop: true,
          }
        )
      );
      setFadeOut(false);
    }, 800);
  }, [clickedMenu]);

  return (
    <PanelSwitcherStyled>
      <div className='panel-switcher'>
        <div className='panel-switcher__panel'>
          <div className={[
            'panel-switcher__panel--current',
            fadeOut ? 'fadeout' : ''
          ].join(' ')}>
            {currentPanel}
          </div>
          <div className='panel-switcher__panel--next'>
            {
              cloneElement(nextPanel, { delay: 3 })
            }
          </div>
        </div>
      </div>
    </PanelSwitcherStyled>
  );
}

export default PanelSwitcher;
