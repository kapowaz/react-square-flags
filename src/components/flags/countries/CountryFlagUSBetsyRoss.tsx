import type { SVGComponent } from '../../../types';

export const CountryFlagUSBetsyRoss: SVGComponent = ({ title = 'Betsy Ross', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 122.4V55.7h512v66.7zM0 256v-66.8h512V256zm0 133.6v-66.8h512v66.8zM0 512h512v-55.7H0z"/><path fill="var(--flag-palette-blue, #0052b4)" d="M0 0h256v256H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="m200 154 2 17-15 6 16 4 1 16 9-14 16 3-11-12 8-14-15 7zm-144 0-11 12-15-6 8 14-11 12 17-3 8 14 1-16 16-4-15-6zm173-47-10 13-15-5 9 13-9 13 15-5 10 13v-16l15-5-15-5zm-201 0v16l-16 5 16 5v16l9-13 16 5-10-13 10-13-16 5zm177-48-2 16-16 4 15 6-2 17 11-12 15 6-8-14 11-12-16 3zM52 59l-8 14-17-3 11 12-8 14 15-6 11 12-2-17 15-6-16-4zm134-32-12 11-14-8 7 15-13 11 17-2 6 15 4-16 16-1-14-8zM70 27l3 16-14 9 16 1 4 16 7-15 16 2-12-11 6-15-14 8zm58-15-5 15h-16l13 10-5 15 13-9 13 9-5-15 13-10h-16zm58 217-12-11-14 8 7-15-13-11 17 2 6-15 4 16 16 1-14 8zm-116 0 3-16-14-9 16-1 4-16 7 15 16-2-12 11 6 15-14-8zm58 15-5-15h-16l13-10-5-15 13 9 13-9-5 15 13 10h-16z"/>
  </svg>
);
