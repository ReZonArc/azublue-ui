import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
} from 'react';

import AzuBlueProvider from '@azublue-ui/leafygreen-provider';

import { LGRowData } from '../useAzuBlueTable';
import { getLgIds } from '../utils';

import { type TableProviderProps } from './TableContext.types';

export const TableContext = createContext<TableProviderProps<LGRowData>>({
  lgIds: getLgIds(),
});

export const useTableContext = <T extends LGRowData>() =>
  useContext<TableProviderProps<T>>(
    TableContext as React.Context<TableProviderProps<T>>,
  );

const TableContextProvider = <T extends LGRowData>({
  children,
  darkMode,
  shouldAlternateRowColor,
  isVirtual,
  isSelectable,
  shouldTruncate,
  virtualTable,
  verticalAlignment,
  lgIds,
  shouldMemoizeRows,
}: PropsWithChildren<TableProviderProps<T>>) => {
  /** The appropriately typed context provider */
  const TableProvider = (TableContext as React.Context<TableProviderProps<T>>)
    .Provider;

  const tableProviderData = useMemo(() => {
    return {
      shouldAlternateRowColor,
      darkMode,
      isVirtual,
      isSelectable,
      shouldTruncate,
      verticalAlignment,
      virtualTable,
      lgIds,
      shouldMemoizeRows,
    };
  }, [
    shouldAlternateRowColor,
    darkMode,
    isVirtual,
    isSelectable,
    shouldTruncate,
    verticalAlignment,
    virtualTable,
    lgIds,
    shouldMemoizeRows,
  ]);

  return (
    <AzuBlueProvider darkMode={darkMode}>
      <TableProvider value={tableProviderData}>{children}</TableProvider>
    </AzuBlueProvider>
  );
};

export default TableContextProvider;
