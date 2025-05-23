import type { SVGComponent } from '../../../types';

export const CountryFlagTN: SVGComponent = ({ title = 'Tunisia', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-bright-red, #d80027)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M256 133.6a122.4 122.4 0 1 1 0 244.8 122.4 122.4 0 0 1 0-244.8m0 33.4a89 89 0 1 0 62.2 152.6 72.3 72.3 0 1 1 0-127.3A89 89 0 0 0 256 167m15 78-34 11 34 11v35.8l21-29 34 11.2-21-29 21.1-28.9-34 11-21-29z"/>
  </svg>
);
