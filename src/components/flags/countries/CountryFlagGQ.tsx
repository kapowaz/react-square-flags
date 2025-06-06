import type { SVGComponent } from '../../../types';

export const CountryFlagGQ: SVGComponent = ({ title = 'Equatorial Guinea', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M0 136h512v240H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 344h512v168H0z"/><path fill="var(--flag-palette-green, #6da544)" d="M0 0h512v168H0z"/><path fill="var(--flag-palette-blue, #0052b4)" d="M0 0v512l256-256z"/><path fill="var(--flag-palette-mid-grey-2, #bdbcc1)" d="M300.5 211.5V267c0 34.1 44.5 44.6 44.5 44.6s44.6-10.5 44.6-44.6v-55.6z"/><path fill="var(--flag-palette-brown, #85693d)" d="M334 257.1h22.2v32.3h-22.3z"/><path fill="var(--flag-palette-green, #6da544)" d="M367.3 244.9a22.3 22.3 0 1 0-44.5 0 11.1 11.1 0 1 0 0 22.2h44.5a11.1 11.1 0 1 0 0-22.2"/>
  </svg>
);
