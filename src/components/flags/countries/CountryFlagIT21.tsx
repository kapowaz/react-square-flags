import type { SVGComponent } from '../../../types';

export const CountryFlagIT21: SVGComponent = ({ title = 'Piedmont', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-bright-red, #d80027)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M512 288v-64H288V0h-64v224H0v64h224v224h64V288z"/><path fill="var(--flag-palette-blue, #0052b4)" fillRule="evenodd" d="M512 0H0v512h512zm-32 32H32v448h448z" clipRule="evenodd"/><path fill="var(--flag-palette-blue, #0052b4)" d="m432 176-32-64H112l-32 64h64l-20-40h120l-20 40h64l-20-40h120l-20 40z"/>
  </svg>
);
