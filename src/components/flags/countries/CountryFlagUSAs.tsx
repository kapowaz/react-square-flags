import type { SVGComponent } from '../../../types';

export const CountryFlagUSAs: SVGComponent = ({ title = 'American Samoa', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-blue, #0052b4)" d="M512 512H0V0h512z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M0 256 512 0v512z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 256 512 0v28.6L57.2 256 512 483.4V512z"/><path fill="var(--flag-palette-dark-red, #a2001d)" d="M445.2 246.5h-30.5c8-9.6 7.5-23.7-1.5-32.7a24 24 0 0 0 0-34.2l-.5.5a25 25 0 0 0 .5-34.8l-137 137a24 24 0 0 0 34 0l2.6-2.5 65.6-6v28.3h22.3v-30.2l33.4-3z"/><path fill="var(--flag-palette-dark-yellow, #ffc635)" d="M278.3 311.7 256 300.5l22.3-11.1H423v22.3z"/>
  </svg>
);
