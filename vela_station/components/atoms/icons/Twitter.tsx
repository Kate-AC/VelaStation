import { BsTwitter } from 'react-icons/bs';
import { colors, fontSizes } from 'styles/variables';
import styled from 'styled-components';

const TwitterStyled = styled.div`
  color: ${colors.icon};
  cursor: pointer;
  font-size: ${fontSizes.twoPointFive};
`;

const Twitter = () => (
  <TwitterStyled>
    <span onClick={() => window.open('https://twitter.com/StationVelas', '_blank')}>
      <BsTwitter />
    </span>
  </TwitterStyled>
);

export default Twitter;