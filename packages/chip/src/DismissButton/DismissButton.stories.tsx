import React from 'react';
import { StoryMetaType } from '@az-tools/storybook-utils';

import AzuBlueProvider from '@azublue-ui/leafygreen-provider';

import { Variant } from '../Chip/Chip.types';

import { DismissButton } from '.';

const meta: StoryMetaType<typeof DismissButton> = {
  title: 'Components/Display/Chip/DismissButton',
  component: DismissButton,
  parameters: {
    default: null,
    generate: {
      combineArgs: {
        darkMode: [false, true],
        label: ['Chip'],
        disabled: [false, true],
        variant: Object.values(Variant),
      },
      args: {
        onDismiss: () => {},
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
};
export default meta;

export const Generated = () => <></>;
