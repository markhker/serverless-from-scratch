/*
👋 Defines eslint/tslint behavior for the project 💖
https://github.com/typescript-eslint/tslint-to-eslint-config
https://github.com/benmosher/eslint-plugin-import for 'import' statement rules
*/
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    tsconfigRootDir: '.',
    // Can I remove these now?
    ecmaFeatures: {
      impliedStrict: true,
      classes: true,
    },
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  plugins: [
    '@typescript-eslint',
  ],
  env: {
    browser: true,
    node: true,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@config', './src/config'],
          ['@libs', './src/libs'],
        ],
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  rules: {
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/space-before-function-paren': 0,
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/member-delimiter-style': ['error', { singleline: { delimiter: 'semi', requireLast: true } }],
    '@typescript-eslint/indent': ['error', 2, { SwitchCase: 1, ignoredNodes: ['JSXAttribute', 'JSXSpreadAttribute'] }],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      1,
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: 'res|next|^err|^_',
      },
    ],
    '@typescript-eslint/camelcase': 'off',
    'import/prefer-default-export': 0,
    'import/first': 'error',
    'import/no-duplicates': 'error',
    'import/newline-after-import': 'error',
    'import/dynamic-import-chunkname': 'error',
    'import/no-dynamic-require': 0,
    'import/no-unresolved': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], ['index', 'object'], 'unknown'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc' },
        pathGroups: [
          { pattern: '@libs/**', group: 'internal' },
          { pattern: '@config/**', group: 'internal' },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
    semi: 'error',
    'no-undef': 'error',
    'no-debugger': 0,
    'no-alert': 0,
    'no-await-in-loop': 0,
    'guard-for-in': 'off',
    'no-const-assign': 'error',
    'no-return-assign': [
      'error',
      'except-parens',
    ],
    'no-restricted-syntax': [
      2,
      'LabeledStatement',
      'WithStatement',
    ],
    'no-unused-vars': 0,
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    indent: 'off',
    'arrow-parens': ['error', 'always'],
    'arrow-body-style': [
      2,
      'as-needed',
    ],
    'no-unused-expressions': [
      2,
      {
        allowTaggedTemplates: true,
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    'no-param-reassign': [
      2,
      {
        props: false,
      },
    ],
    'no-console': 0,
    'func-names': 0,
    'space-before-function-paren': 0,
    'comma-dangle': ['error', 'always-multiline'],
    'max-len': [
      'error',
      {
        code: 160,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'no-underscore-dangle': 0,
    'consistent-return': 0,
    'no-nested-ternary': 0,
    radix: 0,
    'no-shadow': 'off',
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'quote-props': [
      2,
      'as-needed',
    ],
  },
  globals: {
    Promise: true,
  },
};
