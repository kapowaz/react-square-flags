import type { SVGComponent } from '../../../types';

export const CountryFlagEwe: SVGComponent = ({ title = 'Ewe', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-bright-red, #d80027)" d="M0 136h512v240H0z"/><path fill="var(--flag-palette-green, #6da544)" d="M0 344h512v168H0zM0 0h512v168H0z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="m85 198.1 14.4 44.2H146l-37.6 27.4 14.4 44.2L85 286.6l-37.7 27.3 14.4-44.2-37.6-27.4h46.5zm171 0 14.4 44.2h46.5l-37.7 27.4 14.4 44.2-37.6-27.3-37.6 27.3 14.4-44.2-37.7-27.4h46.5zm171 0 14.3 44.2h46.5l-37.6 27.4 14.4 44.2-37.7-27.3-37.6 27.3 14.4-44.2-37.6-27.4h46.5z"/>
  </svg>
);
