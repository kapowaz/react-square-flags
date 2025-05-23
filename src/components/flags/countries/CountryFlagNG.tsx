import type { SVGComponent } from '../../../types';

export const CountryFlagNG: SVGComponent = ({ title = 'Nigeria', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M136 512V0h240v512z"/><path fill="var(--flag-palette-dark-green, #496e2d)" d="M344 512V0h168v512zM0 512V0h168v512z"/>
  </svg>
);
