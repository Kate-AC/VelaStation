import styled from 'styled-components';
import MenuItem, { MenuItemType } from 'components/atoms/menu/MenuItem';
import { getSelectMenuState } from 'contexts/SelectMenuContext';
import { useState, useEffect } from 'react';

const MenuSelectorStyled = styled.div.attrs((props: { position: number }) => ({
  position: props.position
}))`
  height: 100%;

  .menu-selector {
    backdrop-filter: blur(12px);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    height: 100%;
    width: 100%;

    &-wrapper {
      display: flex;
      width: calc(320px * 3 + 20px);
      white-space: nowrap;
      overflow: hidden;
      position: relative;
      height: 80px;

      &__content {
        position: absolute;

        &.slideRight {
          animation-name: slideRight;
          animation-fill-mode: forwards;
          animation-duration: 0.4s;
          animation-timing-function: ease;
        }

        &.slideLeft {
          animation-name: slideLeft;
          animation-fill-mode: forwards;
          animation-duration: 0.4s;
          animation-timing-function: ease;
        }
      }
    }
  }

  @keyframes slideRight {
    0% { left: -325px; }
    100% { left: 0px; }
  }

  @keyframes slideLeft {
    0% { left: 0; }
    100% { left: -325px; }
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
  const [animation, setAnimation] = useState('');

  useEffect(() => {
    if (currentMenu <= 2 && clickedMenu >= 3) {
      setAnimation('slideLeft');
    }

    if (currentMenu >= 3 && clickedMenu <= 2) {
      setAnimation('slideRight');
    }

    setCurrentMenu(clickedMenu);
  }, [clickedMenu]);

  return (
    <MenuSelectorStyled>
      <div className='menu-selector'>
        <div className='menu-selector-wrapper'>
          <div className={[
            'menu-selector-wrapper__content',
            animation
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