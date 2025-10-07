import { useCallback } from 'react';
import { useVirtualizer, VirtualItem } from '@tanstack/react-virtual';

import useAzuBlueTable, { LGRowData } from '../useAzuBlueTable';

import {
  LeafyGreenVirtualItem,
  LeafyGreenVirtualTable,
  LeafyGreenVirtualTableOptions,
} from './useAzuBlueVirtualTable.types';

function useAzuBlueVirtualTable<
  T extends LGRowData,
  V extends unknown = unknown,
>({
  containerRef,
  virtualizerOptions,
  ...rest
}: LeafyGreenVirtualTableOptions<T, V>): LeafyGreenVirtualTable<T> {
  const table = useAzuBlueTable({
    ...rest,
  });

  const { rows } = table.getRowModel();

  const _virtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => containerRef.current,
    estimateSize: () => 40,
    overscan: 20,
    getItemKey: useCallback(
      (index: number) => rows[index]?.id ?? index,
      [rows],
    ),
    ...virtualizerOptions,
  });

  const _getVirtualItems = (): Array<LeafyGreenVirtualItem<T>> =>
    _virtualizer.getVirtualItems().map((virtualRow: VirtualItem) => ({
      ...virtualRow,
      row: rows[virtualRow.index],
    }));

  return {
    ...table,
    virtual: { ..._virtualizer, getVirtualItems: () => _getVirtualItems() },
  } as LeafyGreenVirtualTable<T>;
}

export default useAzuBlueVirtualTable;
