import type { SVGComponent } from '../../../types';

export const LanguageFlagKI: SVGComponent = ({ title = 'Kikuyu, Gikuyu', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="m228 0 32 211-32 211h-32l-32-211L196 0z"/><path fill="var(--flag-palette-dark-green, #496e2d)" d="M196 0v450H0V0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="m178 87-62 138 62 138-31 14-49-112-49 112-31-14 62-138L18 87l31-14 49 112 49-112z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M98 80 81 96 65 224l16 130 17 16 17-16 15-131-15-127z"/><path fill="var(--flag-palette-black, #333333)" d="m154 148-10 76 10 78a159 159 0 0 0 22-77c0-28-10-54-22-77m-112 0 9 74-9 80a159 159 0 0 1-22-77c0-28 10-54 22-77"/><path fill="var(--flag-palette-dark-red, #a2001d)" d="M42 148v154a269 269 0 0 0 39 52V96c-11 12-26 30-39 52m112 0a269 269 0 0 0-39-52v258c11-12 26-30 39-52z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M512 0v422H228V0z"/><path fill="var(--flag-palette-black, #333333)" d="m0 450 86-17 75 8 55-51 41 18 106-56 149 70v90H0z"/>
  </svg>
);
