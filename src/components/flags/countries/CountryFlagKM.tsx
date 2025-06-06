import type { SVGComponent } from '../../../types';

export const CountryFlagKM: SVGComponent = ({ title = 'Comoros', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-blue, #0052b4)" d="m0 384 256-64 256 64v128H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="m0 256 256-64 256 64v128H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="m0 128 256-64 256 64v128H0z"/><path fill="var(--flag-palette-dark-yellow, #ffc635)" d="M0 0h512v128H0z"/><path fill="var(--flag-palette-green, #6da544)" d="M0 0v512l256-256z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M67.5 255.3a78 78 0 0 1 61.2-76.1q-8-1.8-16.7-1.9a78 78 0 1 0 16.7 154 78 78 0 0 1-61.2-76"/><path fill="var(--flag-palette-white, #eeeeee)" d="m127.9 188.5 4.1 12.7h13.4l-10.8 8 4.1 12.7-10.8-8-10.9 8 4.2-12.8-10.9-7.9h13.4zm0 33.4 4.1 12.7h13.4l-10.8 7.9 4.1 12.8-10.8-8-10.9 8 4.2-12.8-10.9-7.9h13.4zm0 33.4L132 268h13.4l-10.8 7.9 4.1 12.7-10.8-7.8-10.9 7.8 4.2-12.7-10.9-7.9h13.4zm0 33.4 4.1 12.7h13.4l-10.8 7.9 4.1 12.7-10.8-7.8L117 322l4.2-12.7-10.9-7.9h13.4z"/>
  </svg>
);
