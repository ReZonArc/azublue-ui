import React from 'react';

import { BaseInputOptionProps } from '@azublue-ui/input-option';
import { DarkModeProps } from '@azublue-ui/lib';

export type SuggestedPromptProps = DarkModeProps &
  Omit<BaseInputOptionProps, 'showWedge' | 'active' | 'isInteractive'> & {
    /**
     * The value of the result
     */
    children: React.ReactNode;

    /**
     * Callback fired when the option is clicked
     */
    onClick?: React.MouseEventHandler;
  };
