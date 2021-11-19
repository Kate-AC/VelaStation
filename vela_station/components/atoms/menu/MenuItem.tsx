import styled from 'styled-components';
import Image from 'next/image';
import { colors, fontSizes } from 'styles/variables';
import { getSelectMenuState } from 'contexts/SelectMenuContext';

const MenuItemStyled = styled.div`
  display: inline-block;

  .menu-item {
    cursor: pointer;
    width: 320px;
    border-bottom: 1px solid #999;
    display: flex;
    color: ${colors.white};
    margin: 5px;
    transition: all;
    transition-duration: 0.3s;
    position: relative;
    clip-path: polygon(0% 0%, 94% 0%, 100% 30%, 100% 100%, 0% 100%);

    &__content {
      display: flex;
      flex-direction: column;
      padding-left: 20px;

      &--number {
        display: flex;
        align-items: center;
        font-size: ${fontSizes.litleBig};
        font-weight: bold;
        height: 100%;
      }

      &--title {
        line-height: 60%;
      }
    }

    &.selected,
    &:hover {
      color: ${colors.black};
      background-color: ${colors.white};
    }
  }
`;

type MenuItemType = {
  thumbnail: string;
  number: number;
  title: string;
}

const MenuItem = (props: MenuItemType & { clickEvent: () => void; }) => {
  const { clickedMenu } = getSelectMenuState();

  return (
    <MenuItemStyled>
      <div
        className={[
          'menu-item',
          clickedMenu === props.number ? 'selected' : ''
        ].join(' ')}
        onClick={ props.clickEvent }
      >
        <Image
          height={70}
          width={70}
          src={ props.thumbnail }
        />
        <div className='menu-item__content'>
          <div className='menu-item__content--number'>
            { '0' + props.number }
          </div>
          <div className='menu-item__content--title'>
            { props.title }
          </div>
        </div>
      </div>
    </MenuItemStyled>
  );
}

export default MenuItem;

export type { MenuItemType }