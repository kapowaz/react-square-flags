import type { SVGComponent } from '../../../types';

export const LanguageFlagTO: SVGComponent = ({ title = 'Tonga', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-bright-red, #d80027)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M0 0h256v256H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M144 112V80h-32v32H80v32h32v32h32v-32h32v-32z"/>
  </svg>
);
