import { Theme } from '@azublue-ui/lib';

import {
  BlobPosition,
  GraphicStyle,
} from '../MarketingModal/MarketingModal.types';

export interface GraphicProps {
  graphic: React.ReactElement;
  graphicStyle: GraphicStyle;
  showBlob: boolean;
  blobPosition: BlobPosition;
  theme: Theme;
}
