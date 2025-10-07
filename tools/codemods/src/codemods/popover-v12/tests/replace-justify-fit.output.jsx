import React from 'react';

import { DatePicker as LGDatePicker } from '@azublue-ui/date-picker';
import { InfoSprinkle } from '@azublue-ui/info-sprinkle';
import InlineDefinition from '@azublue-ui/inline-definition';
import { Menu } from '@azublue-ui/menu';
import Popover from '@azublue-ui/popover';
import LeafyGreenTooltip from '@azublue-ui/tooltip';

export const App = () => {
  return (
    <>
      <LGDatePicker justify="middle" />
      <InfoSprinkle justify="middle" />
      <InlineDefinition justify="middle" />
      <Menu justify="middle" renderMode="top-layer" />
      <Popover justify="middle" renderMode="top-layer" />
      <LeafyGreenTooltip justify="middle" renderMode="top-layer" />
    </>
  );
};
