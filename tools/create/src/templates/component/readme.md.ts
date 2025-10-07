import { TemplateParameters } from '../../create.types';

export const readMe = ({
  packageNameTitle,
  packageNameKebab,
}: Pick<TemplateParameters, 'packageNameTitle' | 'packageNameKebab'>) => `
# ${packageNameTitle}

![npm (scoped)](https://img.shields.io/npm/v/@azublue-ui/${packageNameKebab}.svg)
#### [View on MongoDB.design](https://www.mongodb.design/component/${packageNameKebab}/live-example/)

## Installation

### PNPM

\`\`\`shell
pnpm add @azublue-ui/${packageNameKebab}
\`\`\`

### Yarn

\`\`\`shell
yarn add @azublue-ui/${packageNameKebab}
\`\`\`

### NPM

\`\`\`shell
npm install @azublue-ui/${packageNameKebab}
\`\`\`

`;
