import type { SVGComponent } from '../../../types';

export const CountryFlagSA: SVGComponent = ({ title = 'Saudi Arabia', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-dark-green, #496e2d)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M144.7 306c0 18.5 15 33.5 33.4 33.5h100.2a28 28 0 0 0 27.8 27.8h33.4a28 28 0 0 0 27.8-27.8V306zM370 144.7v78c0 12.2-9.9 22.2-22.2 22.2v33.4c30.7 0 55.7-25 55.7-55.7v-77.9zm-239.2 77.9c0 12.3-10 22.3-22.3 22.3v33.4c30.7 0 55.7-25 55.7-55.7v-77.9h-33.4z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M320 144.7h33.4v78H320zm-50 44.5a5.6 5.6 0 0 1-11.2 0v-44.5h-33.4v44.5a5.6 5.6 0 0 1-11.1 0v-44.5h-33.4v44.5a39 39 0 0 0 61.2 32 39 39 0 0 0 27.2 6.7 22 22 0 0 1-21.6 17v33.4c30.6 0 55.6-25 55.6-55.7v-77.9H270z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M180.9 244.9h50v33.4h-50z"/>
  </svg>
);
