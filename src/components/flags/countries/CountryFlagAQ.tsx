import type { SVGComponent } from '../../../types';

export const CountryFlagAQ: SVGComponent = ({ title = 'Antarctica', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-light-blue, #338af3)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="m135 343-41-70 17-38-40-51-9-37 74 51 45-11 19-67 50-29 75 11 87 45 4 74 28 10v76l-53 94-64 20-59-14 15-25-7-26-8 7z"/>
  </svg>
);
