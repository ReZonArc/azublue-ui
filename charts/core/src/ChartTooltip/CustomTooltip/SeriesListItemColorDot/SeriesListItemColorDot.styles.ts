import { css } from '@azublue-ui/emotion';
import { spacing } from '@azublue-ui/tokens';

import { SeriesListItemColorDotProps } from './SeriesListItemColorDot.types';

export const getColorDotStyle = (
  color: SeriesListItemColorDotProps['color'],
) => css`
  display: inline-block;
  margin-top: ${spacing[100]}px; // Bumping down slightly to align with text
  margin-right: ${spacing[100]}px;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background-color: ${color};
`;
