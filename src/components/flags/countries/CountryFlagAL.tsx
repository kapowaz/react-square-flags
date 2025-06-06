import type { SVGComponent } from '../../../types';

export const CountryFlagAL: SVGComponent = ({ title = 'Albania', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-bright-red, #d80027)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-black, #333333)" d="M400.7 190H308a33.3 33.3 0 0 0-24.2-56.4 33 33 0 0 0-27.8 14.9 33.4 33.4 0 1 0-52 41.5h-92.7a46 46 0 0 0 46 44.5h-1.5c0 24.6 20 44.6 44.5 44.6q.1 12.1 5.8 21.8l-37 37 28.4 28.3 40.2-40.2q2.4.9 4.9 1.4l-24.3 54.8L256 423l37.7-40.8-24.3-54.8q2.5-.5 4.9-1.4l40.2 40.2 28.3-28.3-37-37q5.8-9.8 5.9-21.8c24.5 0 44.5-20 44.5-44.6h-1.5c24.6 0 46-19.9 46-44.5"/>
  </svg>
);
