import type { SVGComponent } from '../../../types';

export const CountryFlagSovietUnion: SVGComponent = ({ title = 'Soviet Union', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-bright-red, #d80027)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="M173 166a95 95 0 0 1 67 48c19.9 34.2 18.3 74.1-1.4 99.6L269 344l-18 18-31.6-31.6c-27 15.5-62.6 9.4-89.4-14.4l-42 46-18-18 58-53c21.2 20.3 48.4 27 69.7 17.7L136 247l-21 21-25-25 49-49 44 6-29 29 64 64c16.3-21.5 16.7-56.5-1-87a93 93 0 0 0-44-40m12.2-83H235l-40.3 29.6L210 160l-40-29.3-40 29.3 15.3-47.4L105 83h49.8L170 36zm-21.5 12H142l17.5 13.2L153 129l17-12.8 17 12.8-6.5-20.8L198 95h-21.7L170 75z"/>
  </svg>
);
