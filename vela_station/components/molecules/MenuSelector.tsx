import styled, { css } from 'styled-components';
import MenuItem, { MenuItemType } from 'components/atoms/menu/MenuItem';
import { getSelectMenuState } from 'contexts/SelectMenuContext';
import { useState, useEffect } from 'react';
import { mediaDown } from 'styles/mixins';
import { breakPoints } from 'styles/variables';

const MenuSelectorStyled = styled.div.attrs((props: { position: number; currentPosition: number; }) => ({
  position: props.position,
  currentPosition: props.currentPosition
}))`
  height: 100%;

  .menu-selector {
    backdrop-filter: blur(12px);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    height: 100%;
    width: 100vw;

    &-wrapper {
      display: flex;
      width: calc(320px * 3 + 20px);
      white-space: nowrap;
      overflow: hidden;
      position: relative;
      height: 80px;

      ${mediaDown('xga', css`
        width: calc(200px * 2);
      `)};

      &__content {
        position: absolute;
        display: flex;
        margin-left: ${props => {
          if (typeof window === 'undefined') {
            return 0;
          }

          if (window.innerWidth < breakPoints.xga) {
            if (props.currentPosition === 2) return -100;
            if (props.currentPosition === 3) return -300;
            if (props.currentPosition === 4) return -400;
            return 0;
          } else {
            if (props.currentPosition >= 3) return -330;
            return 0;
          }
        }}px;

        &.slidingLeft100,
        &.slidingLeft200,
        &.slidingLeft330,
        &.slidingRight100,
        &.slidingRight200,
        &.slidingRight330 {
          animation-fill-mode: forwards;
          animation-duration: 0.8s;
          animation-timing-function: ease;
        }
        &.slidingLeft100 {
          animation-name: slidingLeft100;
        }
        &.slidingLeft200 {
          animation-name: slidingLeft200;
        }
        &.slidingLeft330 {
          animation-name: slidingLeft330;
        }
        &.slidingRight100 {
          animation-name: slidingRight100;
        }
        &.slidingRight200 {
          animation-name: slidingRight200;
        }
        &.slidingRight330 {
          animation-name: slidingRight330;
        }
      }
    }
  }

  @keyframes slidingLeft100 {
    0% { left: 0; }
    100% { left: -100px; }
  }
  @keyframes slidingLeft200 {
    0% { left: 0; }
    100% { left: -200px; }
  }
  @keyframes slidingLeft330 {
    0% { left: 0; }
    100% { left: -330px; }
  }
  @keyframes slidingRight100 {
    0% { left: 0; }
    100% { left: 100px; }
  }
  @keyframes slidingRight200 {
    0% { left: 0; }
    100% { left: 200px; }
  }
  @keyframes slidingRight330 {
    0% { left: 0; }
    100% { left: 330px; }
  }
`;

const menuList: MenuItemType[] = [
  {
    number: 1,
    title: 'VelaStation',
    thumbnail: '/images/thumbnail/menu01.jpg'
  },
  {
    number: 2,
    title: 'Abducted Tier System',
    thumbnail: '/images/thumbnail/menu02.jpg'
  },
  {
    number: 3,
    title: 'Tokenomics',
    thumbnail: '/images/thumbnail/menu03.jpg'
  },
  {
    number: 4,
    title: 'LounchPad of the Past',
    thumbnail: '/images/thumbnail/menu04.jpg'
  },
];

const MenuSelector = () => {
  const { clickedMenu, setClickedMenu } = getSelectMenuState();
  const [currentMenu, setCurrentMenu] = useState(1);
  const [sliding, setSliding] = useState('');

  useEffect(() => {
    setClickedMenu(clickedMenu);

    const diff = currentMenu - clickedMenu;
    let slidingName = '';

    if (window.innerWidth < breakPoints.xga) {
      if (diff < 0) {
        slidingName = clickedMenu === 2 || clickedMenu === 4 ? 'slidingLeft100' : 'slidingLeft200';
      }
  
      if (diff > 0) {
        slidingName = clickedMenu === 1 || clickedMenu === 3 ? 'slidingRight100' : 'slidingRight200';
      }
    } else {
      if (diff < 0) {
        slidingName = clickedMenu === 3 ? 'slidingLeft330' : '';
      }
  
      if (diff > 0) {
        slidingName = clickedMenu === 2 ? 'slidingRight330' : '';
      }
    }

    setSliding(slidingName);

    setTimeout(() => {
      setSliding('');
      setCurrentMenu(clickedMenu);
    }, 1000);
  }, [clickedMenu]);

  return (
    <MenuSelectorStyled position={clickedMenu} currentPosition={currentMenu}>
      <div className='menu-selector'>
        <div className='menu-selector-wrapper'>
          <div className={[
            'menu-selector-wrapper__content',
            sliding
          ].join(' ')}>
            {
              menuList.map((item: MenuItemType, key: number) => (
                <MenuItem
                  key={key}
                  title={item.title}
                  number={item.number}
                  thumbnail={item.thumbnail}
                  clickEvent={() => {setClickedMenu(item.number)}}
                />
              ))
            }
          </div>
        </div>
      </div>
    </MenuSelectorStyled>
  );
}

export default MenuSelector;