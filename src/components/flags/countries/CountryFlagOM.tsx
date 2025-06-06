import type { SVGComponent } from '../../../types';

export const CountryFlagOM: SVGComponent = ({ title = 'Oman', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-bright-red, #d80027)" d="M0 136h512v240H0z"/><path fill="var(--flag-palette-green, #6da544)" d="M0 344h512v168H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M0 0h512v168H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 512V0h168v512z"/><path fill="var(--flag-palette-white, #eeeeee)" d="m101 130.9-17-29.6L67 131l-14-8 17.1-29.6H36v-16h34.1l-17-29.5 13.8-8L84 69.3l17-29.5 14 8-17.1 29.5H132v16H97.9l17 29.6z"/>
  </svg>
);
