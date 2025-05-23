import type { SVGComponent } from '../../../types';

export const LanguageFlagUdm: SVGComponent = ({ title = 'Udmurt', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M376 0v512H136V0z"/><path fill="var(--flag-palette-black, #333333)" d="M168 0v512H0V0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M512 0v512H344V0zM256 203l-27-27v53h-53l27 27-27 27h53v53l27-27 27 27v-53h53l-27-27 27-27h-53v-53z"/>
  </svg>
);
