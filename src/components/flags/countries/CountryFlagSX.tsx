import type { SVGComponent } from '../../../types';

export const CountryFlagSX: SVGComponent = ({ title = 'Sint Maarten', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-blue, #0052b4)" d="M0 204.9h512V512H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 0h512v256H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M0 0v512l256-256z"/><path fill="var(--flag-palette-dark-yellow, #ffc635)" d="m28 256-.2 5.6a72.3 72.3 0 1 0 144.5-5.6zm72.2-33.4a22.3 22.3 0 1 0 0-44.5 22.3 22.3 0 0 0 0 44.5"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M50 194.8V267c0 38.4 50.2 50.1 50.2 50.1s50-11.7 50-50v-72.4z"/><path fill="var(--flag-palette-light-blue, #338af3)" d="M100.2 294c-9.3-3.4-27.9-12-27.9-26.9v-50H128v50c0 15-18.6 23.5-27.8 26.8"/><path fill="var(--flag-palette-light-grey, #f3f3f3)" d="M111.3 244.9v-11.2l-11.1-5.5-11.2 5.5V245l-5.5 5.5v22.3h33.4v-22.3z"/>
  </svg>
);
