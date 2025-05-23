import type { SVGComponent } from '../../../types';

export const CountryFlagRULpr: SVGComponent = ({ title = 'Luhansk People&#x27;s Republic', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-blue, #0052b4)" d="M0 136h512v240H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 344h512v168H0z"/><path fill="var(--flag-palette-light-blue, #338af3)" d="M0 0h512v168H0z"/>
  </svg>
);
