import type { SVGComponent } from '../../../types';

export const LanguageFlagSM: SVGComponent = ({ title = 'Samoan', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-bright-red, #d80027)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-blue, #0052b4)" d="M0 0h256v256H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="m184.2 144.7 4.2 12.8h13.4l-10.9 7.8 4.2 12.8-10.9-7.9-10.8 7.9 4.1-12.8-10.8-7.9H180zM116.9 44.5l6.9 21.3H146l-18 13.1 6.9 21.3-18-13.2-18.1 13.2 6.9-21.3-18-13.1H110zm66.8 22.3 6.9 21.2h22.3l-18 13.2 6.8 21.2-18-13.1-18.1 13.1 6.9-21.2L154.4 88h22.3zm-52.8 89 6.9 21.3H160l-18 13.1 6.8 21.3-18-13.2-18.1 13.2 6.9-21.3-18-13.1H124zm-58.6-55.6 7 21.2h22.3l-18 13.2 6.8 21.2-18-13.1-18.1 13.1 6.9-21.2L43 121.4h22.3z"/>
  </svg>
);
