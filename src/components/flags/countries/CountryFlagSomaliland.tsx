import type { SVGComponent } from '../../../types';

export const CountryFlagSomaliland: SVGComponent = ({ title = 'Somaliland', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M0 136h512v240H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 344h512v168H0z"/><path fill="var(--flag-palette-dark-green, #496e2d)" d="M0 0h512v168H0z"/><path fill="var(--flag-palette-black, #333333)" d="m256 200.3 13.8 42.6h44.7L278.4 269l13.8 42.6-36.2-26.3-36.2 26.3 13.8-42.6-36.1-26.2h44.7z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M194.7 102a37 37 0 0 1-37 37v-22.1c8.2 0 14.8-6.7 14.8-14.9V50h22.2zm44.6 37h-33.4l.1-22.1h33.3zm-11.1-59.3a3.7 3.7 0 0 0 7.4 0V50h22.3v29.8a3.7 3.7 0 0 0 7.4 0V50h22.2v52a37 37 0 0 1-37.1 37v-22.2a15 15 0 0 0 14.4-11.4q-1.6.3-3.2.2-8.1 0-14.9-4.6a25.8 25.8 0 0 1-38.8-11.4 26 26 0 0 1-2-9.9V50h22.3zM354.3 102a37 37 0 0 1-37.1 37v-22.1c8.2 0 14.8-6.7 14.8-14.9V50h22.3zm-33.4 0h-22.2V50h22.2z"/>
  </svg>
);
