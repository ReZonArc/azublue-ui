import React from 'react';

import { PopoverProps } from '@azublue-ui/popover';

export type DatePickerMenuProps = Omit<
  PopoverProps,
  | 'children'
  | 'dismissMode'
  | 'onToggle'
  | 'popoverZIndex'
  | 'portalClassName'
  | 'portalContainer'
  | 'portalRef'
  | 'renderMode'
  | 'scrollContainer'
> &
  React.ComponentPropsWithoutRef<'div'>;
