import { DescendantsList } from '@azublue-ui/descendants';
import { isDefined } from '@azublue-ui/lib';

export const isDescendantsSet = (
  descendants?: DescendantsList<any>,
): boolean => {
  return isDefined(descendants) && descendants.length > 0;
};
