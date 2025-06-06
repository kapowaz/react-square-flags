import type { SVGComponent } from '../../../types';

export const LanguageFlagBA: SVGComponent = ({ title = 'Bashkir', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M0 136h512v240H0z"/><path fill="var(--flag-palette-dark-green, #496e2d)" d="M0 344h512v168H0z"/><path fill="var(--flag-palette-light-blue, #338af3)" d="M0 0h512v168H0z"/><path fill="var(--flag-palette-dark-yellow, #ffc635)" d="M260 267.3a12 12 0 0 0 7.3-7.3h21.8a8 8 0 1 0 0-8h-18.2l15.7-9a8 8 0 1 0-4-7l-15.7 9 9.1-15.6a8 8 0 1 0-7-4l-9 15.7v-18.2a8 8 0 1 0-8 0v18.2l-9-15.7a8 8 0 1 0-7 4l9 15.7-15.6-9.1a8 8 0 1 0-4 7l15.7 9h-18.2a8 8 0 1 0 0 8h21.8a12 12 0 0 0 7.3 7.3V296h8z"/><path fill="var(--flag-palette-dark-yellow, #ffc635)" fillRule="evenodd" d="M324 256a68 68 0 1 1-136 0 68 68 0 0 1 136 0m-8 0a60 60 0 1 1-120 0 60 60 0 0 1 120 0" clipRule="evenodd"/>
  </svg>
);
