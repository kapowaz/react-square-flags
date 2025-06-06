import type { SVGComponent } from '../../../types';

export const LanguageFlagTG: SVGComponent = ({ title = 'Tajik', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M512 384H0V128h512z"/><path fill="var(--flag-palette-green, #6da544)" d="M512 512H0V368h512z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M512 144H0V0h512z"/><path fill="var(--flag-palette-dark-yellow, #ffc635)" d="M211.5 322.8h89v-37.9l-17.8 9L256 267l-26.7 26.7-17.8-8.9zm-51-44.5 4.2 12.7H178l-10.9 7.9 4.2 12.8-10.9-8-10.8 8 4.1-12.8L143 291h13.4zm12.9-44.6 4.1 12.8H191l-10.8 7.9 4.1 12.7-10.8-7.9-10.9 8 4.2-12.8-10.9-8h13.4zm36.7-33.4 4.2 12.8h13.4l-10.9 7.9 4.2 12.7-11-7.7-10.8 7.8 4.1-12.7-10.8-7.9H206zm141.4 78-4.2 12.7H334l10.9 7.9-4.2 12.8 10.9-8 10.8 8-4.1-12.8L369 291h-13.4zm-12.9-44.6-4.1 12.8H321l10.8 7.9-4.1 12.7 10.8-7.9 10.9 8-4.2-12.8 10.9-8h-13.4zm-36.7-33.4-4.2 12.8h-13.4l10.9 7.9-4.2 12.7 11-7.7 10.8 7.8-4.1-12.7 10.8-7.9H306zM256 183.7l4.1 12.7h13.5l-10.9 7.9 4.2 12.7-10.9-7.8-10.8 7.8 4-12.7-10.8-7.9H252z"/>
  </svg>
);
