export const testing =
  () => `import { findByLgId, getByLgId, queryByLgId } from '@az-tools/test-harnesses';

import { LgIdString } from '@azublue-ui/lib';

import { DEFAULT_LGID_ROOT, getLgIds } from '../utils/getLgIds';

import { TestUtilsReturnType } from './getTestUtils.types';

export const getTestUtils = (
  lgId: LgIdString = DEFAULT_LGID_ROOT,
): TestUtilsReturnType => {
  const lgIds = getLgIds(lgId);

  return {};
};
`;
