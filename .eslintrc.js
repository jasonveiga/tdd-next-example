module.exports = {
  extends: [
    'next/core-web-vitals',
    'airbnb',
    'airbnb/hooks',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
  ],
  env: {
    'jest/globals': true,
  },
  plugins: ['prettier', 'testing-library', 'jest'],
  rules: {
    'react/function-component-definition': [
      'error',
      {
        namedComponents: [
          'function-declaration',
          'function-expression',
          'arrow-function',
        ],
        unnamedComponents: ['function-expression', 'arrow-function'],
      },
    ],
    'import/extensions': ['error', { ts: 'never', tsx: 'never' }],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx', '.jsx'],
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
  },
  overrides: [
    // Only uses Testing Library lint rules in test files
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
};
