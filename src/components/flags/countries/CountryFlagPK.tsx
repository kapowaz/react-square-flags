import type { SVGComponent } from '../../../types';

export const CountryFlagPK: SVGComponent = ({ title = 'Pakistan', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-dark-green, #496e2d)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M0 0h128v512H0zm373.8 298.3A72.3 72.3 0 1 1 322 168a89 89 0 1 0 74.6 103.2 72 72 0 0 1-22.8 27.2M372.4 167l18.3 19.6 24.3-11.3-13 23.5 18.2 19.6-26.3-5.2-13.1 23.5-3.2-26.7-26.3-5.1 24.3-11.3z"/>
  </svg>
);
