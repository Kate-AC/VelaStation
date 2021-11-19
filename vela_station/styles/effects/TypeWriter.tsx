import styled from 'styled-components';
import { colors, fontSizes } from 'styles/variables';
import { useState, useEffect } from 'react';
import { typeToSize } from 'components/atoms/Headline';

type TypeWriterStyleType = {
  finished?: boolean;
  duration: number;
  delay?: number;
}

const TypeWriterStyled = styled.div.attrs((props: TypeWriterStyleType & { step: number; cursorSize: string; }) => ({
  cursorSize: props.cursorSize,
  step: props.step,
  finished: props.finished,
  duration: props.duration,
  delay: props.delay,
}))`
  display: inline-block;
 
  .typewriter {
    color: ${colors.white};
    display: flex;

    &__text {
      overflow: hidden;
      white-space: nowrap;
      width: 0;

      &.animation-typewriter {
        animation-name: typewriter;
        animation-timing-function: steps(${props => props.step});
        animation-fill-mode: forwards;
        animation-delay: ${props => props.delay + 's'};
        animation-duration: ${props => props.duration + 's'};
      }
    }

    &:after {
      content: '${props => props.finished ? "" : "_"}';
      animation-name: cursor;
      animation-fill-mode: forwards;
      animation-duration: 0.6s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      padding-left: 3px;
      font-weight: bold;
      font-size: ${props => props.cursorSize};
    }
  }

  @keyframes typewriter {
    0% { width: 0; }
    100% { width: 100%; }
  }

  @keyframes cursor {
    0% { opacity: 0; }
    50% { opacity: 0; }
    51% { opacity: 1; }
    100% { opacity: 1; }
  }
`;

// Todo: I think we are too dependent on Headline. I want to make it more versatile.
const TypeWriter = (props: TypeWriterStyleType & { text?: string, children?: React.ReactElement; }) => {
  const delay = undefined === props.delay ? 0 : props.delay;
  const [finished, setFinished] = useState(props.finished === true || delay > 0 ? true : false);

  let step = 20;
  let cursorSize = fontSizes.litleBig;

  if (props.children !== undefined) {
    cursorSize = typeToSize(props.children.props.type);
    step = Math.floor(Math.sqrt(100 * (props.children.props.title.length / props.duration)));
  }

  if (props.text !== undefined) {
    step = Math.floor(Math.sqrt(100 * (props.text.length / props.duration)));
  }

  useEffect(() => {
    if (delay > 0) {
      setTimeout(() => {
        setFinished(false);
      }, delay * 1000);
    }

    setTimeout(() => {
      setFinished(true);
    }, (props.duration * 1000 + delay * 1000));
  }, []);

  if (props.text === undefined && props.children === undefined) {
    return <></>;
  }

  return (
    <TypeWriterStyled
      step={step}
      finished={finished}
      duration={props.duration}
      delay={delay}
      cursorSize={cursorSize}
    >
      <div className='typewriter'>
        <div className={['typewriter__text', 'animation-typewriter'].join(' ')}>
          { props.children === undefined ? props.text : props.children }
        </div>
      </div>
    </TypeWriterStyled>
  );
}

export default TypeWriter;
