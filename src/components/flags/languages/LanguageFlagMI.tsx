import type { SVGComponent } from '../../../types';

export const LanguageFlagMI: SVGComponent = ({ title = 'Maori', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="m0 68.6 247.8-24.7L512 299v93.9l-399.2 36.2L0 162.5z"/><path fill="var(--flag-palette-black, #333333)" d="M0 0v68.6h178a115.2 115.2 0 1 1 0 230.4h334V0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 162.5V512h512V392.9H178a93.9 93.9 0 1 1 0-187.8 47 47 0 0 1 0 93.9 68.3 68.3 0 0 0 0-136.5z"/>
  </svg>
);
