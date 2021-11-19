import { fontSizes } from 'styles/variables';

type SizeType = 'large' | 'medium' | 'small';

const typeToSize = (type: SizeType) => {
  switch (type) {
    case 'large':
      return fontSizes.quadruple;
    case 'medium':
      return fontSizes.triple;
    case 'small':
      return fontSizes.onePointSeven;
  }
} 

export { typeToSize }

export type { SizeType }