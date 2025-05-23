import type { SVGComponent } from '../../../types';

export const CountryFlagRUTa: SVGComponent = ({ title = 'Tatarstan', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-dark-green, #496e2d)" d="M0 0h512v224H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 288h512v224H0z"/>
  </svg>
);
