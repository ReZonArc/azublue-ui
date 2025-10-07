import { FormUtils } from '@az-tools/test-harnesses';

export interface GetTestUtilsReturnType<T extends HTMLElement> {
  findButton: () => Promise<T>;
  getButton: () => T;
  queryButton: () => T | null;
  isDisabled: FormUtils['isDisabled'];
}
