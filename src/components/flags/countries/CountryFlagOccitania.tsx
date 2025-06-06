import type { SVGComponent } from '../../../types';

export const CountryFlagOccitania: SVGComponent = ({ title = 'Occitania', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-bright-red, #d80027)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="M256 32a32 32 0 0 1 30 43.1l39 19.7a32 32 0 1 1 23.6 49L339 173l29.2-9.6-.2-3.4a32 32 0 1 1 49.2 27l19.7 39a32 32 0 1 1 0 60l-19.7 39a32 32 0 1 1-49 23.6L339 339l9.6 29.2 3.4-.2a32 32 0 1 1-27 49.2l-39 19.7a32 32 0 1 1-60 0l-39-19.7a32 32 0 1 1-23.6-49L173 339l-29.2 9.6.2 3.4a32 32 0 1 1-49.2-27l-19.7-39a32 32 0 1 1 0-60l19.7-39a32 32 0 1 1 49-23.6L173 173l-9.6-29.2-3.4.2a32 32 0 1 1 27-49.2l39-19.7A32 32 0 0 1 256 32m-64 96 32 96-96-32-32 64 32 64 96-32-32 96 64 32 64-32-32-96 96 32 32-64-32-64-96 32 32-96-64-32z"/>
  </svg>
);
