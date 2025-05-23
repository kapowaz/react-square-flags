import type { SVGComponent } from '../../../types';

export const CountryFlagNE: SVGComponent = ({ title = 'Niger', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M512 384H0V128h512z"/><path fill="var(--flag-palette-green, #6da544)" d="M512 512H0V368h512z"/><path fill="var(--flag-palette-gold, #ff9811)" d="M512 144H0V0h512zM256 344a88 88 0 1 0 0-176 88 88 0 0 0 0 176"/>
  </svg>
);
