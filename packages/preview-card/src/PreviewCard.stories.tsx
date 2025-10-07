import React from 'react';
import { faker } from '@faker-js/faker';
import {
  storybookArgTypes,
  storybookExcludedControlParams,
  StoryMetaType,
} from '@az-tools/storybook-utils';
import { StoryFn, StoryObj } from '@storybook/react';

import Button from '@azublue-ui/button';
import AzuBlueProvider from '@azublue-ui/leafygreen-provider';
import { Body } from '@azublue-ui/typography';

import { PreviewCard, PreviewCardProps } from '.';

const SEED = 0;
faker.seed(SEED);

const fillerText = faker.lorem.paragraphs(6);
const defaultExcludedControls = [
  ...storybookExcludedControlParams,
  'children',
  'onOpenChange',
];

const meta: StoryMetaType<typeof PreviewCard> = {
  title: 'Sections/Cards/PreviewCard',
  component: PreviewCard,
  parameters: {
    default: 'LiveExample',
    controls: {
      exclude: [...defaultExcludedControls, 'isOpen'],
    },
    generate: {
      combineArgs: {
        darkMode: [false, true],
        isOpen: [false, true],
      },
      decorator: (Instance, context) => {
        return (
          <AzuBlueProvider darkMode={context?.args.darkMode}>
            <Instance>
              <Body>{fillerText}</Body>
            </Instance>
          </AzuBlueProvider>
        );
      },
    },
  },
  args: {
    collapsedHeight: 140,
    darkMode: false,
    defaultOpen: false,
  },
  argTypes: {
    darkMode: storybookArgTypes.darkMode,
  },
};

export default meta;

const TemplateComponent: StoryFn<PreviewCardProps> = (
  props: PreviewCardProps,
) => {
  const { children, ...rest } = props;

  return (
    <PreviewCard
      {...rest}
      className={props.className}
      collapsedHeight={props.collapsedHeight}
      darkMode={props.darkMode}
      defaultOpen={props.defaultOpen}
    >
      {children ?? (
        <>
          <Body>{fillerText}</Body>
          <Button size="small">Focusable</Button>
        </>
      )}
    </PreviewCard>
  );
};

export const LiveExample: StoryObj<PreviewCardProps> = {
  render: TemplateComponent,
  parameters: {
    chromatic: {
      disableSnapshot: true,
    },
  },
};

export const Controlled: StoryObj<PreviewCardProps> = {
  render: TemplateComponent,
  parameters: {
    controls: {
      exclude: [
        ...defaultExcludedControls,
        'defaultOpen',
        'collapsedHeight',
        'viewLessText',
        'viewMoreText',
      ],
    },
    chromatic: {
      disableSnapshot: true,
    },
  },
  args: {
    isOpen: false,
  },
  argTypes: {
    isOpen: {
      control: 'boolean',
    },
  },
};

export const Generated = {
  render: () => <></>,
};
