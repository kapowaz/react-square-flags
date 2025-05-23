import type { Property as CSSProperty } from 'csstype';
import type { SVGComponent, SquareFlagSize } from '../../types';

export interface ISquareFlagProps
  extends React.ComponentPropsWithoutRef<'svg'> {
  /**
   * Flag SVGComponent to render
   */
  flag: SVGComponent;

  /**
   * Named size, or a CSS unit size
   */
  size?: SquareFlagSize | CSSProperty.Height;
}

export const SQUAREFLAGSIZE_DIMENSIONS: Record<SquareFlagSize, number> = {
  tiny: 12,
  small: 18,
  medium: 24,
  large: 36,
  xlarge: 48,
};

const isSquareFlagSize = (size: string): size is SquareFlagSize => {
  return Object.keys(SQUAREFLAGSIZE_DIMENSIONS).includes(size);
};

/**
 * Render a square flag using a provided SVG flag asset
 */
export const SquareFlag = ({
  size = 'medium',
  flag: Component,
  ...otherProps
}: ISquareFlagProps) => {
  const dimensions =
    typeof size === 'string' && isSquareFlagSize(size)
      ? SQUAREFLAGSIZE_DIMENSIONS[size]
      : `${size}`;

  const props = {
    width: dimensions,
    height: dimensions,
    ...otherProps,
  };

  return <Component {...props} />;
};
