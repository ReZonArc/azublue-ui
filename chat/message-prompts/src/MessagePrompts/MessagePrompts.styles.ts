import { css } from '@azublue-ui/emotion';
import { Theme } from '@azublue-ui/lib';
import {
  color,
  InteractionState,
  spacing,
  transitionDuration,
  Variant,
} from '@azublue-ui/tokens';

const CONTAINER_MAX_WIDTH = 400;

export const containerStyles = css`
  max-width: ${CONTAINER_MAX_WIDTH}px;
  display: flex;
  flex-direction: column;
  gap: ${spacing[200]}px;
  align-items: flex-start;
`;

export const getLabelStyles = (theme: Theme) => css`
  color: ${color[theme].text[Variant.Secondary][InteractionState.Default]};
`;

export const childrenContainerStyles = css`
  transition: opacity ${transitionDuration.slower}ms ease-in;
  display: flex;
  flex-direction: column;
  gap: ${spacing[200]}px;
`;
