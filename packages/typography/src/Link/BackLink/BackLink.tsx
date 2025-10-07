import React from 'react';

import { cx } from '@azublue-ui/emotion';
import ArrowLeftIcon from '@azublue-ui/icon/dist/ArrowLeft';
import { useDarkMode } from '@azublue-ui/leafygreen-provider';
import {
  InferredPolymorphic,
  useInferredPolymorphic,
} from '@azublue-ui/polymorphic';

import { useUpdatedBaseFontSize } from '../../utils/useUpdatedBaseFontSize';
import {
  anchorClassName,
  linkModeStyles,
  linkScaleStyles,
  linkStyles,
} from '../shared.styles';

import { backLinkBaseStyles } from './BackLink.styles';
import { BaseBackLinkProps } from './BackLink.types';

const BackLink = InferredPolymorphic<BaseBackLinkProps, 'span'>(
  (
    {
      children,
      className,
      baseFontSize: baseFontSizeOverride,
      darkMode: darkModeProp,
      as,
      ...rest
    },
    fwdRef,
  ) => {
    const { theme } = useDarkMode(darkModeProp);
    const baseFontSize = useUpdatedBaseFontSize(baseFontSizeOverride);
    const { Component } = useInferredPolymorphic(as, rest, 'span');

    return (
      <Component
        className={cx(
          anchorClassName,
          linkStyles,
          linkScaleStyles(baseFontSize),
          linkModeStyles[theme],
          backLinkBaseStyles,
          className,
        )}
        ref={fwdRef}
        {...rest}
      >
        <ArrowLeftIcon role="presentation" />

        {children}
      </Component>
    );
  },
);

export default BackLink;
