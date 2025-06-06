import type { SVGComponent } from '../../../types';

export const CountryFlagZM: SVGComponent = ({ title = 'Zambia', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-dark-green, #496e2d)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-gold, #ff9811)" d="M382.2 256H512v256H382.2z"/><path fill="var(--flag-palette-black, #333333)" d="M303.9 256h122.8v256H303.9z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M256 256h85.3v256H256z"/><path fill="var(--flag-palette-gold, #ff9811)" d="M473 167h-66.7a22.3 22.3 0 0 0-44.6 0H295a23 23 0 0 0 23 22.2h-.8c0 12.3 10 22.3 22.3 22.3 0 12.3 10 22.2 22.2 22.2h44.6c12.3 0 22.2-10 22.2-22.2 12.3 0 22.3-10 22.3-22.3h-.8a23 23 0 0 0 23-22.2"/>
  </svg>
);
