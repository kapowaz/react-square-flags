import type { SVGComponent } from '../../../types';

export const CountryFlagID: SVGComponent = ({ title = 'Indonesia', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-dark-red, #a2001d)" d="M512 307.2H0V0h512z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M512 512H0V256h512z"/>
  </svg>
);
