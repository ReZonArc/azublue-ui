import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
} from 'react';

import AzuBlueProvider from '@azublue-ui/leafygreen-provider';

import { getLgIds } from '../utils';

import { ToolbarProviderProps } from './ToolbarContext.types';

export const ToolbarContext = createContext<ToolbarProviderProps>({
  focusedIndex: undefined,
  shouldFocus: false,
  lgIds: getLgIds(),
  handleOnIconButtonClick: () => {},
});

export const useToolbarContext = () =>
  useContext<ToolbarProviderProps>(
    ToolbarContext as React.Context<ToolbarProviderProps>,
  );

export const ToolbarContextProvider = ({
  children,
  focusedIndex,
  shouldFocus,
  lgIds,
  handleOnIconButtonClick,
  darkMode = false,
}: PropsWithChildren<ToolbarProviderProps>) => {
  const ToolbarProvider = (
    ToolbarContext as React.Context<ToolbarProviderProps>
  ).Provider;

  const toolbarProviderData = useMemo(() => {
    return {
      focusedIndex,
      shouldFocus,
      lgIds,
      handleOnIconButtonClick,
    };
  }, [focusedIndex, shouldFocus, lgIds, handleOnIconButtonClick]);

  return (
    <AzuBlueProvider darkMode={darkMode}>
      <ToolbarProvider value={toolbarProviderData}>{children}</ToolbarProvider>
    </AzuBlueProvider>
  );
};
