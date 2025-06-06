import type { SVGComponent } from '../../../types';

export const LanguageFlagSN: SVGComponent = ({ title = 'Shona', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-black, #333333)" d="M0 200.3h512v111.3H0z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="M0 58.5h512v99.6H0zm0 289.6h512v111.3H0z"/><path fill="var(--flag-palette-green, #6da544)" d="M512 512H0v-72.2h512zm0-439.8H0V0h512z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M512 367.6H0v-72.2h512zm0-151H0v-72.2h512z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M0 0v512l256-256z"/><path fill="var(--flag-palette-black, #333333)" d="M31.5 0H0l256 256L0 512h31.5l256-256z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="m103 189.2 16.5 51h53.6l-43.4 31.6 16.6 51-43.4-31.5-43.4 31.5 16.6-51-43.4-31.6h53.6z"/><path fill="var(--flag-palette-dark-yellow, #ffc635)" d="m148.5 260.2-43.2-15.3-3.4-31a16.7 16.7 0 1 0-32.5 7.6l-12 12.1h21.5c0 22.4-16.7 22.4-16.7 44.7l9.2 22.2h55.7l9.3-22.2q1.4-3.3 1.7-6.6c8-3.2 10.4-11.5 10.4-11.5"/>
  </svg>
);
