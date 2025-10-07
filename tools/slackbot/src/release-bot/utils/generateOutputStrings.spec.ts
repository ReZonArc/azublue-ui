import { generateOutputStrings } from './generateOutputStrings';

describe('tools/slackbot/release', () => {
  describe('generateOutputStrings', () => {
    test('patch', () => {
      const updateObj = generateOutputStrings({
        name: '@azublue-ui/example-patch',
        version: '1.0.2',
      });

      expect(updateObj).toHaveProperty('name', '@azublue-ui/example-patch');

      expect(updateObj).toHaveProperty(
        'fullName',
        '@azublue-ui/example-patch@1.0.2',
      );
      expect(updateObj).toHaveProperty('scope', '@azublue-ui');
      expect(updateObj).toHaveProperty('shortName', 'example-patch');
      expect(updateObj).toHaveProperty(
        'changelogUrl',
        'https://github.com/mongodb/leafygreen-ui/blob/main/packages/example-patch/CHANGELOG.md',
      );
      expect(updateObj).toHaveProperty('version', '1.0.2');
    });

    test('minor', () => {
      const updateObj = generateOutputStrings({
        name: '@azublue-ui/example-minor',
        version: '1.2.0',
      });

      expect(updateObj).toHaveProperty('name', '@azublue-ui/example-minor');
      expect(updateObj).toHaveProperty(
        'fullName',
        '@azublue-ui/example-minor@1.2.0',
      );
      expect(updateObj).toHaveProperty('scope', '@azublue-ui');
      expect(updateObj).toHaveProperty('shortName', 'example-minor');
      expect(updateObj).toHaveProperty(
        'changelogUrl',
        'https://github.com/mongodb/leafygreen-ui/blob/main/packages/example-minor/CHANGELOG.md',
      );
      expect(updateObj).toHaveProperty('version', '1.2.0');
    });

    test('major', () => {
      const updateObj = generateOutputStrings({
        name: '@azublue-ui/example-major',
        version: '2.0.0',
      });

      expect(updateObj).toHaveProperty('name', '@azublue-ui/example-major');
      expect(updateObj).toHaveProperty(
        'fullName',
        '@azublue-ui/example-major@2.0.0',
      );
      expect(updateObj).toHaveProperty('scope', '@azublue-ui');
      expect(updateObj).toHaveProperty('shortName', 'example-major');
      expect(updateObj).toHaveProperty(
        'changelogUrl',
        'https://github.com/mongodb/leafygreen-ui/blob/main/packages/example-major/CHANGELOG.md',
      );
      expect(updateObj).toHaveProperty('version', '2.0.0');
    });

    test('@az-tools', () => {
      const updateObj = generateOutputStrings({
        name: '@az-tools/example-tool',
        version: '1.2.0',
      });

      expect(updateObj).toHaveProperty('name', '@az-tools/example-tool');
      expect(updateObj).toHaveProperty(
        'fullName',
        '@az-tools/example-tool@1.2.0',
      );
      expect(updateObj).toHaveProperty('scope', '@az-tools');
      expect(updateObj).toHaveProperty('shortName', 'example-tool');
      expect(updateObj).toHaveProperty(
        'changelogUrl',
        'https://github.com/mongodb/leafygreen-ui/blob/main/tools/example-tool/CHANGELOG.md',
      );
      expect(updateObj).toHaveProperty('version', '1.2.0');
    });
  });
});
