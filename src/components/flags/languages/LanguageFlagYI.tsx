import type { SVGComponent } from '../../../types';

export const LanguageFlagYI: SVGComponent = ({ title = 'Yiddish', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-black, #333333)" d="M512 456H0v-66h512zM172 187a84 84 0 0 0 74 82.4v-20.2a64 64 0 0 1-54-62.2l-7-15h34l-7 15a44 44 0 0 0 34 41.9V187l-7-15h34l-7 15v41.9a44 44 0 0 0 34-42l-7-14.9h34l-7 15a64 64 0 0 1-54 62.2v20.2a84 84 0 0 0 74-82.4l-7-15h34l-7 15a104 104 0 0 1-94 102.5V319l49 11v14H197v-14l49-11v-29.5A104 104 0 0 1 152 187l-7-15h34zm340-65H0V56h512z"/>
  </svg>
);
