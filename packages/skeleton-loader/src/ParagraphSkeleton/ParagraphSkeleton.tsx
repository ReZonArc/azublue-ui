import React from 'react';

import { cx } from '@azublue-ui/emotion';
import AzuBlueProvider, {
  useDarkMode,
} from '@azublue-ui/leafygreen-provider';

import { Size, Skeleton } from '..';

import {
  headerStyles,
  lastLineStyles,
  lineStyles,
  rootStyles,
} from './ParagraphSkeleton.styles';
import { ParagraphSkeletonProps } from '.';

export function ParagraphSkeleton({
  darkMode: darkModeProp,
  enableAnimations,
  withHeader = false,
  className,
  ...rest
}: ParagraphSkeletonProps) {
  const { darkMode } = useDarkMode(darkModeProp);
  return (
    <AzuBlueProvider darkMode={darkMode}>
      <div {...rest} className={cx(rootStyles, className)} aria-busy>
        {withHeader && (
          <Skeleton
            enableAnimations={enableAnimations}
            className={headerStyles}
            data-testid="lg-paragraph-skeleton-header"
          />
        )}
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
          className={lastLineStyles}
        />
      </div>
    </AzuBlueProvider>
  );
}

ParagraphSkeleton.displayName = 'ParagraphSkeleton';
