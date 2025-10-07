import { BaseIconButtonProps } from '@azublue-ui/icon-button';

import { RowProps } from '../Row/Row.types';
import { LGRowData } from '../useAzuBlueTable';

/**
 * @internal
 */
export type ToggleExpandedIconProps = Pick<RowProps<LGRowData>, 'disabled'> &
  BaseIconButtonProps & {
    isExpanded: boolean;
    toggleExpanded: () => void;
  };
