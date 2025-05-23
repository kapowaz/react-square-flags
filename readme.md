# react-square-flags

A set of React components for rendering square, minimalist international country
and language flags, using [`square-flags`][1] as the SVG graphics.
`square-flags` is itself originally derived from HatScripts’ [`circle-flags`][2]
set, but with a number of tweaks and refinements to work better in a
square-shaped canvas.

## Usage

Each flag is exported as an individual React SVG component. These can be
rendered directly, or passed as the `flag` prop to the `SquareFlag` component:

```tsx
import { CountryFlagEU, SquareFlag } from 'react-square-flags';

export default () => {
  return <SquareFlag flag={CountryFlagEU} size="medium" />;
};
```

If you want to allow the caller to render an arbitrary named flag using a string
instead, you can use the values from `allCountryFlags` to create a wrapper, like
this:

```tsx
import { allCountryFlags, CountryCode, SquareFlag } from 'react-square-flags';

export const AnyCountryFlag = ({
  code,
  ...props
}: Omit<ISquareFlagProps, 'flag'> & { code: CountryCode }) => {
  return <SquareFlag flag={allCountryFlags[code]} {...props} />;
};
```

## Contributing

### Development Dependencies

This project relies on a number of dependencies for local development which are
not part of the published package, but which are used for:

- Importing the original SVG assets and converting them to JSX (Node)
- Building the published ESM JavaScript files (Rollup)
- Generating the associated type definitions (TypeScript)
- Visual screenshot testing (Storybook & Playwright)
- Unit testing (Jest & React Testing Library)

The goal is for all source code to be authored in TypeScript, and so they each
require some discrete configuration to get them to work alongside one another.

- `.nvmrc` — this is used to specify the version of Node.js used, in our case
  v22.14, which supports running TypeScript source files natively so that the
  import script ingesting the SVG source files can reference the same types as
  the generated components
- `babel.config.js` — this is used by the build process when outputting
  JavaScript files, as part of the published package
- `tsconfig.json` — config for TypeScript used across the whole project for all
  TypeScript files, i.e. anything authored in TypeScript.
- `tsconfig.build.json` — config for TypeScript Compiler (`tsc`) when generating
  definition files only for the package
- `jest.config.js` — config used by Jest and React Testing Library
- `playwright.config.js` — config used by Playwright
- `.storybook/main.ts` — config for Storybook

[1]: https://www.npmjs.com/package/@kapowaz/square-flags
[2]: https://github.com/HatScripts/circle-flags
