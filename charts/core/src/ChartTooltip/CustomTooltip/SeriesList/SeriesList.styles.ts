import { css } from '@azublue-ui/emotion';
import { Theme } from '@azublue-ui/lib';
import {
  color,
  InteractionState,
  spacing,
  Variant,
} from '@azublue-ui/tokens';

const PINNED_SERIES_LIST_MAX_HEIGHT = 102;

export const getSeriesListStyles = ({
  theme,
  tooltipPinned,
}: {
  theme: Theme;
  tooltipPinned: boolean;
}) => css`
  all: unset;
  background-color: ${color[theme].background[Variant.InversePrimary][
    InteractionState.Default
  ]};
  overflow-y: auto;
  max-height: ${tooltipPinned ? `${PINNED_SERIES_LIST_MAX_HEIGHT}px` : 'none'};
  padding: 0 ${spacing[150]}px ${spacing[150]}px;
  display: grid;
  gap: ${spacing[100]}px;
`;
