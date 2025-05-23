import type { SVGComponent } from '../../../types';

export const OtherFlagAmsterdam: SVGComponent = ({ title = 'Amsterdam', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-black, #333333)" d="M0 136h512v240H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 344h512v168H0zM0 0h512v168H0z"/><path fill="#fff" fillRule="evenodd" d="m85 227.5 28.6-28.6 28.6 28.6-28.6 28.5 28.6 28.5-28.6 28.6-28.5-28.6-28.6 28.6L28 284.5 56.5 256 28 227.5l28.5-28.6zm171 0 28.5-28.6 28.6 28.6-28.6 28.5 28.6 28.5-28.6 28.6-28.5-28.6-28.5 28.6-28.6-28.6 28.6-28.5-28.6-28.5 28.6-28.6zm171 0 28.5-28.6 28.5 28.6-28.5 28.5 28.5 28.5-28.5 28.6-28.6-28.6-28.5 28.6-28.6-28.6 28.6-28.5-28.6-28.5 28.6-28.6z" clipRule="evenodd"/>
  </svg>
);
