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
      <LGDatePicker justify="fit" />
      <InfoSprinkle justify="fit" />
      <InlineDefinition justify="fit" />
      <Menu justify="fit" renderMode="top-layer" />
      <Popover justify="fit" renderMode="top-layer" />
      <LeafyGreenTooltip justify="fit" renderMode="top-layer" />
    </>
  );
};
