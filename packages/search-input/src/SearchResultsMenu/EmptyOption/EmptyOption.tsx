import React from 'react';

import { cx } from '@azublue-ui/emotion';
import { InputOption } from '@azublue-ui/input-option';
import { useDarkMode } from '@azublue-ui/leafygreen-provider';

import {
  emptyOptionStyles,
  emptyOptionThemeStyles,
} from './EmptyOption.styles';

export const EmptyOption = () => {
  const { theme } = useDarkMode();

  return (
    <InputOption
      aria-label="No results found"
      isInteractive={false}
      className={cx(emptyOptionStyles, emptyOptionThemeStyles[theme])}
    >
      <span>No results found</span>
    </InputOption>
  );
};
