import React from 'react';
import { TitleBarProps } from '@az-chat/title-bar';

import { DarkModeProps } from '@azublue-ui/lib';

export interface ChatWindowProps
  extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'>,
    DarkModeProps,
    Partial<TitleBarProps> {}
