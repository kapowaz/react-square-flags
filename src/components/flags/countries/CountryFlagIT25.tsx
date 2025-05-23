import type { SVGComponent } from '../../../types';

export const CountryFlagIT25: SVGComponent = ({ title = 'Lombardy', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-green, #6da544)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M253.9 161.3a62.7 62.7 0 1 1 71.5 30.3 33.7 33.7 0 1 0 25.3 62.3 62.7 62.7 0 1 1-30.3 71.5 33.7 33.7 0 1 0-62.3 25.3 62.7 62.7 0 1 1-71.5-30.3 33.7 33.7 0 1 0-25.3-62.3 62.7 62.7 0 1 1 30.3-71.5 33.7 33.7 0 1 0 62.3-25.3"/>
  </svg>
);
