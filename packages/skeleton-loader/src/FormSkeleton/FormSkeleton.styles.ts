import { css } from '@azublue-ui/emotion';
import { spacing } from '@azublue-ui/tokens';

export const baseStyles = css`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
  row-gap: ${spacing[3]}px;
`;

export const fullWidthStyles = css`
  grid-column-start: 1;
  grid-column-end: 3;
`;
