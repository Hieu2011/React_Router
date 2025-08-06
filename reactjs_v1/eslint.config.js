import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'

export default tseslint.config([
  globalIgnores(['dist', 'build', '.react-router', 'node_modules', '.vscode']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname
      }
    },
    rules: {
      // ✅ Rules hiện tại (đã có)
      'react-refresh/only-export-components': 'off',
      'no-empty-pattern': 'off',

      // 🎯 Custom rules của bạn (thêm mới)

      // JavaScript rules
      'no-console': 'warn', // Cảnh báo khi dùng console.log
      'no-debugger': 'error', // Lỗi khi dùng debugger
      'prefer-const': 'error', // Bắt buộc dùng const
      'no-var': 'error', // Cấm var

      // TypeScript rules
      '@typescript-eslint/no-explicit-any': 'warn', // Cảnh báo khi dùng any
      '@typescript-eslint/no-unused-vars': 'warn', // Cảnh báo khi có unused vars
      // '@typescript-eslint/prefer-nullish-coalescing': 'warn', // Tắt tạm vì cần type info

      // React rules (nếu cần)
      'react-hooks/rules-of-hooks': 'error', // Bắt buộc tuân thủ rules of hooks
      'react-hooks/exhaustive-deps': 'warn' // Cảnh báo missing dependencies
    }
  }
])
