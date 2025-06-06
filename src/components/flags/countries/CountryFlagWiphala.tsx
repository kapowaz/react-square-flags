import type { SVGComponent } from '../../../types';

export const CountryFlagWiphala: SVGComponent = ({ title = 'Wiphala', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M0 73V0h73l439 439v73h-73z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="M73 0v73h73v73h73v73h74v74h73v73h73v73h73v-73l-73-73-73-73v-1l-73-73-74-73-73-73z"/><path fill="var(--flag-palette-gold, #ff9811)" d="M146 0v73h73v73h74v73h73v74h73v73h73v-73l-73-74L293 73 219 0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M219 0v73h74v73h73v73h73v74h73v-74l-73-73-73-73-73-73z"/><path fill="var(--flag-palette-purple, #4a1f63)" d="M293 0v73h73v73h73v73h73v-73l-73-73-73-73z"/><path fill="var(--flag-palette-blue, #0052b4)" d="M366 0v73h73v73h73V73L439 0z"/><path fill="var(--flag-palette-green, #6da544)" d="M439 0v73h73V0zm0 512v-73h-74v-73h-73v-73h-73v-74h-73v-73H73V73H0v73l73 73 73 73v1l73 73 73 73 73 73z"/><path fill="var(--flag-palette-blue, #0052b4)" d="M366 512v-73h-74v-73h-73v-73h-73v-74H73v-73H0v73l73 74 146 146 73 73z"/><path fill="var(--flag-palette-purple, #4a1f63)" d="M292 512v-73h-73v-73h-73v-73H73v-74H0v74l73 73 73 73 73 73z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M219 512v-73h-73v-73H73v-74H0v74l73 73 73 73z"/><path fill="var(--flag-palette-gold, #ff9811)" d="M146 512v-73H73v-73H0v73l73 73z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="M73 512v-73H0v73z"/>
  </svg>
);
