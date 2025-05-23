import type { SVGComponent } from '../../../types';

export const CountryFlagLS: SVGComponent = ({ title = 'Lesotho', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M512 384H0V128h512z"/><path fill="var(--flag-palette-green, #6da544)" d="M512 512H0V368h512z"/><path fill="var(--flag-palette-blue, #0052b4)" d="M512 144H0V0h512z"/><path fill="var(--flag-palette-black, #333333)" d="M272.7 250.4v-61.2h-33.4v61.2L199 290.8a66.7 66.7 0 0 0 114 0z"/>
  </svg>
);
