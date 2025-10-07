import { css, cx } from '@azublue-ui/emotion';
import { spacing } from '@azublue-ui/tokens';

const baseLegendStyles = css`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing[100]}px;
`;

export const getLegendStyles = ({ className }: { className?: string }) =>
  cx(baseLegendStyles, className);
