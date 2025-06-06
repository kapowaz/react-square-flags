import type { SVGComponent } from '../../../types';

export const CountryFlagETOr: SVGComponent = ({ title = 'Oromia', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M0 136h512v240H0z"/><path fill="var(--flag-palette-black, #333333)" d="M0 344h512v168H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 0h512v168H0z"/><path fill="var(--flag-palette-green, #6da544)" d="M232.6 294.2c0 25-26 42-26 42h98s-26-17-26-42z"/><path fill="var(--flag-palette-dark-green, #496e2d)" d="M255.6 176.2c-9 0-17 4-23 10a32 32 0 0 0-48 24 32 32 0 0 0 2 59 32 32 0 0 0 46 25c6 6 14 10 23 10s17-4 23-10c4 3 9 4 14 4 17 0 31-13 32-29a32 32 0 0 0 2-59 32 32 0 0 0-48-24c-6-6-14-10-23-10"/>
  </svg>
);
