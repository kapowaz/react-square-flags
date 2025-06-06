import type { SVGComponent } from '../../../types';

export const CountryFlagNP: SVGComponent = ({ title = 'Nepal', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-bright-red, #d80027)" d="M400.3 274H204.5l240 224H14V25.6z"/><path fill="var(--flag-palette-blue, #0052b4)" fillRule="evenodd" d="M448 288 0 0v512h480L240 288zm-39 196L169 260h183.7L28 51.3V484z" clipRule="evenodd"/><path fill="var(--flag-palette-white, #eeeeee)" d="m211.5 378-31.3-14.7L197 333l-34 6.5-4.3-34.3-23.6 25.2-23.7-25.2-4.3 34.3-34-6.5 16.7 30.3L58.4 378l31.3 14.7L73.1 423l34-6.5 4.2 34.3 23.7-25.2 23.6 25.2 4.3-34.3 34 6.5-16.7-30.3zm-52.2-198.7 29.6-5.7-14.5 26.4 12.2 5.8a97 97 0 0 0 28.2-27.6 80 80 0 0 1-159.7 0q11.3 16.7 28.2 27.6l12.2-5.8L81 173.6l29.6 5.7 3.8-29.9 20.6 22 20.6-22z"/>
  </svg>
);
