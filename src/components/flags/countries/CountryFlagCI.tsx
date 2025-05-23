import type { SVGComponent } from '../../../types';

export const CountryFlagCI: SVGComponent = ({ title = 'Ivory Coast', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M376 0v512H136V0z"/><path fill="var(--flag-palette-gold, #ff9811)" d="M168 0v512H0V0z"/><path fill="var(--flag-palette-green, #6da544)" d="M512 0v512H344V0z"/>
  </svg>
);
