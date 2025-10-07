import { DynamicRefGetter } from '@azublue-ui/hooks';

import { DateSegment } from '../../types';

export type SegmentRefs = Record<
  DateSegment,
  ReturnType<DynamicRefGetter<HTMLInputElement>>
>;
