export const tsConfig = (scope: string) => {
  const pathToPackagesRoot =
    scope === '@azublue-ui' ? '..' : '../../packages';
  return `{
  "extends": "@az-tools/build/config/package.tsconfig.json",
   "compilerOptions": {
    "paths": {
      "@azublue-ui/icon/dist/*": ["${pathToPackagesRoot}/icon/src/generated/*"],
      "@azublue-ui/*": ["${pathToPackagesRoot}/*/src"]
    }
  },
  "include": ["src/**/*"],
  "exclude": ["**/*.spec.*", "**/*.stories.*"],
  "references": [
    {
      "path": "${pathToPackagesRoot}/emotion"
    },
    {
      "path": "${pathToPackagesRoot}/lib"
    },
    {
      "path": "../../tools/test-harnesses"
    }
  ]
}
`;
};
