import type { SVGComponent } from '../../../types';

export const CountryFlagYU: SVGComponent = ({ title = 'Yugoslavia', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M512 376H0V136h512z"/><path fill="var(--flag-palette-blue, #0052b4)" d="M512 168H0V0h512z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M512 512H0V344h512z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="m256 66 42.7 131.3h138L325 278.4l42.7 131.3L256 328.6l-111.7 81.1L187 278.4 75.3 197.3h138z"/><path fill="var(--flag-palette-dark-yellow, #ffc635)" fillRule="evenodd" d="M298.7 197.3 256 66l-42.7 131.3h-138L187 278.4l-42.7 131.3L256 328.6l111.7 81.1L325 278.4l111.7-81.1zm76.4 20h-91L256 130.7l-28.1 86.6h-91l73.6 53.5-28.1 86.6 73.6-53.5 73.6 53.5-28-86.6z" clipRule="evenodd"/>
  </svg>
);
