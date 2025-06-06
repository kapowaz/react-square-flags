import type { SVGComponent } from '../../../types';

export const CountryFlagJO: SVGComponent = ({ title = 'Jordan', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M0 136h512v240H0z"/><path fill="var(--flag-palette-green, #6da544)" d="M0 344h512v168H0z"/><path fill="var(--flag-palette-black, #333333)" d="M0 0h512v168H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 0v512l256-256z"/><path fill="var(--flag-palette-white, #eeeeee)" d="m101.6 200.3 14 29.4 31.8-7.3-14.2 29.3 25.5 20.2-31.8 7.2.1 32.6-25.4-20.4-25.4 20.4V279l-31.7-7.2L70 251.7l-14.2-29.3 31.8 7.3z"/>
  </svg>
);
