import type { SVGComponent } from '../../../types';

export const CountryFlagER: SVGComponent = ({ title = 'Eritrea', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-light-blue, #338af3)" d="M0 204.9h512V512H0z"/><path fill="var(--flag-palette-green, #6da544)" d="M0 0h512v256H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 0v512l512-256z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="M133.6 150.3c-49.1 0-89 40-89 89v33.4a89.1 89.1 0 0 0 178 0v-33.4c0-49-40-89-89-89m55.6 122.4c0 24.9-16.4 46-39 53v-36.3l23.7-23.6-23.6-23.6v-19.6h-33.4V256l-23.6 23.6 23.6 23.6v22.6a56 56 0 0 1-39-53.1v-33.4a55.7 55.7 0 0 1 111.3 0z"/>
  </svg>
);
