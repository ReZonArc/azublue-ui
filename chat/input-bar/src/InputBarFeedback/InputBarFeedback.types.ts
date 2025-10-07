import React from 'react';

import { DarkModeProps } from '@azublue-ui/lib';

import { SharedInputBarProps } from '../shared.types';

export interface InputBarFeedbackProps
  extends DarkModeProps,
    React.ComponentProps<'div'>,
    SharedInputBarProps {}
