import React from 'react';
import { Chart, Line } from '@az-charts/core';
import { SeriesName, SeriesProvider } from '@az-charts/series-provider';
import {
  storybookArgTypes,
  storybookExcludedControlParams,
} from '@az-tools/storybook-utils';
import { StoryFn, StoryObj } from '@storybook/react';

import { css } from '@azublue-ui/emotion';
import Icon from '@azublue-ui/icon';
import { spacing } from '@azublue-ui/tokens';

import { makeLineData } from '../../core/src/testUtils';

import { Legend, LegendProps } from '.';

const lineData = makeLineData(15);

const defaultExcludedControls = [
  ...storybookExcludedControlParams,
  'seriesNameFormatter',
];

export default {
  title: 'Composition/Charts/Legend',
  component: Legend,
  parameters: {
    default: 'LiveExample',
    controls: {
      exclude: defaultExcludedControls,
    },
  },
  args: {
    showSelectAll: true,
  },
  argTypes: {
    darkMode: storybookArgTypes.darkMode,
    showSelectAll: {
      control: 'boolean',
      description: 'Whether to show the "Select All" checkbox',
    },
  },
};

const TemplateComponent: StoryFn<LegendProps> = ({ ...props }) => {
  return (
    <SeriesProvider series={lineData.map(({ name }) => name)}>
      <div
        className={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <Legend {...props} series={lineData.map(({ name }) => name)} />
        <Chart>
          {lineData.map(({ data, name }) => (
            <Line key={name} data={data} name={name} />
          ))}
        </Chart>
      </div>
    </SeriesProvider>
  );
};

export const LiveExample: StoryObj<LegendProps> = {
  render: TemplateComponent,
  parameters: {
    chromatic: {
      disableSnapshot: true,
    },
  },
};

export const CustomFormat: StoryObj<LegendProps> = {
  render: TemplateComponent,
  args: {
    seriesNameFormatter: (name: SeriesName) => {
      return (
        <div
          className={css`
            display: flex;
            align-items: center;
            gap: ${spacing[100]}px;
          `}
        >
          <Icon glyph="Secondary" />
          <span>{name}</span>
        </div>
      );
    },
  },
  parameters: {
    chromatic: {
      disableSnapshot: true,
    },
  },
};

const snapshotStoryExcludedControlParams = [
  ...defaultExcludedControls,
  'darkMode',
  'showSelectAll',
];

export const LightMode: StoryObj<LegendProps> = {
  render: TemplateComponent,
  args: {
    darkMode: false,
  },
  parameters: {
    controls: {
      exclude: snapshotStoryExcludedControlParams,
    },
  },
};

export const DarkMode: StoryObj<LegendProps> = {
  render: TemplateComponent,
  args: {
    darkMode: true,
  },
  parameters: {
    controls: {
      exclude: snapshotStoryExcludedControlParams,
    },
  },
};
