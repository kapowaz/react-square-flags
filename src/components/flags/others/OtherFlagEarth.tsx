import type { SVGComponent } from '../../../types';

export const OtherFlagEarth: SVGComponent = ({ title = 'Earth', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-blue, #0052b4)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M302.7 233.7a103.1 103.1 0 0 0 0 206 103.1 103.1 0 0 0 0-206m0 20c46 0 83 37 83 83s-37 83-83 83-83-37-83-83 37-83 83-83"/><path fill="var(--flag-palette-white, #eeeeee)" d="M209.4 72.3a103.1 103.1 0 0 0 0 206 103.1 103.1 0 0 0 0-206m0 20c46 0 83 37 83 83s-37 83-83 83-83-37-83-83 37-83 83-83"/><path fill="var(--flag-palette-white, #eeeeee)" d="M302.7 72.3a103.1 103.1 0 0 0 0 206 103.1 103.1 0 0 0 0-206m0 20c46 0 83 37 83 83s-37 83-83 83-83-37-83-83 37-83 83-83"/><path fill="var(--flag-palette-white, #eeeeee)" d="M349.2 153a103.1 103.1 0 0 0 0 206 103.1 103.1 0 0 0 0-206m0 20c46 0 83 37 83 83s-37 83-83 83-83-37-83-83 37-83 83-83"/><path fill="var(--flag-palette-white, #eeeeee)" d="M209.4 233.7a103.1 103.1 0 0 0 0 206 103.1 103.1 0 0 0 0-206m0 20c46 0 83 37 83 83s-37 83-83 83-83-37-83-83 37-83 83-83"/><path fill="var(--flag-palette-white, #eeeeee)" d="M162.8 153a103.1 103.1 0 0 0 0 206 103.1 103.1 0 0 0 0-206m0 20c46 0 83 37 83 83s-37 83-83 83-83-37-83-83 37-83 83-83"/><path fill="var(--flag-palette-white, #eeeeee)" d="M256 153.1a103.1 103.1 0 0 0 0 206 103.1 103.1 0 0 0 0-206m0 20c46 0 83 37 83 83 0 45.9-37 83-83 83s-83-37.1-83-83c0-46 37-83 83-83"/>
  </svg>
);
