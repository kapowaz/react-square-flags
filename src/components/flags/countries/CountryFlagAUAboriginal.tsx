import type { SVGComponent } from '../../../types';

export const CountryFlagAUAboriginal: SVGComponent = ({ title = 'Australian Aboriginal', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-bright-red, #d80027)" d="M0 204.9h512V512H0z"/><path fill="var(--flag-palette-black, #333333)" d="M0 0h512v256H0z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="M256 384a128 128 0 1 0 0-256 128 128 0 0 0 0 256"/>
  </svg>
);
