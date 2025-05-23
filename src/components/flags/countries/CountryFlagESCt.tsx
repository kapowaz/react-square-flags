import type { SVGComponent } from '../../../types';

export const CountryFlagESCt: SVGComponent = ({ title = 'Catalonia', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-yellow, #ffda44)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 57h512v57H0zm0 114h512v57H0zm0 114h512v56H0zm0 113h512v57H0z"/>
  </svg>
);
