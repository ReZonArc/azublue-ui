import React from 'react';
import { type StoryMetaType } from '@az-tools/storybook-utils';

import { BaseFontSize } from '@azublue-ui/tokens';

import Error from './Error';
import { ErrorProps } from './Error.types';

export const Basic = ({ children, ...rest }: ErrorProps) => {
  return <Error {...rest}>{children}</Error>;
};

const meta: StoryMetaType<typeof Error> = {
  title: 'Components/Typography/Error',
  component: Error,
  parameters: {
    default: 'Basic',
    generate: {
      combineArgs: {
        darkMode: [false, true],
        baseFontSize: Object.values(BaseFontSize),
      },
    },
  },
  args: {
    children: 'Lorem ipsum dolor sit amet',
    darkMode: false,
  },
};
export default meta;

export const Generated = () => <></>;
