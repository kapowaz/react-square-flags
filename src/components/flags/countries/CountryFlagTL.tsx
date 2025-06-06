import type { SVGComponent } from '../../../types';

export const CountryFlagTL: SVGComponent = ({ title = 'Timor-Leste', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-bright-red, #d80027)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="m0 512 367.3-256L0 0z"/><path fill="var(--flag-palette-black, #333333)" d="M0 0v512l256-256z"/><path fill="var(--flag-palette-white, #eeeeee)" d="m67.6 188.5 35.9 39.9 49-21.8-26.8 46.5 35.9 40-52.6-11.3-26.9 46.5-5.5-53.4L24 263.7l49.1-21.8z"/>
  </svg>
);
