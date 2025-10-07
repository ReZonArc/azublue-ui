import React from 'react';

import { DarkModeProps } from '@azublue-ui/lib';
import { BaseFontSize } from '@azublue-ui/tokens';

export interface PageLoaderProps
  extends DarkModeProps,
    React.ComponentProps<'div'> {
  /**
   * Description text
   */
  description?: string;

  /**
   * The base font size of the description text.
   */
  baseFontSize?: BaseFontSize;
}
