import type { SVGComponent } from '../../../types';

export const CountryFlagINGj: SVGComponent = ({ title = 'Gujarat', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="m0 384 256-64 256 64v128H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="m0 256 256-64 256 64v128H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="m0 128 256-64 256 64v128H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 0h512v128H0z"/>
  </svg>
);
