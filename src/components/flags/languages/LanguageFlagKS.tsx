import type { SVGComponent } from '../../../types';

export const LanguageFlagKS: SVGComponent = ({ title = 'Kashmiri', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-gold, #ff9811)" d="M0 0h224l32 88-32 88-96 32L0 176z"/><path fill="var(--flag-palette-white, #eeeeee)" d="m0 224 256-32 256 32v48l-32 24 32 24v48l-32 24 32 24v48l-256 32L0 464v-48l32-24-32-24v-48l32-24-32-24z"/><path fill="var(--flag-palette-dark-green, #496e2d)" d="M224 0v176H0v48h512V0zM0 272v48h512v-48zm0 96v48h512v-48zm0 96v48h512v-48z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M331 33.5a73.7 73.7 0 0 0 45.2 132.2c20.6 0 39.3-8.5 52.7-22.1a80.5 80.5 0 1 1-97.8-110M398.5 64l18.5-8-10.4 17L420 88l-19.7-4.7L390 100l-1.6-19.6L370 76l17.5-7.4L386 50z"/>
  </svg>
);
