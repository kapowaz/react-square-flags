import type { SVGComponent } from '../../../types';

export const CountryFlagBB: SVGComponent = ({ title = 'Barbados', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-yellow, #ffda44)" d="M128 512V0h256v512z"/><path fill="var(--flag-palette-blue, #0052b4)" d="M0 512V0h144v512zm368 0V0h144v512z"/><path fill="var(--flag-palette-black, #333333)" d="m334 155.8-15-7.4c-1 1.8-20.4 41.4-23.6 102h-22.7v-94.6L256 133.6l-16.7 22.2v94.6h-22.7a278 278 0 0 0-23.6-102l-29.8 14.9c.2.4 20.5 41.7 20.5 103.8v16.7h55.6v94.6h33.4v-94.6h55.6v-16.7c0-32 5.6-58.6 10.3-75.1 5-18 10.2-28.6 10.3-28.7z"/>
  </svg>
);
