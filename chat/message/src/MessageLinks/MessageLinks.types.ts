import React from 'react';
import { type RichLinkProps } from '@az-chat/rich-links';

import { DarkModeProps } from '@azublue-ui/lib';

export interface MessageLinksProps
  extends DarkModeProps,
    Omit<React.ComponentProps<'div'>, 'children'> {
  /**
   * The text to display as the heading of the links section.
   */
  headingText?: string;

  /**
   * A callback function that is called when any link is clicked.
   */
  onLinkClick?: RichLinkProps['onLinkClick'];

  /**
   * An list of link data to render in the links section.
   */
  links: Array<RichLinkProps>;
}
