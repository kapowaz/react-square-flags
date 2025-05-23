import type { SVGComponent } from '../../../types';

export const CountryFlagCAQc: SVGComponent = ({ title = 'Quebec', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-blue, #0052b4)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M512 288v-64H288V0h-64v224H0v64h224v224h64V288z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M128 384h32v32h-32v32H96v-32H64v-32h32v-32h32zm288 0h32v32h-32v32h-32v-32h-32v-32h32v-32h32zM128 64v32h32v32h-32v32H96v-32H64V96h32V64zm288 32h32v32h-32v32h-32v-32h-32V96h32V64h32z"/>
  </svg>
);
