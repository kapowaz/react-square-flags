import type { SVGComponent } from '../../../types';

export const CountryFlagETSn: SVGComponent = ({ title = 'Southern Nations, Nationalities, and Peoples&#x27; Region', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M0 136h512v240H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 344h512v168H0z"/><path fill="var(--flag-palette-blue, #0052b4)" d="M0 0h512v168H0z"/><path fill="var(--flag-palette-brown, #85693d)" d="m256 188-72 88v48h144v-48z"/>
  </svg>
);
