import type { SVGComponent } from '../../../types';

export const CountryFlagEastAfricanFederation: SVGComponent = ({ title = 'East African Federation', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-light-blue, #338af3)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M0 152h512v208H0z"/><path fill="var(--flag-palette-black, #333333)" d="M0 176h512v32H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 304h512v32H0z"/><path fill="var(--flag-palette-green, #6da544)" d="M0 208h512v96H0z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="M0 224h512v64H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M256 184a64 64 0 0 1 48.3 106l29.7 11v27H178v-27l29.7-11A64 64 0 0 1 256 184"/><path fill="var(--flag-palette-green, #6da544)" d="M247.2 215.2a34 34 0 0 0-8.2 62.2l-8 13.9a50 50 0 0 1 12-91.6zm21.7-15.5a50 50 0 0 1 12.1 91.6l-8-13.9a34 34 0 0 0-8.2-62.2z"/><circle cx="256" cy="248" r="24" fill="var(--flag-palette-dark-yellow, #ffc635)"/>
  </svg>
);
