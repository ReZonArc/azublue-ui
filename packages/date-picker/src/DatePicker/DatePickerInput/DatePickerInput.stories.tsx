import React from 'react';
import { StoryMetaType } from '@az-tools/storybook-utils';
import { StoryFn } from '@storybook/react';

import { SupportedLocales } from '@azublue-ui/date-utils';
import AzuBlueProvider from '@azublue-ui/leafygreen-provider';
import { Size } from '@azublue-ui/tokens';

import {
  SharedDatePickerContextProps,
  SharedDatePickerProvider,
} from '../../shared/context';
import { getProviderPropsFromStoryContext } from '../../shared/testutils';
import { DatePickerProps } from '../DatePicker.types';
import {
  DatePickerContextProps,
  DatePickerProvider,
} from '../DatePickerContext';

import { DatePickerInput } from './DatePickerInput';

const ProviderWrapper = (Story: StoryFn, ctx: any) => {
  const { leafyGreenProviderProps, datePickerProviderProps, storyProps } =
    getProviderPropsFromStoryContext<DatePickerProps>(ctx?.args);

  return (
    <AzuBlueProvider {...leafyGreenProviderProps}>
      <SharedDatePickerProvider {...datePickerProviderProps}>
        <DatePickerProvider value={storyProps.value} setValue={() => {}}>
          <Story {...storyProps} />
        </DatePickerProvider>
      </SharedDatePickerProvider>
    </AzuBlueProvider>
  );
};

const meta: StoryMetaType<
  typeof DatePickerInput,
  DatePickerContextProps & SharedDatePickerContextProps
> = {
  title: 'Components/Inputs/DatePicker/DatePicker/DatePickerInput',
  component: DatePickerInput,
  decorators: [ProviderWrapper],
  parameters: {
    default: null,
    controls: {
      exclude: ['segmentRefs', 'onChange', 'onSegmentChange', 'onClick'],
    },
    generate: {
      combineArgs: {
        darkMode: [false, true],
        value: [null, new Date('1993-12-26')],
        locale: [...Object.values(SupportedLocales)],
        size: Object.values(Size),
      },
      decorator: ProviderWrapper,
    },
  },
  args: {
    label: 'Label',
    locale: SupportedLocales.en_GB,
    timeZone: 'Europe/London',
  },
  argTypes: {
    value: { control: 'date' },
  },
};

export default meta;

export const Basic: StoryFn<DatePickerProps> = () => <DatePickerInput />;

Basic.parameters = {
  chromatic: { disableSnapshot: true },
};

export const Generated: StoryFn<DatePickerProps> = () => <></>;
