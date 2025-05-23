import type { SVGComponent } from '../../../types';

export const CountryFlagAR: SVGComponent = ({ title = 'Argentina', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M512 384H0V128h512z"/><path fill="var(--flag-palette-light-blue, #338af3)" d="M512 512H0V368h512zm0-368H0V0h512z"/><path fill="var(--flag-palette-dark-yellow, #ffc635)" d="m332.5 256-31.2 14.7 16.6 30.3-34-6.5-4.3 34.3-23.6-25.2-23.6 25.2-4.3-34.3-34 6.5 16.6-30.3-31.2-14.7 31.3-14.7L194 211l34 6.5 4.3-34.3 23.6 25.2 23.6-25.2 4.3 34.3 34-6.5-16.6 30.3z"/>
  </svg>
);
