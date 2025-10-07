import React from 'react';
import { storybookArgTypes, StoryMetaType } from '@az-tools/storybook-utils';

import AzuBlueProvider from '@azublue-ui/leafygreen-provider';

import { SearchResult, type SearchResultProps } from '.';

const meta: StoryMetaType<typeof SearchResult> = {
  title: 'Components/Inputs/SearchInput/SearchResult',
  component: SearchResult,
  parameters: {
    default: null,
    generate: {
      combineArgs: {
        darkMode: [false, true],
        description: [undefined, 'This is a description'],
        disabled: [false, true],
        highlighted: [false, true],
      },
      decorator: (Instance, ctx) => (
        <AzuBlueProvider darkMode={ctx?.args.darkMode}>
          <Instance />
        </AzuBlueProvider>
      ),
    },
  },
  args: {
    children: 'Some text',
    description: 'This is a description',
  },
  argTypes: {
    children: storybookArgTypes.children,
    darkMode: storybookArgTypes.darkMode,
    description: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    highlighted: {
      control: 'boolean',
    },
    href: {
      control: 'text',
      if: { arg: 'as', eq: 'a' },
    },
  },
};
export default meta;

export const Demo = ({ children, ...rest }: SearchResultProps) => (
  <AzuBlueProvider darkMode={rest.darkMode}>
    <SearchResult {...rest}>{children}</SearchResult>
  </AzuBlueProvider>
);
Demo.parameters = {
  chromatic: { disableSnapshot: true },
};

export const Generated = () => {};
