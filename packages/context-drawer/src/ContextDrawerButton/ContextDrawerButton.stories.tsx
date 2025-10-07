import React from 'react';
import {
  storybookArgTypes,
  storybookExcludedControlParams,
  StoryMetaType,
} from '@az-tools/storybook-utils';
import { StoryObj } from '@storybook/react';

import AzuBlueProvider from '@azublue-ui/leafygreen-provider';

import { ContextDrawerButton } from './ContextDrawerButton';

const meta: StoryMetaType<typeof ContextDrawerButton> = {
  title: 'Composition/Data Display/ContextDrawer/ContextDrawerButton',
  component: ContextDrawerButton,
  parameters: {
    default: 'LiveExample',
    controls: {
      exclude: [...storybookExcludedControlParams],
    },
    generate: {
      combineArgs: {
        darkMode: [false, true],
        isOpen: [false, true],
      },
      decorator: (Instance, context) => {
        return (
          <AzuBlueProvider darkMode={context?.args.darkMode}>
            <Instance />
          </AzuBlueProvider>
        );
      },
    },
  },
  argTypes: {
    darkMode: storybookArgTypes.darkMode,
    isOpen: {
      control: 'boolean',
    },
  },
};
export default meta;

export const LiveExample: StoryObj<typeof ContextDrawerButton> = {
  render: ({ ...args }) => <ContextDrawerButton {...args} />,
  parameters: {
    chromatic: {
      disableSnapshot: true,
    },
  },
};

export const Generated: StoryObj<typeof ContextDrawerButton> = {
  render: () => <></>,
};
