import type { SVGComponent } from '../../../types';

export const CountryFlagEC: SVGComponent = ({ title = 'Ecuador', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-blue, #0052b4)" d="M0 145.3h512v290.8H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 384h512v128H0z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="M0 0h512v256H0z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="M256 345a89 89 0 1 0 0-178 89 89 0 0 0 0 178"/><path fill="var(--flag-palette-light-blue, #338af3)" d="M256 311.7c-30.7 0-55.7-25-55.7-55.7v-33.4a55.7 55.7 0 0 1 111.4 0V256c0 30.7-25 55.7-55.7 55.7"/><path fill="var(--flag-palette-dark-brown, #584528)" d="M345 122.4h-66.7a22.3 22.3 0 0 0-44.6 0H167a23 23 0 0 0 23 22.3h-.8c0 12.3 10 22.3 22.3 22.3 0 12.3 10 22.2 22.2 22.2h44.6c12.3 0 22.2-10 22.2-22.2 12.3 0 22.3-10 22.3-22.3h-.8a23 23 0 0 0 23-22.3"/>
  </svg>
);
