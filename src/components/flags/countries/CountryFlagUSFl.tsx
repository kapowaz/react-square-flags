import type { SVGComponent } from '../../../types';

export const CountryFlagUSFl: SVGComponent = ({ title = 'Florida', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M464 512h48v-48L304 256 512 48V0h-48L256 208 48 0H0v48l208 208L0 464v48h48l208-208z"/><path fill="var(--flag-palette-dark-yellow, #ffc635)" d="M256 352a96 96 0 1 0 0-192 96 96 0 0 0 0 192"/><path fill="var(--flag-palette-green, #6da544)" d="M256 320a64 64 0 1 0 0-128 64 64 0 0 0 0 128"/>
  </svg>
);
