import styled from 'styled-components';
import { colors, fontSizes } from 'styles/variables';
import { SizeType } from 'utils/functions';

const DefaultButtonStyled = styled.div.attrs((props: { size: string }) => ({
  size: props.size
}))`
  .default-button {
    cursor: pointer;
    border-radius: 5px;
    border: none;
    padding: 12px 45px;
    background: linear-gradient(to bottom, #ddd 0%, #bbb 100%);
    font-weight: 600;
    font-size: ${props => props.size};
    transition: all;
    transition-duration: 0.5s;
    white-space: nowrap;

    &:hover {
      color: ${colors.white};
      background: linear-gradient(to bottom, #ffa600 0%, #db5f00 100%);
    }
  }
`;

const iconSize = (type: SizeType) => {
  switch (type) {
    case 'small':
      return fontSizes.small;
    case 'medium':
      return fontSizes.default;
    case 'large':
      return fontSizes.litleBig;
  }
}

const DefaultButton = (props: { text: string; type?: SizeType; clickEvent?: () => void }) => {
  const type = props.type === undefined ? 'medium' : props.type;

  return (
    <DefaultButtonStyled size={iconSize(type)}>
      <button
        className='default-button'
        onClick={props.clickEvent === undefined ? () => {} : props.clickEvent}
      >
        { props.text }
      </button>
    </DefaultButtonStyled>
  );
}

export default DefaultButton;