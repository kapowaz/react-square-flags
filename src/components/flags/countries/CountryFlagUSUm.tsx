import type { SVGComponent } from '../../../types';

export const CountryFlagUSUm: SVGComponent = ({ title = 'United States Minor Outlying Islands', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 122.4V55.7h512v66.7zM0 256v-66.8h512V256zm0 133.6v-66.8h512v66.8zM0 512h512v-55.7H0z"/><path fill="var(--flag-palette-blue, #0052b4)" d="M0 0h256v256H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M53.4 199.3h28l-22.7 16.4 8.7 26.6-22.6-16.4-22.6 16.4 8.7-26.6-22.6-16.4h27.9l8.6-26.5zm83.2 0h28l-22.7 16.4 8.7 26.6-22.6-16.4-22.6 16.4 8.6-26.6-22.5-16.4h27.9l8.6-26.5zm83.2 0h28L225 215.7l8.7 26.6-22.6-16.4-22.6 16.4 8.7-26.6-22.6-16.4h27.9l8.6-26.5zM53.4 116.1h28l-22.7 16.4 8.7 26.6-22.6-16.4L22.2 159l8.7-26.6L8.3 116h27.9l8.6-26.5zm83.2 0h28l-22.7 16.4 8.7 26.6-22.6-16.4-22.6 16.4 8.6-26.6-22.5-16.4h27.9l8.6-26.5zm83.2 0h28L225 132.5l8.7 26.6-22.6-16.4-22.6 16.4 8.7-26.6-22.6-16.4h27.9l8.6-26.5zM53.4 33h28L58.6 49.3 67.4 76 44.8 59.5 22.2 75.9 31 49.3 8.3 33h27.9l8.6-26.5zm83.2 0h28l-22.7 16.4 8.7 26.6L128 59.5l-22.6 16.4 8.6-26.6L91.6 33h27.9L128 6.4zm83.2 0h28L225 49.3l8.7 26.6-22.6-16.4-22.6 16.4 8.7-26.6L174.7 33h27.9l8.6-26.5z"/>
  </svg>
);
