import { ComponentPropsWithoutRef } from 'react';

import { DarkModeProps, LgIdProps } from '@azublue-ui/lib';
export interface ToolbarProps
  extends ComponentPropsWithoutRef<'div'>,
    DarkModeProps,
    LgIdProps {
  children: React.ReactNode;
}
