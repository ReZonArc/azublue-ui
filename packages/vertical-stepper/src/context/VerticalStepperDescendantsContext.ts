import {
  createDescendantsContext,
  useDescendantsContext,
} from '@azublue-ui/descendants';

export const VerticalStepperDescendantsContext =
  createDescendantsContext<HTMLLIElement>('VerticalStepperDescendantsContext');

export function useVerticalStepperDescendantsContext() {
  return useDescendantsContext(VerticalStepperDescendantsContext);
}
