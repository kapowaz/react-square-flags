import type { SVGComponent } from '../../../types';

export const CountryFlagAD: SVGComponent = ({ title = 'Andorra', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-yellow, #ffda44)" d="M128 512V0h256v512z"/><path fill="var(--flag-palette-blue, #0052b4)" d="M0 512V0h144v512z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M368 512V0h144v512zM256 345v-89h66.8v33.4c0 5.8-11.1 27-38.6 44.5-10.4 6.6-21.2 8.8-28.2 11.1m-66.8-155.8H256V256h-66.8z"/><path fill="var(--flag-palette-gold, #ff9811)" d="M289.4 167a22.3 22.3 0 0 0-33.4-19.3q-5-3-11.1-3c-12.3 0-22.3 10-22.3 22.3H167v111.3c0 41.4 32.9 65.4 58.7 77.8q-3 5-3 11.2a22.3 22.3 0 0 0 33.3 19.3q5 3 11.1 3a22.3 22.3 0 0 0 19.2-33.5c25.8-12.4 58.7-36.4 58.7-77.8V167zm22.3 111.3c0 5.8 0 23.4-27.5 40.9a137 137 0 0 1-28.2 13.3c-7-2.4-17.8-6.7-28.2-13.3-27.5-17.5-27.5-35.1-27.5-41v-77.9h111.4z"/>
  </svg>
);
