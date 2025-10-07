import {
  getRippleGlobalNamespace,
  ModuleType,
} from './getRippleGlobalNamespace';

type GlobalSpecType = Window &
  typeof globalThis & {
    __LEAFYGREEN_UTILS__?: {
      modules: ModuleType & {
        '@azublue-ui/button': {
          present: boolean;
        };
      };
    };
  };

const lgNamespace = '__LEAFYGREEN_UTILS__';

describe('getRippleGlobalNamespace', () => {
  describe(`when ${lgNamespace} namespace has not yet been defined`, () => {
    test(`it appends ${lgNamespace} to the window`, () => {
      getRippleGlobalNamespace();
      expect(global).toHaveProperty(lgNamespace);
    });
  });

  describe(`when ${lgNamespace} is already defined`, () => {
    beforeAll(() => {
      (global as unknown as GlobalSpecType)[lgNamespace]!.modules[
        '@azublue-ui/button'
      ] = { present: true };
    });

    afterAll(() => {
      delete (global as unknown as GlobalSpecType)[lgNamespace];
    });

    test('it adds the @azublue-ui/ripple module to the namespace', () => {
      getRippleGlobalNamespace();
      expect(
        (global as unknown as GlobalSpecType)[lgNamespace]!.modules,
      ).toHaveProperty('@azublue-ui/ripple');
    });

    test('it initializes the @azublue-ui/ripple module correctly', () => {
      const rippleNamespace = getRippleGlobalNamespace();
      expect(rippleNamespace).toStrictEqual({
        setRippleListener: false,
        registeredRippleElements: new WeakMap(),
      });
    });

    test('it does not overwrite existing modules', () => {
      getRippleGlobalNamespace();
      expect(
        (global as unknown as GlobalSpecType)[lgNamespace]!.modules,
      ).toHaveProperty('@azublue-ui/button');
    });
  });
});
