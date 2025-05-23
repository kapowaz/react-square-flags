import type { SVGComponent } from '../../../types';

export const CountryFlagSC: SVGComponent = ({ title = 'Seychelles', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-blue, #0052b4)" d="M0 512 202.7 0H0z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="M0 512 373.3 0H170.7z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M341.3 0 0 512l512-309.3V0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="m0 512 512-341.3v202.6z"/><path fill="var(--flag-palette-green, #6da544)" d="m0 512 512-170.7V512z"/>
  </svg>
);
