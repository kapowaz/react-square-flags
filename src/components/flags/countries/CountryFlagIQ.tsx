import type { SVGComponent } from '../../../types';

export const CountryFlagIQ: SVGComponent = ({ title = 'Iraq', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M0 136h512v240H0z"/><path fill="var(--flag-palette-black, #333333)" d="M0 344h512v168H0z"/><path fill="var(--flag-palette-dark-red, #a2001d)" d="M0 0h512v168H0z"/><path fill="var(--flag-palette-dark-green, #496e2d)" d="M389.6 189.2v100.2h22.2v33.4H311.7V256H345v33.4h11.2V189.2zM278.3 289.4h22.2v33.4H245V189.2h33.4zM167 222.6c-10.4 0-19 7.1-21.6 16.7h49.4a39 39 0 0 1 39 39v44.5H89v-33.4h111.3v-11.1c0-3.1-2.4-5.6-5.5-5.6h-83.5v-27.8c0-30.7 25-55.7 55.7-55.7z"/>
  </svg>
);
