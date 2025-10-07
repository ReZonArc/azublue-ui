import { css, cx } from '@azublue-ui/emotion';
import { Theme } from '@azublue-ui/lib';
import {
  color,
  InteractionState,
  spacing,
  Variant,
} from '@azublue-ui/tokens';

const getBaseContainerStyles = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: ${spacing[150]}px;
  align-items: flex-start;
  color: ${color[theme].text[Variant.Primary][InteractionState.Default]};
`;

const senderStyles = css`
  align-items: flex-end;
`;

export const getContainerStyles = ({
  className,
  isSender,
  theme,
}: {
  className?: string;
  isSender: boolean;
  theme: Theme;
}) =>
  cx(
    getBaseContainerStyles(theme),
    {
      [senderStyles]: isSender,
    },
    className,
  );

export const avatarContainerStyles = css`
  display: flex;
  gap: ${spacing[150]}px;
`;
