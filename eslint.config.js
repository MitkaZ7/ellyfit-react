import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import prettierConfig from './prettier.config.js'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
      eslintConfigPrettier,
    ],
    plugins: {
      prettier: eslintPluginPrettier,
    },
    languageOptions: {
      ecmaVersion: 2020,
      ecmaFeature: { jsx: true },
      globals: globals.browser,
      sourceType: 'module',
    },
    rules: {
      rules: {
        'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
        'prettier/prettier': ['error', prettierConfig],
      },
    },
  },
])
