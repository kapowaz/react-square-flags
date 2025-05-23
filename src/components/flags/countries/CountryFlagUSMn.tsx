import type { SVGComponent } from '../../../types';

export const CountryFlagUSMn: SVGComponent = ({ title = 'Minnesota', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-navy, #002266)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-light-blue, #338af3)" d="M368 0h144v512H368L229 256z"/><path fill="var(--flag-palette-white, #eeeeee)" d="m118 176 16.6 40 40-16.6-16.6 40 40 16.6-40 16.6 16.6 40-40-16.6-16.6 40-16.6-40-40 16.6 16.6-40L38 256l40-16.6-16.6-40 40 16.6z"/>
  </svg>
);
