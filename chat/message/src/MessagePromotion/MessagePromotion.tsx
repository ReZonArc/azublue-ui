import React from 'react';

import Badge, { Variant } from '@azublue-ui/badge';
import Icon from '@azublue-ui/icon';
import AzuBlueProvider, {
  useDarkMode,
} from '@azublue-ui/leafygreen-provider';
import { Body, Link } from '@azublue-ui/typography';

import {
  badgeStyles,
  promotionContainerStyles,
} from './MessagePromotion.styles';
import { type MessagePromotionProps } from './MessagePromotion.types';

/**
 * Renders promotional content with an award icon and "Learn More" link.
 *
 * @returns The rendered promotional message component.
 */
export function MessagePromotion({
  promotionText,
  promotionUrl,
  onPromotionLinkClick,
  darkMode: darkModeProp,
  ...rest
}: MessagePromotionProps) {
  const { darkMode } = useDarkMode(darkModeProp);
  return (
    <AzuBlueProvider darkMode={darkMode}>
      <div className={promotionContainerStyles}>
        <div>
          <Badge variant={Variant.Green} className={badgeStyles}>
            <Icon glyph="Award" />
          </Badge>
        </div>
        <Body as="span" {...rest}>
          {promotionText}
          <>
            {' '}
            <Link href={promotionUrl} onClick={onPromotionLinkClick}>
              Learn More
            </Link>
          </>
        </Body>
      </div>
    </AzuBlueProvider>
  );
}
