import React from 'react';
import { StoryMetaType } from '@az-tools/storybook-utils';
import { StoryFn } from '@storybook/react';

import AzuBlueProvider from '.';

const TestComponent = () => <div>This is a test component.</div>;

const meta: StoryMetaType<typeof AzuBlueProvider> = {
  title: 'Contexts/AzuBlueProvider',
  component: AzuBlueProvider,
  parameters: {
    default: null,
  },
  argTypes: {
    darkMode: { control: 'boolean' },
    popoverPortalContainer: { control: 'none' },
  },
};
export default meta;

const Template: StoryFn<typeof AzuBlueProvider> = props => (
  <AzuBlueProvider {...props}>
    <TestComponent />
  </AzuBlueProvider>
);

export const Basic = Template.bind({});
Basic.parameters = {
  chromatic: { disableSnapshot: true },
};
