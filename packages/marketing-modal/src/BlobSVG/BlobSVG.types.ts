import { Theme } from '@azublue-ui/lib';

import { BlobPosition } from '../MarketingModal/MarketingModal.types';

export interface BlobSVGProps {
  blobPosition: BlobPosition;
  theme: Theme;
}

export type BlobSVGProperties = 'viewBox' | 'path' | 'styles';
