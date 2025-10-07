import React from 'react';

import { css } from '@azublue-ui/emotion';
import CheckmarkIcon from '@azublue-ui/icon/dist/Checkmark';
import EllipsisIcon from '@azublue-ui/icon/dist/Ellipsis';
import { fontWeights } from '@azublue-ui/tokens';
import { Overline } from '@azublue-ui/typography';

import { StepStates } from '../types';

import { StepIconProps } from './StepIcon.types';

export const StepIconGlyph = ({ state, children }: StepIconProps) => {
  if (state === StepStates.Completed) {
    return <CheckmarkIcon />;
  } else if (
    state === StepStates.UpcomingMultiple ||
    state === StepStates.CompletedMultiple
  ) {
    return <EllipsisIcon />;
  } else {
    // if Current (single) or Upcoming (single)
    return (
      <Overline
        className={css`
          font-weight: ${fontWeights.medium};
          color: inherit;
        `}
      >
        {children}
      </Overline>
    );
  }
};
