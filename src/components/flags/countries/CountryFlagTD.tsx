import type { SVGComponent } from '../../../types';

export const CountryFlagTD: SVGComponent = ({ title = 'Chad', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-yellow, #ffda44)" d="M376 0v512H136V0z"/><path fill="var(--flag-palette-navy, #002266)" d="M168 0v512H0V0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M512 0v512H344V0z"/>
  </svg>
);
