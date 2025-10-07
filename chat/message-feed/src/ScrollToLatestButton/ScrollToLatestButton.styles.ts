import { css } from '@azublue-ui/emotion';
import { borderRadius, spacing } from '@azublue-ui/tokens';

export const scrollButtonContainerStyles = css`
  position: absolute;
  bottom: ${spacing[400]}px;
`;

export const scrollButtonStyles = css`
  box-shadow: 0 ${spacing[50]}px ${spacing[100]}px rgba(0, 0, 0, 0.2);
  border-radius: ${borderRadius[400]}px;
`;
