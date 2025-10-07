import type { API, FileInfo, Options } from 'jscodeshift';

import { MigrateOptions } from '../..';
import { MIGRATOR_ERROR } from '../../constants';
import { AzuBluePackage } from '../../types';
import { getImportSpecifiersForDeclaration } from '../../utils/imports';
import { getJSXAttributes } from '../../utils/jsx';
import {
  addJSXAttributes,
  consolidateJSXAttributes,
  removeJSXAttributes,
  replaceJSXAttributes,
} from '../../utils/transformations';

const lgPackageComponentForPropConsolidationMap: Partial<
  Record<AzuBluePackage, string>
> = {
  [AzuBluePackage.Combobox]: 'Combobox',
  [AzuBluePackage.Menu]: 'Menu',
  [AzuBluePackage.Popover]: 'Popover',
  [AzuBluePackage.Select]: 'Select',
  [AzuBluePackage.SplitButton]: 'SplitButton',
  [AzuBluePackage.Tooltip]: 'Tooltip',
};

const lgPackageComponentForPropRemovalMap: Partial<Record<AzuBluePackage, string>> =
  {
    [AzuBluePackage.Code]: 'Code',
    [AzuBluePackage.Copyable]: 'Copyable',
    [AzuBluePackage.DatePicker]: 'DatePicker',
    [AzuBluePackage.GuideCue]: 'GuideCue',
    [AzuBluePackage.InfoSprinkle]: 'InfoSprinkle',
    [AzuBluePackage.InlineDefinition]: 'InlineDefinition',
    [AzuBluePackage.NumberInput]: 'NumberInput',
    [AzuBluePackage.SearchInput]: 'SearchInput',
  };

const lgPackageComponentForPropReplacementMap: Partial<
  Record<AzuBluePackage, string>
> = {
  [AzuBluePackage.DatePicker]: 'DatePicker',
  [AzuBluePackage.InfoSprinkle]: 'InfoSprinkle',
  [AzuBluePackage.InlineDefinition]: 'InlineDefinition',
  [AzuBluePackage.Menu]: 'Menu',
  [AzuBluePackage.Popover]: 'Popover',
  [AzuBluePackage.Tooltip]: 'Tooltip',
};

const defaultPackages: Array<AzuBluePackage> = [
  ...(Object.keys({
    ...lgPackageComponentForPropConsolidationMap,
    ...lgPackageComponentForPropRemovalMap,
    ...lgPackageComponentForPropReplacementMap,
  }) as Array<AzuBluePackage>),
];

const propNamesToRemove = [
  'popoverZIndex',
  'portalClassName',
  'portalContainer',
  'portalRef',
  'scrollContainer',
  'usePortal',
];

const componentPropsToRemoveMap: Record<string, Array<string>> = {
  [AzuBluePackage.Code]: propNamesToRemove.filter(
    propName => propName !== 'portalRef',
  ),
  [AzuBluePackage.Copyable]: ['shouldTooltipUsePortal'],
  [AzuBluePackage.DatePicker]: propNamesToRemove.filter(
    propName => propName !== 'usePortal',
  ),
  [AzuBluePackage.GuideCue]: propNamesToRemove.filter(
    propName => propName !== 'usePortal',
  ),
  [AzuBluePackage.InfoSprinkle]: propNamesToRemove,
  [AzuBluePackage.InlineDefinition]: propNamesToRemove,
  [AzuBluePackage.NumberInput]: propNamesToRemove,
  [AzuBluePackage.SearchInput]: propNamesToRemove.filter(
    propName => propName !== 'popoverZIndex',
  ),
};

