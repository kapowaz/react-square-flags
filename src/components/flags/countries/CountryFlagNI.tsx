import type { SVGComponent } from '../../../types';

export const CountryFlagNI: SVGComponent = ({ title = 'Nicaragua', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M512 384H0V128h512z"/><path fill="var(--flag-palette-light-blue, #338af3)" d="M512 512H0V368h512zm0-368H0V0h512z"/><path fill="var(--flag-palette-dark-yellow, #ffc635)" d="M256 178a78 78 0 1 0 0 156 78 78 0 0 0 0-156m0 122.5a44.5 44.5 0 1 1 0-89 44.5 44.5 0 0 1 0 89"/><path fill="var(--flag-palette-blue, #0052b4)" d="M294.6 267.1 256 256l-38.6 11.1-12.8 22.3h102.8z"/><path fill="var(--flag-palette-light-blue, #338af3)" d="m256 200.4-25.7 44.5L256 256l25.7-11.1z"/><path fill="var(--flag-palette-green, #6da544)" d="M217.4 267.1h77.2L281.7 245h-51.4z"/>
  </svg>
);
