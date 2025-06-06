import type { SVGComponent } from '../../../types';

export const CountryFlagLB: SVGComponent = ({ title = 'Lebanon', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M512 384H0V128h512z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M512 512H0V368h512zm0-368H0V0h512z"/><path fill="var(--flag-palette-green, #6da544)" d="M322.8 300.5 256 178.1l-66.8 122.4h50.1V334h33.4v-33.4z"/>
  </svg>
);
