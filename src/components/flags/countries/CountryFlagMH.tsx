import type { SVGComponent } from '../../../types';

export const CountryFlagMH: SVGComponent = ({ title = 'Marshall Islands', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-blue, #0052b4)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-gold, #ff9811)" d="M512 160 0 512v-8L512 0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M512 256 0 512v-4l512-380zM160 40l10.4 81.4L200 90.7l-11.7 41 41-11.7-30.7 29.6L280 160l-81.4 10.4 30.7 29.6-41-11.7 11.7 41-29.6-30.7L160 280l-10.4-81.4-29.6 30.7 11.7-41-41 11.7 30.7-29.6L40 160l81.4-10.4L90.7 120l41 11.7-11.7-41 29.6 30.7z"/>
  </svg>
);
