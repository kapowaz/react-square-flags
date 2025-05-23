import type { SVGComponent } from '../../../types';

export const CountryFlagGW: SVGComponent = ({ title = 'Guinea-Bissau', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-green, #6da544)" d="M0 204.9h512V512H0z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="M0 0h512v256H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 0h189.2v512H0z"/><path fill="var(--flag-palette-black, #333333)" d="m94.6 182 16.6 51.2h53.7l-43.4 31.5 16.6 51.1-43.5-31.6-43.4 31.6 16.6-51-43.5-31.6H78z"/>
  </svg>
);
