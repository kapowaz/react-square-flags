import type { SVGComponent } from '../../../types';

export const CountryFlagETGa: SVGComponent = ({ title = 'Gambela', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-black, #333333)" d="m0 384 256-64 256 64v128H0z"/><path fill="var(--flag-palette-dark-green, #496e2d)" d="m0 256 256-64 256 64v128H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="m0 128 256-64 256 64v128H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 0h512v128H0z"/><path fill="var(--flag-palette-black, #333333)" d="m256 134.1 14.4 44.2h46.5l-37.6 27.4 14.3 44.2-37.6-27.3-37.6 27.3 14.4-44.2-37.7-27.4h46.5z"/>
  </svg>
);
