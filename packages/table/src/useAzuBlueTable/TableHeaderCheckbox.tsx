import React from 'react';
import { Table } from '@tanstack/react-table';

import Checkbox from '@azublue-ui/checkbox';
import { cx } from '@azublue-ui/emotion';
import { useDarkMode } from '@azublue-ui/leafygreen-provider';

import { useRowContext } from '../Row/RowContext';
import { useTableContext } from '../TableContext';

import { disabledTableRowCheckStyles } from './useAzuBlueTable.styles';
import { LGRowData, LGTableDataType } from '.';

export const TableHeaderCheckbox = <T extends LGRowData>({
  table,
}: {
  table: Table<LGTableDataType<T>>;
}) => {
  const { theme } = useDarkMode();
  const { disabled: rowIsDisabled } = useRowContext();
  const { lgIds } = useTableContext();
  return (
    <Checkbox
      className={cx({
        [disabledTableRowCheckStyles[theme]]: rowIsDisabled,
      })}
      disabled={rowIsDisabled}
      checked={table.getIsAllRowsSelected()}
      indeterminate={table.getIsSomeRowsSelected()}
      onChange={table.getToggleAllRowsSelectedHandler()}
      aria-label="Select all rows"
      data-lgid={lgIds.selectAllCheckbox}
      data-testid={lgIds.selectAllCheckbox}
    />
  );
};
