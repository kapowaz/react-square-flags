import type { SVGComponent } from '../../../types';

export const LanguageFlagBE: SVGComponent = ({ title = 'Belarusian', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-green, #6da544)" d="M0 300.6h512V512H0z"/><path fill="var(--flag-palette-dark-red, #a2001d)" d="M0 0h512v345H0z"/><g clipPath="url(#flag-1j6wl87)"><path fill="var(--flag-palette-dark-red, #a2001d)" d="M0 0h102.4v512H0z"/><path fill="var(--flag-palette-bright-white, #fcfcfc)" d="M51.2 51.2 25.6-.4l25.6-50.8L76.8-.4zm51.2 0L76.8-.4l25.6-50.8L128-.4zM0 51.2-25.6-.4 0-51.2 25.6-.4zm51.2 102.4L25.6 102l25.6-50.8L76.8 102zm51.2 0L76.8 102l25.6-50.8L128 102zM0 153.6-25.6 102 0 51.2 25.6 102zM51.2 256l-25.6-51.6 25.6-50.8 25.6 50.8zm51.2 0-25.6-51.6 25.6-50.8 25.6 50.8zM0 256l-25.6-51.6L0 153.6l25.6 50.8zm51.2 102.4-25.6-51.6L51.2 256l25.6 50.8z"/><path fill="var(--flag-palette-bright-white, #fcfcfc)" d="m102.4 358.4-25.6-51.6 25.6-50.8 25.6 50.8zM0 358.4l-25.6-51.6L0 256l25.6 50.8zm51.2 102.4-25.6-51.6 25.6-50.8 25.6 50.8zm0 102.4-25.6-51.6 25.6-50.8 25.6 50.8zm51.2-102.4-25.6-51.6 25.6-50.8 25.6 50.8zm0 102.4-25.6-51.6 25.6-50.8 25.6 50.8zM0 460.8l-25.6-51.6L0 358.4l25.6 50.8zm0 102.4-25.6-51.6L0 460.8l25.6 50.8z"/></g><defs><clipPath id="flag-1j6wl87"><path fill="#fff" d="M0 0h102.4v512H0z"/></clipPath></defs>
  </svg>
);
