import type { SVGComponent } from '../../../types';

export const CountryFlagBE: SVGComponent = ({ title = 'Belgium', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-yellow, #ffda44)" d="M136 512V0h240v512z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M344 512V0h168v512z"/><path fill="var(--flag-palette-black, #333333)" d="M0 512V0h168v512z"/>
  </svg>
);
