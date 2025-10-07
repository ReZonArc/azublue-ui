import React, { useContext } from 'react';

import { cx } from '@azublue-ui/emotion';
import { Theme } from '@azublue-ui/lib';

import { MenuContext } from '../MenuContext';

import {
  borderDarkInLightModeStyles,
  borderStyle,
  borderThemeStyle,
} from './MenuSeparator.styles';

interface MenuSeparatorProps {
  /**
   * className applied to `MenuSeparator` li
   */
  className?: string;
}

export function MenuSeparator({ className }: MenuSeparatorProps) {
  const { theme, renderDarkMenu } = useContext(MenuContext);
  return (
    <li
      role="separator"
      className={cx(
        borderStyle,
        borderThemeStyle[theme],
        {
          [borderDarkInLightModeStyles]:
            theme === Theme.Light && renderDarkMenu,
        },
        className,
      )}
    />
  );
}

MenuSeparator.displayName = 'MenuSeparator';

export default MenuSeparator;
