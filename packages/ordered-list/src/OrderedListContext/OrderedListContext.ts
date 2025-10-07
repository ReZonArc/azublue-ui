import {
  createDescendantsContext,
  useDescendantsContext,
} from '@azublue-ui/descendants';

export const OrderedListContext =
  createDescendantsContext<HTMLLIElement>('OrderedListContext');

export function useOrderedListContext() {
  return useDescendantsContext(OrderedListContext);
}
