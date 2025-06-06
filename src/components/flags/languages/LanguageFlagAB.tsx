import type { SVGComponent } from '../../../types';

export const LanguageFlagAB: SVGComponent = ({ title = 'Abkhazian', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-green, #6da544)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M512 438.8H0v-73.1h512zm0-146.2H0v-73.2h512zm0-146.3H0V73h512z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 0h256v219.4H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="m111.3 171.7-11.1-22.3V105L128 82.6l27.8 22.3v33.4l11.2-11.2v22.3l-22.3 22.3zm-59.9-68.3 3 9h9.5l-7.7 5.7 3 9-7.8-5.6-7.7 5.6 3-9-7.7-5.6h9.5zm22.3-22.3 3 9.1h9.5l-7.7 5.6 3 9-7.8-5.5L66 105l3-9-7.8-5.7h9.5zM96 59l2.9 9h9.5l-7.7 5.7 3 9L96 77l-7.8 5.6 3-9-7.7-5.7H93zm108.6 44.5-3 9h-9.5l7.7 5.7-3 9 7.8-5.6 7.7 5.6-3-9 7.7-5.6h-9.5zm-22.3-22.3-3 9.1h-9.5l7.7 5.6-3 9 7.8-5.5 7.7 5.6-3-9 7.8-5.7h-9.6zM160 59l-3 9h-9.4l7.7 5.7-3 9L160 77l7.8 5.6-3-9 7.7-5.7H163zm-32-11.2-3 9.1h-9.5l7.8 5.6-3 9 7.8-5.5 7.7 5.6-3-9 7.8-5.7H131z"/>
  </svg>
);
