import React from 'react';

import CheckmarkWithCircleIcon from '@azublue-ui/icon/dist/CheckmarkWithCircle';
import ImportantWithCircleIcon from '@azublue-ui/icon/dist/ImportantWithCircle';
import InfoWithCircle from '@azublue-ui/icon/dist/InfoWithCircle';
import RefreshIcon from '@azublue-ui/icon/dist/Refresh';
import WarningIcon from '@azublue-ui/icon/dist/Warning';

import { Variant } from '../Toast.types';

export const variantIcons: Record<
  Variant,
  React.ComponentType<React.PropsWithChildren<any>>
> = {
  [Variant.Success]: CheckmarkWithCircleIcon,
  [Variant.Note]: InfoWithCircle,
  [Variant.Warning]: WarningIcon,
  [Variant.Important]: ImportantWithCircleIcon,
  [Variant.Progress]: RefreshIcon,
};
