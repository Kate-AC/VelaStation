import { BsTelegram } from 'react-icons/bs';
import { colors, fontSizes } from 'styles/variables';
import styled from 'styled-components';

const TelegramStyled = styled.div`
  color: ${colors.icon};
  cursor: pointer;
  font-size: ${fontSizes.twoPointFive};
`;

const Telegram = () => (
  <TelegramStyled>
    <span onClick={() => window.open('https://t.me/VelaStation', '_blank')}>
      <BsTelegram />
    </span>
  </TelegramStyled>
);

export default Telegram;