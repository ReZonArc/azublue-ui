import { ComponentProps } from 'react';

import { Align, Justify, TooltipProps } from '@azublue-ui/tooltip';

export { Align, Justify };

type ModifiedTooltipProps = Omit<
  TooltipProps,
  | 'children'
  | 'dismissMode'
  | 'onClick'
  | 'popoverZIndex'
  | 'portalClassName'
  | 'portalContainer'
  | 'portalRef'
  | 'refEl'
  | 'renderMode'
  | 'scrollContainer'
  | 'spacing'
  | 'trigger'
  | 'triggerEvent'
>;

export interface InfoSprinkleProps extends ModifiedTooltipProps {
  /**
   * Trigger props, excludes `ref`
   */
  triggerProps?: Omit<ComponentProps<'button'>, 'ref'>;

  /**
   * Children of the InfoSprinkle
   */
  children: React.ReactNode;
}
