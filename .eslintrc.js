module.exports = {
  extends: [
    'next/core-web-vitals',
    'airbnb',
    'airbnb/hooks',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier'],
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
};
