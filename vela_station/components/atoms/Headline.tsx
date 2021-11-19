import styled from 'styled-components';
import { typeToSize, SizeType } from 'utils/functions';

const HeadlineStyled = styled.div.attrs((props: {type: SizeType}) => ({
  type: props.type,
}))`
  font-size: ${props => typeToSize(props.type)};
  color: #fff;
  font-family: HeroTitle;
  font-style: italic;
  text-shadow: 0px 5px 0px rgba(0,0,0,0.6);
`;

const Headline = (props: { title: string; type?: SizeType; }) => (
  <HeadlineStyled type={props.type === undefined ? 'medium' : props.type}>
    { props.title }
  </HeadlineStyled>
);

export default Headline;

export { typeToSize }