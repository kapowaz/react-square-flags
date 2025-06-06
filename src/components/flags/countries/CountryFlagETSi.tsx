import type { SVGComponent } from '../../../types';

export const CountryFlagETSi: SVGComponent = ({ title = 'Sidama', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-blue, #0052b4)" d="M0 136h512v240H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 344h512v168H0z"/><path fill="var(--flag-palette-dark-green, #496e2d)" d="M0 0h512v168H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M512 352H0v-32h512zm0-160H0v-32h512zM312 317l104-75H288l104 75-40-122zm-203-32 49-36H98l49 36-19-58zm64 32 49-36h-60l49 36-19-58zm0-64 49-36h-60l49 36-19-58z"/>
  </svg>
);
