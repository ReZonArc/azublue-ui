import React from 'react';

import { cx } from '@azublue-ui/emotion';
import AzuBlueProvider, {
  useDarkMode,
} from '@azublue-ui/leafygreen-provider';

import { Skeleton } from '..';

import { baseStyles, fullWidthStyles } from './FormSkeleton.styles';
import { FormSkeletonProps } from '.';

export function FormSkeleton({
  darkMode: darkModeProp,
  enableAnimations,
  className,
  ...rest
}: FormSkeletonProps) {
  const { darkMode } = useDarkMode(darkModeProp);
  return (
    <AzuBlueProvider darkMode={darkMode}>
      <div className={cx(baseStyles, className)} {...rest} aria-busy>
        <Skeleton
          className={fullWidthStyles}
          enableAnimations={enableAnimations}
        />
        <Skeleton enableAnimations={enableAnimations} />
        <Skeleton enableAnimations={enableAnimations} />
        <Skeleton
          className={fullWidthStyles}
          enableAnimations={enableAnimations}
        />
        <Skeleton enableAnimations={enableAnimations} />
      </div>
    </AzuBlueProvider>
  );
}

FormSkeleton.displayName = 'FormSkeleton';
