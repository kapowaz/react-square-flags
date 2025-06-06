import type { SVGComponent } from '../../../types';

export const CountryFlagDZ: SVGComponent = ({ title = 'Algeria', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-dark-green, #496e2d)" d="M307.1 0v512H.1V0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M512 0v512H256V0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="m311 206.9-21 29-34-11 21 28.8-21 29 34-11.1 21 29v-35.8l34-11.1-34-11z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M277.2 328.3a72.3 72.3 0 1 1 34.5-136 89 89 0 1 0 0 127.3 72 72 0 0 1-34.5 8.7"/>
  </svg>
);
