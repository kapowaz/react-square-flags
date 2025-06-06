import type { SVGComponent } from '../../../types';

export const CountryFlagUSGu: SVGComponent = ({ title = 'Guam', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-blue, #0052b4)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M512 512H0v-44.5h512zm0-467.5H0V0h512zM241.5 417.6c-3.5-3-85.7-74.5-85.7-161.6S238 97.4 241.5 94.4L256 82l14.5 12.4c3.5 3 85.7 74.4 85.7 161.6S274 414.6 270.5 417.6L256 430z"/><path fill="var(--flag-palette-light-blue, #338af3)" d="M334 256c0-78-78-144.7-78-144.7s-78 66.8-78 144.7a150 150 0 0 0 17.5 66.8h121a150 150 0 0 0 17.4-66.8"/><path fill="var(--flag-palette-blue, #0052b4)" d="M334 256a150 150 0 0 1-17.5 66.8L256 333.9l-60.5-11.1a150 150 0 0 1-17.4-66.8z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="M256 400.7s37.5-32.2 60.5-78h-121c23 45.8 60.5 78 60.5 78"/><path fill="var(--flag-palette-green, #6da544)" d="M206 211.5h100l-50 50z"/><path fill="var(--flag-palette-dark-red, #a2001d)" d="M239.3 244.9h33.4V345h-33.4z"/>
  </svg>
);
