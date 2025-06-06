import type { SVGComponent } from '../../../types';

export const LanguageFlagSU: SVGComponent = ({ title = 'Sundanese', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-dark-green, #496e2d)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="M229 172a4 4 0 0 0-3 0c-5 5-18 17-21 36-5 25 9 52 34 67a4 4 0 0 0 5-1 4 4 0 0 0-1-6c-22-14-34-37-30-59 3-16 14-27 19-30a4 4 0 0 0 0-6 4 4 0 0 0-3-1"/><path fill="var(--flag-palette-white, #eeeeee)" d="M283 172a4 4 0 0 0-3 1 4 4 0 0 0 1 6c4 4 15 14 18 30 4 22-7 45-30 59a4 4 0 0 0-1 6 4 4 0 0 0 5 1c25-15 39-42 34-67a58 58 0 0 0-22.4-35.8zm-28 4s-12 6-12 18 19 24 19 33c0 10-9 13-9 13v22h6v-19s19-9 12-35c-5-18-16-14-16-32"/><path fill="var(--flag-palette-blue, #0052b4)" d="m179 300 12 44 65 32 65-32 12-44z"/><path fill="var(--flag-palette-black, #333333)" d="m243 267-16 20-5-9h-32l-10 22h153l-11-22h-32l-5 9-16-20z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="M256 141c-24 0-46 13-62 34s-25 49-25 81c0 13 1 26 4 38l-13 14c8 23.8 21.4 44.1 38.5 58.3A89 89 0 0 0 256 388a89 89 0 0 0 57.5-21.7c17-14.2 30.5-34.5 38.5-58.3l-13-14c3-12 5-25 5-38 0-32-10-60-26-81a79 79 0 0 0-62-34m0 7c22 0 42 11 57 31a135 135 0 0 1 0 154 71 71 0 0 1-57 32c-22 0-42-12-57-32-14-19-23-47-23-77s9-57 23-77c15-20 35-31 57-31"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M260 264a4 4 0 0 0-8 0v19a4 4 0 0 0 8 0z"/>
  </svg>
);
