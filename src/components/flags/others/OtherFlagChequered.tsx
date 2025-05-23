import type { SVGComponent } from '../../../types';

export const OtherFlagChequered: SVGComponent = ({ title = 'Chequered', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-black, #333333)" d="M384 0h128v128H0v128h512v128H0v128h128V0h128v512h128z"/>
  </svg>
);
