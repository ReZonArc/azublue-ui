import React from 'react';

import { DarkModeProps } from '@azublue-ui/lib';

export type ChatTriggerProps = DarkModeProps &
  React.ComponentProps<'button'> & {};
