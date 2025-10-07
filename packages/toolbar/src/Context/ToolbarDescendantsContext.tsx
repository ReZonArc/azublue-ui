import {
  createDescendantsContext,
  useDescendantsContext,
} from '@azublue-ui/descendants';

export const ToolbarDescendantsContext =
  createDescendantsContext<HTMLButtonElement>('ToolbarDescendantsContext');

export function useToolbarDescendantsContext() {
  return useDescendantsContext(ToolbarDescendantsContext);
}
