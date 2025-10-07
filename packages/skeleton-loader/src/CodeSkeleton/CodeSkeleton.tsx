import React from 'react';

import { cx } from '@azublue-ui/emotion';
import AzuBlueProvider, {
  useDarkMode,
} from '@azublue-ui/leafygreen-provider';

import { Size, Skeleton } from '..';

import { lineStyles, rootStyles } from './CodeSkeleton.styles';
import { CodeSkeletonProps } from '.';

export function CodeSkeleton({
  darkMode: darkModeProp,
  enableAnimations,
  className,
  ...rest
}: CodeSkeletonProps) {
  const { darkMode } = useDarkMode(darkModeProp);
  return (
    <AzuBlueProvider darkMode={darkMode}>
      <div {...rest} className={cx(rootStyles, className)} aria-busy>
        <Skeleton
          enableAnimations={enableAnimations}
          size={Size.Small}
          className={lineStyles}
        />
        <Skeleton
          enableAnimations={enableAnimations}
          size={Size.Small}
          className={lineStyles}
        />
        <Skeleton
          enableAnimations={enableAnimations}
          size={Size.Small}
          className={lineStyles}
        />
      </div>
    </AzuBlueProvider>
  );
}

CodeSkeleton.displayName = 'CodeSkeleton';
