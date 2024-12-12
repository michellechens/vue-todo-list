import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },
  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },
  {
    rules: {
      'vue/no-undef-components': 'error',
      'vue/no-undef-properties': 'error',
      'vue/eqeqeq': 'warn',
      'vue/no-unused-properties': 'error',
      'vue/no-unused-emit-declarations': 'error',
      'array-callback-return': 'error',
      eqeqeq: 'warn',
    },
  },
  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  skipFormatting,
]
