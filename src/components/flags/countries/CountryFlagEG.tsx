import type { SVGComponent } from '../../../types';

export const CountryFlagEG: SVGComponent = ({ title = 'Egypt', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M0 136h512v240H0z"/><path fill="var(--flag-palette-black, #333333)" d="M0 344h512v168H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 0h512v168H0z"/><path fill="var(--flag-palette-brown, #85693d)" d="M244 200.3a28 28 0 0 1 28.5 23.9l44.6-6.2a5 5 0 0 1 5.7 5v79.5a22.4 22.4 0 0 1-22.3-22v.7c-6.5 0-12.3-2.7-16.4-7l-3.3 4.4 19.7 33h-89l19.7-33-3.3-4.4c-4 4.3-10 7-16.4 7v-.7c0 11.7-10 22-22.3 22V223a5 5 0 0 1 5.7-5l45.8 6.3v-.3c0-8.7-6.8-15.8-15.5-16.8 5-4.3 11.6-6.9 18.9-6.9"/>
  </svg>
);
