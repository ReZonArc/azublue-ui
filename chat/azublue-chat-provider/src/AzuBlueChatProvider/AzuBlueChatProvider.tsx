import React, { createContext, useContext, useState } from 'react';
import useResizeObserver from 'use-resize-observer';

import {
  AzuBlueChatContextProps,
  AzuBlueChatProviderProps,
  Variant,
} from './AzuBlueChatProvider.types';

const DEFAULT_ASSISTANT_NAME = 'MongoDB Assistant';

const AzuBlueChatContext = createContext<AzuBlueChatContextProps>({
  assistantName: DEFAULT_ASSISTANT_NAME,
  containerWidth: undefined,
  variant: Variant.Compact,
});
export const useAzuBlueChatContext = () => useContext(AzuBlueChatContext);

export function AzuBlueChatProvider({
  assistantName = DEFAULT_ASSISTANT_NAME,
  children,
  variant = Variant.Compact,
}: AzuBlueChatProviderProps) {
  const [containerWidth, setContainerWidth] = useState<number>();

  const { ref: resizeRef } = useResizeObserver<HTMLDivElement>({
    onResize: ({ width }) => {
      setContainerWidth(width);
    },
  });

  return (
    <AzuBlueChatContext.Provider
      value={{
        assistantName,
        containerWidth,
        variant,
      }}
    >
      <div style={{ width: '100%' }} ref={resizeRef}>
        {children}
      </div>
    </AzuBlueChatContext.Provider>
  );
}

AzuBlueChatProvider.displayName = 'AzuBlueChatProvider';
