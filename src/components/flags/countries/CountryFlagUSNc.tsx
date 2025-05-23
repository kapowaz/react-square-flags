import type { SVGComponent } from '../../../types';

export const CountryFlagUSNc: SVGComponent = ({ title = 'North Carolina', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-navy, #002266)" d="M0 0h232l64 256-64 256H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M232 0h280v256l-140 64-140-64z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M232 256h280v256H232z"/><path fill="var(--flag-palette-navy, #002266)" d="M0 0h232v512H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="m91 294 65-47H76l65 47-25-76z"/><path fill="var(--flag-palette-dark-yellow, #ffc635)" d="M43.5 364.6q5.7 3.3 11.6 6l6.2 2.8-2 4.8a151 151 0 0 0 113.2.1l-1.8-4.9 6.2-2.8q6-2.7 11.6-6l4.2-2.3.5 4.8q.5 6 .7 12 4.6 3.3 9.5 6.1l4.6 2.8-4.6 2.6a178 178 0 0 1-11.4 6l-.6.2 1.3 3 1.3 2.7-2.8 1.3a183 183 0 0 1-150.3 0l-2.8-1.3 1.2-2.8 1.3-2.9-.5-.3q-5.9-2.7-11.4-6L24 388l4.6-2.7q5-2.8 9.7-6 0-6 .6-12.1l.4-4.9zM64 288H24v-64h40zm144 0h-40v-64h40zM116 92a183 183 0 0 1 75.1 16.2l2.8 1.3-1.2 2.8-1.3 2.9.5.3q5.8 2.7 11.4 6l4.7 2.6-4.6 2.7q-5 2.9-9.7 6 0 6-.6 12.1l-.4 4.9-4.2-2.4q-5.7-3.3-11.6-6l-6.2-2.8 2-4.8a151 151 0 0 0-113.2-.1l1.8 4.9-6.2 2.8q-6 2.7-11.6 6l-4.2 2.3-.5-4.8q-.5-6-.7-12l-9.5-6.1L24 124l4.6-2.6a178 178 0 0 1 11.4-6l.6-.2-1.3-3-1.3-2.7 2.8-1.3A183 183 0 0 1 116 92"/>
  </svg>
);
