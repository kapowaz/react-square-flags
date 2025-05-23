import type { Meta, StoryObj } from '@storybook/react';
import { CountryCode, LanguageCode, OtherFlagCode } from '../../types';
import { ISquareFlagImageProps, SquareFlagImage } from '.';

export const getFlagMeta = <T extends string>({
  flagNames,
}: {
  flagNames: Record<T, string>;
}): Meta => {
  const mapping = Object.keys(flagNames).reduce((acc, code) => {
    return {
      ...acc,
      [code]: code,
    };
  }, {});

  return {
    component: SquareFlagImage,
    argTypes: {
      code: {
        options: Object.keys(mapping),
        mapping,
        control: {
          type: 'select',
          labels: flagNames,
        },
      },
    },
  };
};

export const defaultSquareFlagArgs: StoryObj<typeof SquareFlagImage> = {
  args: {
    size: 'xlarge',
  },
};

export const getSquareFlagImageStory = ({
  type = 'country',
  fallback,
}: {
  type?: 'country' | 'language' | 'other';
  fallback: CountryCode | LanguageCode | OtherFlagCode;
}): StoryObj<typeof SquareFlagImage> => {
  return {
    render: ({ code, ...args }: ISquareFlagImageProps) => {
      return <SquareFlagImage {...args} code={code || fallback} type={type} />;
    },
    ...defaultSquareFlagArgs,
  };
};
