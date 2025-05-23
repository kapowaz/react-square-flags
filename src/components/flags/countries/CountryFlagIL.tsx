import type { SVGComponent } from '../../../types';

export const CountryFlagIL: SVGComponent = ({ title = 'Israel', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-blue, #0052b4)" d="M512 456.3H0v-66.7h512zm0-333.9H0V55.7h512zm-159.6 77.9H288l-32-55.6-32.1 55.6h-64.3l32.1 55.7-32 55.7h64.2l32.1 55.6 32.1-55.6h64.3L320.3 256zm-57 55.7-19.7 34.2h-39.4L216.5 256l19.8-34.2h39.4zM256 187.6l7.3 12.7h-14.6zm-59.2 34.2h14.7l-7.4 12.7zm0 68.4 7.3-12.7 7.4 12.7zm59.2 34.2-7.3-12.7h14.6zm59.2-34.2h-14.7l7.4-12.7zm-14.7-68.4h14.7l-7.3 12.7z"/>
  </svg>
);
