import { css } from '@azublue-ui/emotion';
import { Theme } from '@azublue-ui/lib';
import {
  color,
  InteractionState,
  spacing,
  Variant,
} from '@azublue-ui/tokens';

const CLOSE_BUTTON_SIZE = 16;

export const getHeaderStyles = (theme: Theme) => css`
  color: ${color[theme].text[Variant.InverseSecondary][
    InteractionState.Default
  ]};
  margin-bottom: ${spacing[100]}px;
  padding: ${spacing[150]}px ${spacing[150]}px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const closeButtonStyles = css`
  height: ${CLOSE_BUTTON_SIZE}px;
  width: ${CLOSE_BUTTON_SIZE}px;
`;

export const pinTooltipNoteStyles = css`
  display: flex;
  align-items: center;
  gap: ${spacing[50]}px;
`;
