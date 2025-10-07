import React from 'react';

import CheckmarkWithCircle from '@azublue-ui/icon/dist/CheckmarkWithCircle';
import { useDarkMode } from '@azublue-ui/leafygreen-provider';
import { Body } from '@azublue-ui/typography';

import { InlineMessageFeedbackProps } from '..';

import {
  containerStyles,
  getIconFill,
  getTextStyles,
} from './SubmittedState.styles';

export const SubmittedState = ({
  submittedMessage,
}: Pick<InlineMessageFeedbackProps, 'submittedMessage'>) => {
  const { theme } = useDarkMode();

  return (
    <div className={containerStyles}>
      <CheckmarkWithCircle fill={getIconFill(theme)} />
      <Body className={getTextStyles(theme)}>{submittedMessage}</Body>
    </div>
  );
};
