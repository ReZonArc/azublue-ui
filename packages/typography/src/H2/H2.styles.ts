import { css } from '@azublue-ui/emotion';
import { Theme } from '@azublue-ui/lib';
import { palette } from '@azublue-ui/palette';
import { fontFamilies, fontWeights } from '@azublue-ui/tokens';

export const h2Styles = css`
  font-size: 32px;
  line-height: 40px;
  font-weight: ${fontWeights.regular};
  font-family: ${fontFamilies.serif};
`;

export const h2Color: Record<Theme, string> = {
  [Theme.Light]: css`
    color: ${palette.green.dark2};
  `,
  [Theme.Dark]: css`
    color: ${palette.gray.light2};
  `,
};
