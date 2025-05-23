import type { SVGComponent } from '../../../types';

export const LanguageFlagNon: SVGComponent = ({ title = 'Old Norse', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-black, #333333)" d="M415 0c0 50.6-9 99.1-25.6 144l89.7 37.2-12.2 29.5-89.8-37.2c-18.4 40-43 76.5-72.6 108.4l68.9 68.8-22.7 22.7-68.8-68.9a416 416 0 0 1-108.4 72.6l37.2 89.8-29.5 12.2-37.2-89.7A414 414 0 0 1 0 415v-32A383 383 0 0 0 383 0zM184 118a28 28 0 0 1 28 28h84a28 28 0 0 1-28 28 28 28 0 0 1-28 28 28 28 0 0 1-28 28h-56a28 28 0 0 1-28-28 28 28 0 0 1-28-28 28 28 0 0 1-28-28h84a28 28 0 0 1 28-28"/><path fill="var(--flag-palette-black, #333333)" d="M0 0v512h32V32h480V0z"/>
  </svg>
);
