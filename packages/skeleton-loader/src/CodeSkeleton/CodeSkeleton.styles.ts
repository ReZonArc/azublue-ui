import { css } from '@azublue-ui/emotion';
import { spacing } from '@azublue-ui/tokens';

export const rootStyles = css`
  width: 100%;
  display: grid;
  row-gap: ${spacing[3]}px;
  grid-template-columns: 75px 1fr 75px;
`;

export const lineStyles = css`
  &:nth-child(even) {
    grid-column: 2 / -1;
  }

  &:nth-child(odd) {
    grid-column: 1 / span 2;
  }
`;
