import type { SVGComponent } from '../../../types';

export const CountryFlagETSw: SVGComponent = ({ title = 'South West Region', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-green, #6da544)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-blue, #0052b4)" d="M0 0v80l64 176L0 432v80l256-256z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M0 80v80l64 96-64 96v80l176-176z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 160v192l96-96z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="m384 182 16.6 51.2h53.7l-43.4 31.5 16.5 51.1-43.4-31.6-43.4 31.6 16.5-51-43.4-31.6h53.7z"/>
  </svg>
);
