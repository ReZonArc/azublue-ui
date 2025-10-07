import type { Collection } from 'jscodeshift';
import type core from 'jscodeshift';

import { AzuBluePackage } from '../../types';

export interface GetImportSpecifiersForDeclarationType {
  /**
   *  A reference to the jscodeshift library
   */
  j: core.JSCodeshift;

  /**
   *  The source file to transform
   */
  source: Collection<any>;

  /**
   *  The package name to check for specifiers to target
   */
  packageName: AzuBluePackage;

  /**
   * The map of package name to specifier names to look for
   */
  packageSpecifiersMap: Partial<Record<AzuBluePackage, string>>;
}

/**
 * Gets all components to transform for a given package name, including if aliased.
 *
 * e.g:
 * Source file:
 *
 * ```typescript
 * import { Option, Select as LGSelect, Size } from '@azublue-ui/select';
 * ```
 *
 * | packageName | packageSpecifiersMap | specifierNames |
 * |-------------|------------------------|-----------------|
 * | '@azublue-ui/select' | { '@azublue-ui/select': 'Select' } | ['LGSelect'] |
 * | '@azublue-ui/select' | { '@azublue-ui/select': 'Option' } | ['Option'] |
 * | '@azublue-ui/select' | { '@azublue-ui/select': 'Size' } | ['Size'] |
 */
export function getImportSpecifiersForDeclaration({
  j,
  source,
  packageName,
  packageSpecifiersMap,
}: GetImportSpecifiersForDeclarationType) {
  const specifierNames: Array<string> = [];

  /**
   * Look for the import declaration for the given package name.
   */
  const matchingImportDeclaration = source
    .find(j.ImportDeclaration)
    .filter(path => path.node.source.value === packageName);

  /**
   * If no matching import declaration is found, return empty array.
   */
  if (matchingImportDeclaration.length === 0) {
    return specifierNames;
  }

  /**
   * Look for default import declarations for the given package name.
   * This will also apply if the default import is aliased.
   */
  matchingImportDeclaration.find(j.ImportDefaultSpecifier).forEach(path => {
    if (!path.node.local) {
      return;
    }

    specifierNames.push(path.node.local.name);
  });

  /**
   * Look for named import declarations for the given package name.
   */
  const namedExportToLookFor = packageSpecifiersMap[packageName];
  matchingImportDeclaration.find(j.ImportSpecifier).forEach(path => {
    /**
     * If the named import does not match the component to look for, keep checking the next import.
     */
    const matchesComponentImport =
      path.node.imported.name === namedExportToLookFor;

    if (!matchesComponentImport) {
      return;
    }

    /**
     * If the named import is aliased, use the alias name.
     */
    specifierNames.push(
      path.node.local ? path.node.local.name : namedExportToLookFor,
    );
  });

  return specifierNames;
}
