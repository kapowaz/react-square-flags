import type { SVGComponent } from '../../../types';

export const CountryFlagMF: SVGComponent = ({ title = 'Saint-Martin', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-blue, #0052b4)" d="m0 128 192 192v192H0zm512 0L320 320v192h192z"/><path fill="var(--flag-palette-dark-yellow, #ffc635)" d="M192 192h128a64 64 0 0 0-128 0"/><path fill="var(--flag-palette-bright-red, #d80027)" d="m256 320-96-96h192z"/>
  </svg>
);
