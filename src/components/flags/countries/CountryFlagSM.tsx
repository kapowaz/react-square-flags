import type { SVGComponent } from '../../../types';

export const CountryFlagSM: SVGComponent = ({ title = 'San Marino', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-light-blue, #338af3)" d="M0 204.9h512V512H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M0 0h512v256H0z"/><path fill="var(--flag-palette-green, #6da544)" d="M357.6 176.6 256 278.3 154.4 176.6a122 122 0 0 0-20.8 68.3v33.4c0 53.6 34.6 99.3 82.7 115.8a37 37 0 0 0 4 40l36.4-29.2 36.4 29.2a37 37 0 0 0 3.9-40.5 123 123 0 0 0 81.4-115.3v-33.4c0-25.3-7.6-48.7-20.8-68.3"/><path fill="var(--flag-palette-dark-yellow, #ffc635)" d="M256 367.3c-49.1 0-89-40-89-89v-33.4a89.1 89.1 0 0 1 178 0v33.4c0 49-39.9 89-89 89"/><path fill="var(--flag-palette-light-blue, #338af3)" d="M311.7 278.3v-33.4a55.7 55.7 0 0 0-111.4 0v33.4l55.7 11z"/><path fill="var(--flag-palette-green, #6da544)" d="M200.3 278.3a55.7 55.7 0 0 0 111.4 0z"/><path fill="var(--flag-palette-dark-yellow, #ffc635)" d="M322.8 155.8A33.4 33.4 0 0 0 267 131v-19.6h11.2V89H267V78h-22v11h-11.2v22.3H245V131a33.4 33.4 0 1 0-44.5 49.8v19.6h111.3v-19.6c6.8-6.1 11-15 11-24.9"/>
  </svg>
);
