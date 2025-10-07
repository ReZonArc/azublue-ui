import React from 'react';

import { DarkModeProps } from '@azublue-ui/lib';

import { SharedSkeletonProps } from '../Skeleton/Skeleton.types';

export interface FormSkeletonProps
  extends SharedSkeletonProps,
    DarkModeProps,
    React.ComponentPropsWithoutRef<'div'> {}
