export default {
  singleQuote: true,
  semi: false,
  tabWidth: 2,
  printWidth: 80,
  trailingComma: 'es5',
  jsxSingleQuote: true,
  bracketSpacing: true,
  arrowParens: 'avoid',
  endOfLine: 'lf',
  overrides: [
    {
      files: ['*.css', '*.scss'],
      options: { tabWidth: 4 },
    },
  ],
}
