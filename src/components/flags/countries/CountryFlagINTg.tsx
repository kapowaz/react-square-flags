import type { SVGComponent } from '../../../types';

export const CountryFlagINTg: SVGComponent = ({ title = 'Telangana', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-dark-green, #496e2d)" d="m0 384 256-64 256 64v128H0z"/><path fill="var(--flag-palette-gold, #ff9811)" d="m0 256 256-64 256 64v128H0z"/><path fill="var(--flag-palette-light-blue, #338af3)" d="m0 128 256-64 256 64v128H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M0 0h512v128H0z"/>
  </svg>
);
