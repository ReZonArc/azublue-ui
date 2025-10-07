import { DarkModeProps, LgIdProps } from '@azublue-ui/lib';
import { BaseFontSize } from '@azublue-ui/tokens';

export type CommonTypographyProps = DarkModeProps & LgIdProps;

export type ResponsiveTypographyProps = CommonTypographyProps & {
  baseFontSize?: BaseFontSize;
};
