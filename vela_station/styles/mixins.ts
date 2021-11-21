import { css } from 'styled-components';
import { CSSProp } from 'styled-components';
import { breakPoints } from 'styles/variables';

type DeviceType = 'desktop' | 'tablet' | 'phone';

const mediaDown = (device: DeviceType, content: CSSProp): CSSProp => {
  if (device == 'desktop') {
    return css`
      @media only screen and (max-width: ${breakPoints.desktop}) {
        ${content}
      }
    `;
  }

  if (device == 'tablet') {
    return css`
      @media only screen and (max-width: ${breakPoints.tablet}) {
        ${content}
      }
    `;
  }

  if (device == 'phone') {
    return css`
      @media only screen and (max-width: ${breakPoints.phone}) {
        ${content}
      }
    `;
  }

  return css``;
};

const random = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
}

const rgbScramble = (name: string) => {
  const animationDuration: number = 1; 
  const glitchFrequency: number = 30;
  const glitchInterval: number = random(0, 10);

  const animationName: string = 'rgbScramble' + name;
  const transformList: string[] = [];

  for (let i: number = 0; i < glitchFrequency; i++) {
    const percent: number = i * glitchInterval;
    transformList.push(`
      ${percent + '%'} {
        transform: translate(${random(-0.5, 0.5) + '%'}, ${random(-1, 1) + '%'});
      }
    `);
  }

  return css`
    @keyframes ${animationName} {
      ${transformList.map((item: string) => item)}
    }

    animation: ${animationName} ${animationDuration + 's'} steps(1, jump-end) infinite alternate both;
  `;    
}

const glitch = (name: string) => {
  const animationDuration: number = 0.6;
  const glitchFrequency: number = 18;
  const glitchInterval: number = random(0, 10);

  const animationName: string = 'glitch' + name;
  const list: string[] = [];

  for (let i = 0; i < glitchFrequency; i++) {
    var left: number = 0;
    var right: number = 100;
    var top: number = random(0, 90);
    var bottom: number = top + random(1, 10);

    const percent: number = i * glitchInterval;

    list.push(`
      ${percent + '%'} {
        clip-path: polygon(
          ${left + '%'} ${top + '%'},
          ${right + '%'} ${top + '%'},
          ${right + '%'} ${bottom + '%'},
          ${left + '%'} ${bottom + '%'}
        );
        transform: translate(
          ${random(-8, 8) + '%'},
          ${random(-0.5, 0.5) + '%'}
        );
      }
    `);
  }

  return css`
    @keyframes ${animationName} {
      ${list.map((item: string) => item)}
    }
    animation: ${animationName} ${animationDuration + 's'} linear infinite alternate both;
  `; 
} 

export { mediaDown, random, rgbScramble, glitch };