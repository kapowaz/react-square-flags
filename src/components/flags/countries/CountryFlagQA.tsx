import type { SVGComponent } from '../../../types';

export const CountryFlagQA: SVGComponent = ({ title = 'Qatar', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M0 0h369.8v512H0z"/><path fill="var(--flag-palette-dark-pink, #751a46)" d="M512 512H96l104-28.4L96 455l104-28.4-104-28.5 104-28.4-104-28.5L200 313 96 284.4 200 256 96 227.6 200 199 96 170.7l104-28.5-104-28.4 104-28.5L96 57l104-28.5L96 0h416z"/>
  </svg>
);
