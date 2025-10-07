import React from 'react';

import Button, { Size as ButtonSize } from '@azublue-ui/button';
import ArrowDownIcon from '@azublue-ui/icon/dist/ArrowDown';
import { useDarkMode } from '@azublue-ui/leafygreen-provider';

import {
  scrollButtonContainerStyles,
  scrollButtonStyles,
} from './ScrollToLatestButton.styles';
import { ScrollToLatestButtonProps } from './ScrollToLatestButton.types';

export const ScrollToLatestButton = ({
  darkMode: darkModeProp,
  onClick,
  visible,
}: ScrollToLatestButtonProps) => {
  const { darkMode } = useDarkMode(darkModeProp);

  if (!visible) {
    return null;
  }

  return (
    <div className={scrollButtonContainerStyles}>
      <Button
        aria-label="Scroll to latest message"
        className={scrollButtonStyles}
        darkMode={darkMode}
        onClick={onClick}
        rightGlyph={<ArrowDownIcon />}
        size={ButtonSize.Small}
      >
        Scroll to latest
      </Button>
    </div>
  );
};

ScrollToLatestButton.displayName = 'ScrollToLatestButton';
