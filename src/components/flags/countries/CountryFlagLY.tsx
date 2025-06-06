import type { SVGComponent } from '../../../types';

export const CountryFlagLY: SVGComponent = ({ title = 'Libya', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="m315.6 209.2 21 29 34-11.1-21 29 21 28.9-34-11.1-21 29V267l-34-11.1 34-11z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M258.3 328.3a72.3 72.3 0 1 1 34.4-136 89 89 0 1 0 0 127.3 72 72 0 0 1-34.4 8.7"/><path fill="var(--flag-palette-black, #333333)" d="M512 384H0V128h512z"/><path fill="var(--flag-palette-dark-green, #496e2d)" d="M512 512H0V368h512z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M512 144H0V0h512z"/><path fill="var(--flag-palette-white, #eeeeee)" d="m315.6 209.2 21 29 34-11.1-21 29 21 28.9-34-11.1-21 29V267l-34-11.1 34-11z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M258.3 328.3a72.3 72.3 0 1 1 34.4-136 89 89 0 1 0 0 127.3 72 72 0 0 1-34.4 8.7"/>
  </svg>
);