/**
 * Transformer function that will transform the below packages by default. Consumers can
 * use the `--packages` flag to apply the codemod to a subset of these packages.
 *
 * It does the following:
 * 1. Adds an explicit `usePortal={true}` declaration if left undefined and consolidates
 *    the `usePortal` and `renderMode` props into a single `renderMode` prop for components
 *    in the following packages:
 * - `@azublue-ui/combobox`
 * - `@azublue-ui/menu`
 * - `@azublue-ui/popover`
 * - `@azublue-ui/select`
 * - `@azublue-ui/split-button`
 * - `@azublue-ui/tooltip`
 *
 * 2. Removes `popoverZIndex`, `portalClassName`, `portalContainer`, `portalRef`,
 *    `scrollContainer`, and `usePortal` props from the components in the following packages:
 * - `@azublue-ui/info-sprinkle`
 * - `@azublue-ui/inline-definition`
 * - `@azublue-ui/number-input`
 *
 * 3. Removes `popoverZIndex`, `portalClassName`, `portalContainer`, `portalRef`, and
 *    `scrollContainer` props from components in the following packages:
 * - `@azublue-ui/date-picker`
 * - `@azublue-ui/guide-cue`
 *
 * 4. Removes `popoverZIndex`, `portalClassName`, `portalContainer`, `scrollContainer`,
 *    and `usePortal` props from `Code` component in the `@azublue-ui/code` package
 *
 * 5. Removes `portalClassName`, `portalContainer`, `portalRef`, `scrollContainer`, and
 *    `usePortal` props from `SearchInput` component in the `@azublue-ui/search-input` package
 *
 * 6. Removes `shouldTooltipUsePortal` prop from the `Copyable` component in the `@azublue-ui/copyable` package
 *
 * 7. Replaces `justify="fit"` prop value with `justify="middle"` for components in the following packages:
 * - `@azublue-ui/date-picker`
 * - `@azublue-ui/info-sprinkle`
 * - `@azublue-ui/inline-definition`
 * - `@azublue-ui/menu`
 * - `@azublue-ui/popover`
 * - `@azublue-ui/tooltip`
 *
 * @param file the file to transform
 * @param jscodeshiftOptions an object containing at least a reference to the jscodeshift library
 * @param options an object containing options to pass to the transform function
 * @returns Either the modified file or the original file
 */
export default function transformer(
  file: FileInfo,
  { jscodeshift: j }: API,
  options: MigrateOptions & Options,
): string {
  const source = j(file.source);
  const providedPackages = options.packages;

  /**
   * If the `packages` option is provided, ensure that the provided packages are all valid.
   */
  if (providedPackages) {
    providedPackages.forEach(packageName => {
      if (!defaultPackages.includes(packageName)) {
        throw new Error(
          `Cannot run popover-v12 codemod on package: ${packageName}`,
        );
      }
    });
  }

  /**
   * By default, transform all components in the default packages. If the `packages` option is provided,
   * only transform the provided packages.
   */
  const packagesToCheck = providedPackages || defaultPackages;
  const packagesForPropConsolidation = packagesToCheck.filter(
    packageName => lgPackageComponentForPropConsolidationMap[packageName],
  );
  const packagesForPropRemoval = packagesToCheck.filter(
    packageName => lgPackageComponentForPropRemovalMap[packageName],
  );
  const packagesForPropReplacement = packagesToCheck.filter(
    packageName => lgPackageComponentForPropReplacementMap[packageName],
  );

  /**
   * This block handles transforming components that require prop consolidation.
   */
  packagesForPropConsolidation.forEach(packageName => {
    const componentsForPropConsolidation = getImportSpecifiersForDeclaration({
      j,
      source,
      packageName,
      packageSpecifiersMap: lgPackageComponentForPropConsolidationMap,
    });

    componentsForPropConsolidation.forEach(componentName => {
      const elements = source.findJSXElements(componentName);

      if (elements.length === 0) return;

      elements.forEach(element => {
        const attributes = getJSXAttributes(j, element, 'renderMode');

        if (attributes.length === 0) {
          addJSXAttributes({
            j,
            element,
            propName: 'usePortal',
            propValue: true,
            commentOverride: `${MIGRATOR_ERROR.manualAdd} prop: renderMode`,
          });
        }

        consolidateJSXAttributes({
          j,
          element,
          propToRemove: 'usePortal',
          propToUpdate: 'renderMode',
          propMapping: {
            false: 'inline',
            true: 'portal',
          },
          propToRemoveType: 'boolean',
        });
      });
    });
  });

  /**
   * This block handles transforming components that require prop removal.
   */
  packagesForPropRemoval.forEach(packageName => {
    const componentsForPropRemoval = getImportSpecifiersForDeclaration({
      j,
      source,
      packageName,
      packageSpecifiersMap: lgPackageComponentForPropRemovalMap,
    });

    componentsForPropRemoval.forEach(componentName => {
      const elements = source.findJSXElements(componentName);

      if (elements.length === 0) return;

      elements.forEach(element => {
        componentPropsToRemoveMap[packageName].forEach(propName => {
          removeJSXAttributes({
            j,
            element,
            propName,
          });
        });
      });
    });
  });

  /**
   * This block handles transforming components that require prop replacement.
   */
  packagesForPropReplacement.forEach(packageName => {
    const componentsForPropReplacement = getImportSpecifiersForDeclaration({
      j,
      source,
      packageName,
      packageSpecifiersMap: lgPackageComponentForPropReplacementMap,
    });

    componentsForPropReplacement.forEach(componentName => {
      const elements = source.findJSXElements(componentName);

      if (elements.length === 0) return;

      elements.forEach(element => {
        replaceJSXAttributes({
          j,
          element,
          propName: 'justify',
          newPropName: 'justify',
          newPropValue: {
            fit: 'middle',
          },
        });
      });
    });
  });

  return source.toSource();
}
