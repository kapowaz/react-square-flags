import type { SVGComponent } from '../../../types';

export const LanguageFlagDZ: SVGComponent = ({ title = 'Dzongkha', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-gold, #ff9811)" d="M512 0v512H0V0z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="M0 512V0h512z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M400.8 144.7v-44.5h-85.3l-6.5 6.5c-23.2 23.2-19.3 50.2-16.5 70 2.7 18.3 3 25.3-3.8 32.1s-13.9 6.5-32.2 3.9c-19.7-2.9-46.8-6.8-70 16.4s-19.3 50.3-16.4 70c2.6 18.3 3 25.4-3.9 32.2-6.8 6.8-13.8 6.5-32.1 3.8q-10.7-1.7-22.4-2.2l-.5 44.6q7.6.2 16.5 1.7c7 1 15 2.2 23.5 2.2 8.7 0 18-1.3 27-5.2v35.6H245v-33.4h-33.4v-22.2h22.3v-33.4H216c.8-10.8-.7-21.2-2-30-2.6-18.4-3-25.4 3.9-32.2 6.8-6.8 13.8-6.5 32.2-3.8 14.3 2 32.6 4.7 50.4-3v35.6h66.8V256H334v-22.3h22.3v-33.4h-17.8a130 130 0 0 0-2-30c-1.8-12.8-2.5-20-.4-25.6z"/>
  </svg>
);
