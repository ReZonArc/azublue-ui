import React from 'react';

import { cx } from '@azublue-ui/emotion';
import Icon from '@azublue-ui/icon';
import { useDarkMode } from '@azublue-ui/leafygreen-provider';
import { Body } from '@azublue-ui/typography';

import { badgeVariants, baseStyles } from './RichLinkBadge.styles';
import { type RichLinkBadgeProps } from './RichLinkBadge.types';

export const RichLinkBadge = ({
  darkMode: darkModeProp,
  glyph: glyphName,
  color = 'gray',
  label,
}: RichLinkBadgeProps) => {
  const { theme } = useDarkMode(darkModeProp);

  return (
    <div className={cx(baseStyles, badgeVariants[theme][color])}>
      {glyphName ? <Icon glyph={glyphName} /> : null}
      <Body>{label}</Body>
    </div>
  );
};
