import type { SVGComponent } from '../../../types';

export const CountryFlagSami: SVGComponent = ({ title = 'Sami', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-yellow, #ffda44)" d="M199 0h32l32 256-32 256h-32l-32-256z"/><path fill="var(--flag-palette-dark-green, #496e2d)" d="M167 0h32v512h-32l-32-256z"/><path fill="var(--flag-palette-blue, #0052b4)" d="M231 0h281v512H231z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 0h167v512H0zm199 132-11 16 11 16a92 92 0 0 1 0 184l-11 16 11 16a124 124 0 1 0 0-248"/><path fill="var(--flag-palette-blue, #0052b4)" d="M199 132a124 124 0 1 0 0 248v-32a92 92 0 0 1 0-184z"/>
  </svg>
);
