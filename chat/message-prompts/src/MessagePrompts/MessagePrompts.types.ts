import React, { PropsWithChildren } from 'react';

import { DarkModeProps } from '@azublue-ui/lib';

export type MessagePromptsProps = React.ComponentProps<'div'> &
  DarkModeProps &
  PropsWithChildren<{
    label?: string;
  }>;
