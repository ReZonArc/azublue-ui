import type { API, FileInfo, Options } from 'jscodeshift';

import { MigrateOptions } from '../..';
import { AzuBluePackage } from '../../types';
import { hasNamedImport, mergeImportSpecifiers } from '../../utils/imports';

const lgPackageComponentMap: Partial<Record<AzuBluePackage, string>> = {
  [AzuBluePackage.Badge]: 'Badge',
  [AzuBluePackage.Button]: 'Button',
  [AzuBluePackage.Callout]: 'Callout',
  [AzuBluePackage.Card]: 'Card',
  [AzuBluePackage.Checkbox]: 'Checkbox',
  [AzuBluePackage.Code]: 'Code',
  [AzuBluePackage.ConfirmationModal]: 'ConfirmationModal',
  [AzuBluePackage.Copyable]: 'Copyable',
  [AzuBluePackage.ExpandableCard]: 'ExpandableCard',
  [AzuBluePackage.FormFooter]: 'FormFooter',
  [AzuBluePackage.Icon]: 'Icon',
  [AzuBluePackage.IconButton]: 'IconButton',
  [AzuBluePackage.InlineDefinition]: 'InlineDefinition',
  [AzuBluePackage.Logo]: 'Logo',
  [AzuBluePackage.MarketingModal]: 'MarketingModal',
  [AzuBluePackage.Modal]: 'Modal',
  [AzuBluePackage.Pagination]: 'Pagination',
  [AzuBluePackage.Portal]: 'Portal',
  [AzuBluePackage.Popover]: 'Popover',
  [AzuBluePackage.Stepper]: 'Stepper',
  [AzuBluePackage.TextArea]: 'TextArea',
  [AzuBluePackage.TextInput]: 'TextInput',
  [AzuBluePackage.Toggle]: 'Toggle',
  [AzuBluePackage.Tooltip]: 'Tooltip',
};

const defaultPackages: Array<AzuBluePackage> = [
  ...(Object.keys(lgPackageComponentMap) as Array<AzuBluePackage>),
];

/**
 * Transformer function that converts default imports to named imports for LeafyGreen UI components.
 *
 * ### Examples:
 * **Before:**
 * ```tsx
 * import Button, { Size } from '@azublue-ui/button';
 * import LGModal from '@azublue-ui/modal';
 * import Tooltip from '@azublue-ui/tooltip';
 * ```
 *
 * **After:**
 * ```tsx
 * import { Button, Size } from '@azublue-ui/button';
 * import { Modal as LGModal } from '@azublue-ui/modal';
 * import { Tooltip } from '@azublue-ui/tooltip';
 * ```
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
    providedPackages.forEach((packageName: string) => {
      if (!defaultPackages.includes(packageName as AzuBluePackage)) {
        throw new Error(
          `Cannot run named-exports codemod on package: ${packageName}`,
        );
      }
    });
  }

  /**
   * By default, transform all components in the default packages. If the `packages` option is provided,
   * only transform the provided packages.
   */
  const packagesToCheck = providedPackages || defaultPackages;

  /**
   * Process each package to convert default imports to named imports
   */
  packagesToCheck.forEach((packageName: AzuBluePackage) => {
    const componentName = lgPackageComponentMap[packageName];
    if (!componentName) return;

    // Find all import declarations for this package
    const importDeclarations = source
      .find(j.ImportDeclaration)
      .filter((path: any) => path.node.source.value === packageName);

    importDeclarations.forEach(importDeclaration => {
      // Check if named import already exists
      if (hasNamedImport(j, source, packageName, componentName)) {
        return; // Skip if named import already exists
      }

      // Find default import specifier
      const defaultSpecifiers = j(importDeclaration).find(
        j.ImportDefaultSpecifier,
      );

      if (defaultSpecifiers.length === 0) {
        return; // No default import found
      }

      const defaultImport = defaultSpecifiers.at(0).get();
      const alias = defaultImport.node.local?.name;

      // Merge default import with existing named imports
      mergeImportSpecifiers(j, importDeclaration, componentName, alias);
    });
  });

  return source.toSource();
}
