import type { SVGComponent } from '../../../types';

export const CountryFlagIC: SVGComponent = ({ title = 'Canary Islands', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-light-blue, #338af3)" d="M376 0v512H136V0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M168 0v512H0V0z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="M512 0v512H344V0z"/>
  </svg>
);
