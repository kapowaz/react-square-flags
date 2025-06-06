import type { SVGComponent } from '../../../types';

export const CountryFlagJM: SVGComponent = ({ title = 'Jamaica', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-black, #333333)" d="M0 0v512l256-256z"/><path fill="var(--flag-palette-green, #6da544)" d="M512 0H0l256 256z"/><path fill="var(--flag-palette-black, #333333)" d="M512 512V0L256 256z"/><path fill="var(--flag-palette-green, #6da544)" d="M0 512h512L256 256z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="M464 512h48v-48L304 256 512 48V0h-48L256 208 48 0H0v48l208 208L0 464v48h48l208-208z"/>
  </svg>
);
