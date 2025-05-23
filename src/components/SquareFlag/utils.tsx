import type { Meta, StoryObj } from '@storybook/react';
import { getComponentName } from '../../tools/utils';
import { SVGComponent } from '../../types';
import { ISquareFlagProps, SquareFlag } from '.';
import styles from './SquareFlag.module.css';

/**
 * Returns an object of the form { FlagComponentName: SVGComponent, ... }
 */
export const getFlagComponentMapping = <T extends string>({
  components,
  typeName,
}: {
  components: Record<T, SVGComponent>;
  typeName: string;
}) => {
  return Object.keys(components).reduce((acc, code) => {
    return {
      ...acc,
      [getComponentName({ code, typeName })]: components[code as T],
    };
  }, {});
};

/**
 * Returns an object of the form { FlagComponentName: 'Flag Name', ... }
 */
export const getFlagLabels = <T extends string>({
  components,
  flagNames,
  typeName,
}: {
  components: Record<T, SVGComponent>;
  flagNames: Record<T, string>;
  typeName: string;
}) => {
  return Object.keys(components).reduce((acc, code) => {
    return {
      ...acc,
      [getComponentName({ code, typeName })]: flagNames[code as T],
    };
  }, {});
};

export const getFlagMeta = <T extends string>({
  components,
  flagNames,
  typeName,
}: {
  components: Record<T, SVGComponent>;
  flagNames: Record<T, string>;
  typeName: string;
}): Meta => {
  const mapping = getFlagComponentMapping<T>({
    components,
    typeName,
  });

  const labels = getFlagLabels<T>({
    components,
    flagNames,
    typeName,
  });

  return {
    component: SquareFlag,
    argTypes: {
      flag: {
        options: Object.keys(mapping),
        mapping,
        control: {
          type: 'select',
          labels,
        },
      },
      palette: {
        options: ['Default', 'Custom'],
        control: { type: 'select' },
      },
    },
  };
};

export const defaultSquareFlagArgs: StoryObj<typeof SquareFlag> = {
  args: {
    size: 'xlarge',
  },
};

export const getSquareFlagStory = ({
  fallback,
}: {
  fallback: SVGComponent;
}): StoryObj<typeof SquareFlag> => {
  return {
    render: ({
      flag,
      palette,
      ...args
    }: ISquareFlagProps & { palette?: string }) => {
      return (
        <SquareFlag
          {...args}
          flag={flag || fallback}
          className={palette === 'Custom' ? styles.customColors : undefined}
        />
      );
    },
    ...defaultSquareFlagArgs,
  };
};
