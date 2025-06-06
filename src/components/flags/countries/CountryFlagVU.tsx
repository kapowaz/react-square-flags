import type { SVGComponent } from '../../../types';

export const CountryFlagVU: SVGComponent = ({ title = 'Vanuatu', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-green, #6da544)" d="M0 204.9h512V512H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 0h512v256H0z"/><path fill="var(--flag-palette-black, #333333)" d="M512 289.4v-66.8H222.6L0 0v512l222.6-222.6z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="M512 267v-22.2H213.2L0 31.6V63l192.8 193L0 448.7v31.4L213.2 267z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="M54.6 310.6V289a39 39 0 0 0 38.8-38.8A27.5 27.5 0 0 0 65.9 223a18.7 18.7 0 0 0-18.7 18.7 12 12 0 0 0 12 12c3.7 0 6.8-3.1 6.8-6.8h21.4A28 28 0 0 1 59.2 275c-18.4 0-33.4-15-33.4-33.4 0-22.2 18-40.2 40.1-40.2a49 49 0 0 1 49 49c0 33.1-27 60.2-60.3 60.2"/>
  </svg>
);
