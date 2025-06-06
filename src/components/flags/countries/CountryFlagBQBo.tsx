import type { SVGComponent } from '../../../types';

export const CountryFlagBQBo: SVGComponent = ({ title = 'Bonaire', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-blue, #0052b4)" d="M512 0v512H0V0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M0 512V0h512z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="M0 0v276L276 0z"/><path fill="var(--flag-palette-black, #333333)" d="M208 127a71 71 0 0 1 59 59.1l20 10.9-20 11a71 71 0 0 1-59 59l-11 20-11-20a71 71 0 0 1-59-59l-20-11 20-10.9a71 71 0 0 1 59-59l11-20zm-11 10a60 60 0 1 0 0 120 60 60 0 0 0 0-120"/><path fill="var(--flag-palette-bright-red, #d80027)" d="m196.9 163.6 9.7 16.7h19.3l-9.6 16.7 9.6 16.7h-19.3l-9.6 16.7-9.7-16.7h-19.2l9.6-16.7-9.6-16.7h19.2z"/>
  </svg>
);
