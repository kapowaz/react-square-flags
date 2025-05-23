import type { SVGComponent } from '../../../types';

export const CountryFlagLV: SVGComponent = ({ title = 'Latvia', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-dark-red, #a2001d)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M0 204.8h512v102.4H0z"/>
  </svg>
);
