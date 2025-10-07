import { RuleModule } from '@typescript-eslint/utils/ts-eslint';
import { ESLint } from 'eslint';

import { rules } from './rules';

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

type RuleKey = keyof typeof rules;

interface Plugin extends Omit<ESLint.Plugin, 'rules'> {
  rules: Record<RuleKey, RuleModule<any, any, any>>;
}

const plugin: Plugin = {
  meta: {
    name: '@az-tools/eslint-plugin',
    version: '0.0.1',
  },
  rules,
  configs: {
    internal: {
      plugins: ['@az-tools'],
      rules: {
        '@az-tools/no-indirect-imports': ['error'],
      },
    },
    external: {
      plugins: ['@az-tools'],
      rules: {},
    },
  },
};

export default plugin;
