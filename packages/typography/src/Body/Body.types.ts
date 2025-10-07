import { PolymorphicAs, PolymorphicProps } from '@azublue-ui/polymorphic';
import { FontWeight } from '@azublue-ui/tokens';

import { ResponsiveTypographyProps } from '../types';

export type BaseBodyProps = ResponsiveTypographyProps & {
  weight?: FontWeight;
};

// For external consumption only
export type BodyProps = PolymorphicProps<PolymorphicAs, BaseBodyProps>;
