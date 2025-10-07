import React from 'react';

import { renderHook } from '@azublue-ui/testing-lib';

import useAzuBlueVirtualTable from './useAzuBlueVirtualTable';

describe('packages/table/useAzuBlueVirtualTable', () => {
  test('returns a table object', () => {
    const { result } = renderHook(() =>
      useAzuBlueVirtualTable({
        containerRef: React.createRef<HTMLDivElement>(),
        columns: [],
        data: [],
      }),
    );
    expect(typeof result.current).toBe('object');
  });

  // eslint-disable-next-line jest/no-disabled-tests
  test.skip('Typescript', () => {
    // @ts-expect-error - requires columns, data, containerRef
    useAzuBlueVirtualTable({});

    // @ts-expect-error - requires containerRef
    useAzuBlueVirtualTable({
      columns: [],
      data: [],
    });

    // containerRef, columns, data are necessary & sufficient options
    useAzuBlueVirtualTable({
      containerRef: React.createRef<HTMLDivElement>(),
      columns: [],
      data: [],
    });

    useAzuBlueVirtualTable({
      containerRef: React.createRef<HTMLDivElement>(),
      columns: [],
      data: [],
      virtualizerOptions: {},
    });
  });
});
