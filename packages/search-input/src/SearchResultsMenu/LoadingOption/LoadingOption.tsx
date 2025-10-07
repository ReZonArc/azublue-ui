import React from 'react';

import RefreshIcon from '@azublue-ui/icon/dist/Refresh';
import { InputOption } from '@azublue-ui/input-option';
import { useDarkMode } from '@azublue-ui/leafygreen-provider';
import { palette } from '@azublue-ui/palette';

import { loadingOptionIcon, loadingOptionStyles } from './LoadingOption.styles';

export const LoadingOption = () => {
  const { darkMode } = useDarkMode();

  return (
    <InputOption
      data-testid="lg-search-input-loading-option"
      aria-label="Loading results"
      isInteractive={false}
      className={loadingOptionStyles}
    >
      <RefreshIcon
        color={darkMode ? palette.blue.light1 : palette.blue.base}
        className={loadingOptionIcon}
      />
      <span>Loading results</span>
    </InputOption>
  );
};
