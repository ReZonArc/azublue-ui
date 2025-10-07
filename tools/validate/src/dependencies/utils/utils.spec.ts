import {
  isDependencyOnlyUsedInTestFile,
  isDependencyUsedInSourceFile,
  sortDependenciesByUsage,
} from '.';

/** */
describe('tools/validate/utils', () => {
  /** */
  describe('isDependencyUsedInSourceFile', () => {
    test('is used in source file', () => {
      expect(
        isDependencyUsedInSourceFile('@azublue-ui/lib', {
          '@azublue-ui/lib': ['sourceFile.tsx', 'test.spec.tsx'],
        }),
      ).toBeTruthy();
    });

    test('is not used in source file', () => {
      expect(
        isDependencyUsedInSourceFile('@azublue-ui/button', {
          '@azublue-ui/button': ['tests.spec.tsx'],
        }),
      ).toBeFalsy();
    });
  });

  /** */
  describe('isDependencyOnlyUsedInTestFile', () => {
    test('is used in source file', () => {
      expect(
        isDependencyOnlyUsedInTestFile('@azublue-ui/lib', {
          '@azublue-ui/lib': ['sourceFile.tsx', 'test.spec.tsx'],
        }),
      ).toBeFalsy();
    });

    test('is not used in source file', () => {
      expect(
        isDependencyOnlyUsedInTestFile('@azublue-ui/button', {
          '@azublue-ui/button': ['tests.spec.tsx'],
        }),
      ).toBeTruthy();
    });
  });

  /** */
  describe('sortDependenciesByUsage', () => {
    const depsRecord = {
      '@azublue-ui/lib': ['someFile.ts'],
      '@azublue-ui/palette': ['otherFile.tsx', 'test.spec.ts'],
      '@azublue-ui/typography': ['test.spec.ts'],
      '@azublue-ui/tokens': ['component.stories.tsx'],
    };
    const pkgName = 'test-package';

    test('', () => {
      const { dependencies, devDependencies } = sortDependenciesByUsage(
        depsRecord,
        pkgName,
      );

      expect(dependencies).toEqual(
        expect.arrayContaining([
          '@azublue-ui/lib',
          '@azublue-ui/palette',
        ]),
      );

      expect(devDependencies).toEqual(
        expect.arrayContaining([
          '@azublue-ui/typography',
          '@azublue-ui/tokens',
        ]),
      );
    });
  });
});
