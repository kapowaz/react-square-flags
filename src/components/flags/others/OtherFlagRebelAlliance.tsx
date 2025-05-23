import type { SVGComponent } from '../../../types';

export const OtherFlagRebelAlliance: SVGComponent = ({ title = 'Rebel Alliance', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-dark-red, #a2001d)" d="M64 251.3c2.5-62.6 34.2-120.4 92.2-158.5.2 0 1.7-.5 1 .8-4.6 4.2-87.2 101.8-11.2 178.9 0 0 40 38.4 71 2 0 0 30.5-39.6-.4-99.6 0 0-7.9-19.6-36.1-31.8l22.7-25s19.3 8.2 34.1 30.5c0 0 .8-23.5-17.2-48.6l35.2-40 35 39.6S274.1 122.4 273 149c0 0 11-18 34.5-31l22.3 25.1s-21.4 7-35.8 31.5c-12.4 22.6-22 71 .5 100.7 0 0 25.2 35.6 69.3-2.1 0 0 81.3-72.8-8.3-178 0 0-4.9-4.4.6-2 39.6 28.8 87 66.8 91.9 161.6-2 115-79 197.2-191.5 197.2-110 0-195.7-92-192.4-200.7"/>
  </svg>
);
