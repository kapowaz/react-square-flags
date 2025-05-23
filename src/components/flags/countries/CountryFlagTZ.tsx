import type { SVGComponent } from '../../../types';

export const CountryFlagTZ: SVGComponent = ({ title = 'Tanzania', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-light-blue, #338af3)" d="M512 0v512H0V0z"/><path fill="var(--flag-palette-green, #6da544)" d="M0 512V0h512z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="M512 112V0H400L0 400v112h112z"/><path fill="var(--flag-palette-black, #333333)" d="M0 448v64h64L512 64V0h-64z"/>
  </svg>
);
