import { ComponentPropsWithoutRef } from 'react';

import { DarkModeProps, LgIdProps } from '@azublue-ui/lib';

export interface GalleryIndicatorProps
  extends ComponentPropsWithoutRef<'ul'>,
    DarkModeProps,
    LgIdProps {
  /**
   * The total number of dots to render
   */
  length: number;

  /**
   * The index of the active dot`
   */
  activeIndex: number;
}
