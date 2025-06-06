import type { SVGComponent } from '../../../types';

export const CountryFlagESAr: SVGComponent = ({ title = 'Aragon', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-yellow, #ffda44)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 57h512v57H0zm0 114h512v57H0zm0 114h512v56H0zm0 113h512v57H0z"/><path fill="var(--flag-palette-gold, #ff9811)" d="M96 128v160l96 96c53 0 96-43 96-96l-48-48 48-48v-64h-28v32h-27v-32h-27v32h-28v-32h-27v32h-28v-32z"/><path fill="var(--flag-palette-blue, #0052b4)" d="M192 192h96v96h-96z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M192 288v96a96 96 0 0 1-96-96z"/>
  </svg>
);
