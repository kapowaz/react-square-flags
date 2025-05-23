import type { SVGComponent } from '../../../types';

export const LanguageFlagMR: SVGComponent = ({ title = 'Marathi', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M0 204.9h512V512H0z"/><path fill="var(--flag-palette-gold, #ff9811)" d="M0 0h512v256H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M512 512V0L256 256z"/><path fill="var(--flag-palette-dark-red, #a2001d)" fillRule="evenodd" d="m96 141.4 18.6 18.6h26.8l18.6-18.6v-26.8L141.4 96h-26.8L96 114.6zM80 108v40l28 28h40l28-28v-40l-28-28h-40z" clipRule="evenodd"/>
  </svg>
);
