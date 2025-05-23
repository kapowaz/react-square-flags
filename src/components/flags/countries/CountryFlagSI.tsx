import type { SVGComponent } from '../../../types';

export const CountryFlagSI: SVGComponent = ({ title = 'Slovenia', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-blue, #0052b4)" d="M0 136h512v240H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 344h512v168H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M0 0h512v168H0z"/><path fill="var(--flag-palette-blue, #0052b4)" d="M222.6 202.7V100.2H89v102.5z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M89 167v22.2c0 51.1 66.8 66.8 66.8 66.8s66.8-15.7 66.8-66.8V167l-22.3 22.2-44.5-33.4-44.5 33.4z"/>
  </svg>
);
