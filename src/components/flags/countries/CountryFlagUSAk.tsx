import type { SVGComponent } from '../../../types';

export const CountryFlagUSAk: SVGComponent = ({ title = 'Alaska', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-navy, #002266)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-dark-yellow, #ffc635)" d="m336.8 199.7 104-75.1h-128l104 75.1-40-122.1zM57 231.7l52-37.4H45l52 37.4-20-60.9zm85.5 31.7 52-37.4h-64l52 37.4-20-60.9zM185 309l52-37.4h-64l52 37.4-20-60.9zm43 47.6 52-37.4h-64l52 37.4-20-60.9zm-5.6 67.1 52-37.4h-64l52 37.4-20-60.9zM356 402.2l52-37.4h-64l52 37.4-20-60.9zm-37.4 53.2 52-37.4h-64l52 37.4-20-60.9z"/>
  </svg>
);
