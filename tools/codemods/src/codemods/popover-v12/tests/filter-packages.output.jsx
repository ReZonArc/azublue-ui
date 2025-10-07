import React from 'react';

import { Combobox } from '@azublue-ui/combobox';
import { Menu } from '@azublue-ui/menu';
import Popover from '@azublue-ui/popover';
import { Select } from '@azublue-ui/select';
import Tooltip from '@azublue-ui/tooltip';

export const App = () => {
  return (
    <>
      <Combobox usePortal />
      <Menu usePortal />
      <Popover renderMode="inline" />
      <Select renderMode="portal" />
      <Tooltip usePortal={false} />
    </>
  );
};
