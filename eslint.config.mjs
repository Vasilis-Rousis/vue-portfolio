// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt([
  {
    rules: {
      // Vue specific rules
      'vue/multi-word-component-names': 'off',
      'vue/require-default-prop': 'off',
      'vue/html-self-closing': 'off',

      // TypeScript rules
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],

      // General rules
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-unused-vars': 'off', // Handled by TypeScript rule
    },
  },
])
