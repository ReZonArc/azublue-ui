import { DarkModeProps } from '@azublue-ui/lib';

import { MigrationContextType } from '../MigrationContext';
import { PortalContextValues } from '../PortalContext';
import { TypographyProviderProps } from '../TypographyContext';

export type AzuBlueProviderProps = {
  /**
   * Define a container HTMLElement for components that utilize the `Portal` component
   */
  popoverPortalContainer?: PortalContextValues['popover'];
} & TypographyProviderProps &
  DarkModeProps &
  MigrationContextType;
