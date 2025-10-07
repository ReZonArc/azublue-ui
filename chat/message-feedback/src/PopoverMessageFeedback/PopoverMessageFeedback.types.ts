import { DarkModeProps } from '@azublue-ui/lib';
import { PopoverProps } from '@azublue-ui/popover';

import { InlineMessageFeedbackProps } from '../InlineMessageFeedback';

export type PopoverMessageFeedbackProps = DarkModeProps &
  Omit<
    InlineMessageFeedbackProps,
    'errorMessage' | 'state' | 'submittedMessage'
  > &
  Omit<PopoverProps, 'children'> & {
    /**
     * Number that controls the z-index of the popover
     */
    popoverZIndex?: number;
  };
