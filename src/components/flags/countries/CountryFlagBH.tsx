import type { SVGComponent } from '../../../types';

export const CountryFlagBH: SVGComponent = ({ title = 'Bahrain', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M0 512h285V0H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M100.3 512H512V0H100.3l128 51.2-128 51.2 128 51.2-128 51.2 128 51.2-128 51.2 128 51.2-128 51.2 128 51.2z"/>
  </svg>
);
