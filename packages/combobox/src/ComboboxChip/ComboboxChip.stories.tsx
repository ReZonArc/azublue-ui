import React from 'react';
import { StoryMetaType } from '@az-tools/storybook-utils';

import AzuBlueProvider from '@azublue-ui/leafygreen-provider';

import { ComboboxChip } from './ComboboxChip';

const meta: StoryMetaType<typeof ComboboxChip> = {
  title: 'Components/Inputs/Combobox/ComboboxChip',
  component: ComboboxChip,
  parameters: {
    default: null,
    generate: {
      combineArgs: {
        darkMode: [false, true],
        displayName: [
          'Chip',
          '5f4dcc3b5aa765d61d8327deb882cf995f4dcc3b5aa765d61d8327deb882cf99',
        ],
      },
      args: {},
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
