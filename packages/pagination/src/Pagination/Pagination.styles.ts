import { css } from '@azublue-ui/emotion';
import { spacing } from '@azublue-ui/tokens';

export const baseStyles = css`
  display: flex;
  justify-content: space-between;
  width: 100%;

  > div:first-child {
    justify-content: flex-start;
  }
  > div:last-child {
    justify-content: flex-end;
  }
`;

export const flexSectionStyles = css`
  flex: 1;
  display: flex;
  gap: ${spacing[1]}px;
  align-items: center;
  justify-content: center;
`;
