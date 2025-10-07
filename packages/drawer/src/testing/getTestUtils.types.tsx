import { GetTestUtilsReturnType as GetButtonTestUtilsReturnType } from '@azublue-ui/button/testing';
import { TestUtilsReturnType as ToolbarTestUtilsReturnType } from '@azublue-ui/toolbar/testing';

export interface GetTestUtilsReturnType<T extends HTMLElement> {
  findDrawer: () => Promise<T>;
  getDrawer: () => T;
  queryDrawer: () => T | null;
  getCloseButtonUtils: () => GetButtonTestUtilsReturnType<HTMLButtonElement>;
  isOpen: () => boolean;
  getToolbarTestUtils: () => ToolbarTestUtilsReturnType;
}
