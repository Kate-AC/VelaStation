import Glitch from 'styles/effects/Glitch';
import Linear from 'styles/effects/Linear';
import TvStatic from 'styles/effects/TvStatic';
import styled from 'styled-components';
import { zIndexes } from 'styles/variables';
import React, { useState, useEffect } from 'react';
import { getSelectMenuState } from 'contexts/SelectMenuContext';

const VSTransitionStyled = styled.div`
  .vs-transition {
    position: relative;
    z-index: ${zIndexes.vsTransitionEffect};

    &__filter {
      z-index: ${zIndexes.heroImage};
    }
  }

  img {
    top: 0;
    left: 0;
    position: absolute;
    height: 100vh;
    width: 100vw;
    z-index: ${zIndexes.heroImage};
    transform: scale(1.2);
    object-fit: cover;
  }
`;

const VSTransition = (props: { children: React.ReactElement; delay?: number; reverse?: boolean; stop?: boolean }) => {
  const delay = props.delay === undefined ? 0 : props.delay;
  const [started, setStarted] = useState(false);
  const { clickedMenu } = getSelectMenuState();
  const [currentMenu, setCurrentMenu] = useState(clickedMenu);
  const [reverse, setReverse] = useState(props.reverse === undefined ? false : props.reverse);
  const [stop, setStop] = useState(props.stop === undefined ? false : props.stop);

  useEffect(() => {
    if (currentMenu === clickedMenu) {
      return;
    }

    setStop(false);
    setStarted(true);
    setReverse(false);
    setCurrentMenu(clickedMenu);
  }, [clickedMenu]);

  setTimeout(() => {
    setStarted(true);
  }, delay * 1000);

  let img: React.ReactElement = <img />;
  if (props.children.type === 'img') {
    img = props.children;
  } else {
    const element: React.ReactElement = props.children;
    img = element.props.children;
  }

  return (
    <VSTransitionStyled>
      <div className='vs-transition'>
        {
          stop ? (
            <></>
          ) : (
            <div className={started ? 'vs-transition__filter' : ''}>
              <TvStatic reverse={reverse}>
                <Linear reverse={reverse}>
                  <Glitch reverse={reverse}>
                    <img src={img.props.src} alt={img.props.alt} />
                  </Glitch>
                </Linear>
              </TvStatic>
            </div>
          )
        }
      </div>
      { props.children }
    </VSTransitionStyled>
  );
}

export default VSTransition;