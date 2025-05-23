import type { SVGComponent } from '../../../types';

export const CountryFlagBZ: SVGComponent = ({ title = 'Belize', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-blue, #0052b4)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-dark-red, #a2001d)" d="M512 512H0v-44.5h512zm0-467.5H0V0h512z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M256 378.4a122.4 122.4 0 1 0 0-244.8 122.4 122.4 0 0 0 0 244.8"/><path fill="var(--flag-palette-green, #6da544)" d="M256 356.2a100.2 100.2 0 1 0 0-200.4 100.2 100.2 0 0 0 0 200.4"/><path fill="var(--flag-palette-white, #eeeeee)" d="M256 322.8a66.8 66.8 0 1 0 0-133.6 66.8 66.8 0 0 0 0 133.6"/><path fill="var(--flag-palette-blue, #0052b4)" d="M256 239.3 219.8 256v27.8l36.2 22.3 36.2-22.3V256z"/><path fill="var(--flag-palette-dark-yellow, #ffc635)" d="M219.8 222.6h72.4V256h-72.4z"/>
  </svg>
);
