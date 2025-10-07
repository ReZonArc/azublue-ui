import React from 'react';

import Card from '@azublue-ui/card';
import { cx } from '@azublue-ui/emotion';
import { useDarkMode } from '@azublue-ui/leafygreen-provider';

import { ParagraphSkeleton } from '..';

import { rootStyles } from './CardSkeleton.styles';
import { CardSkeletonProps } from '.';

export function CardSkeleton({
  darkMode: darkModeProp,
  enableAnimations,
  className,
  ...rest
}: CardSkeletonProps) {
  const { darkMode } = useDarkMode(darkModeProp);
  return (
    <Card
      {...rest}
      darkMode={darkMode}
      className={cx(rootStyles, className)}
      aria-busy
    >
      <ParagraphSkeleton
        withHeader
        enableAnimations={enableAnimations}
        darkMode={darkMode}
      />
    </Card>
  );
}

CardSkeleton.displayName = 'CardSkeleton';
