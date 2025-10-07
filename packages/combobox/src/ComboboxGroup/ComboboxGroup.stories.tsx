import React from 'react';
import { StoryMetaType } from '@az-tools/storybook-utils';

import AzuBlueProvider from '@azublue-ui/leafygreen-provider';

import { InternalComboboxOption } from '../ComboboxOption';

import { InternalComboboxGroup } from './ComboboxGroup';

const meta: StoryMetaType<typeof InternalComboboxGroup> = {
  title: 'Components/Inputs/Combobox/ComboboxGroup',
  component: InternalComboboxGroup,
  parameters: {
    default: null,
    generate: {
      combineArgs: {
        darkMode: [false, true],
      },
      args: {
        label: 'Label',
        children: (
          <>
            <InternalComboboxOption
              value="option"
              displayName="Option"
              isSelected={false}
              isFocused={false}
              setSelected={() => {}}
              index={0}
            />
          </>
        ),
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
