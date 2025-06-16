import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import react from 'eslint-plugin-react'
import importPlugin from 'eslint-plugin-import'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import prettier from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default [
	{ ignores: ['dist', 'build', 'node_modules'] },
	{
		files: ['**/*.{js,jsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
			parserOptions: {
				ecmaVersion: 'latest',
				ecmaFeatures: { jsx: true },
				sourceType: 'module',
			},
		},
		plugins: {
			react: react,
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
			import: importPlugin,
			'jsx-a11y': jsxA11y,
			prettier: prettier,
		},
		settings: {
			react: {
				version: 'detect',
			},
			'import/resolver': {
				node: {
					extensions: ['.js', '.jsx'],
				},
			},
		},
		rules: {
			// Base JavaScript rules
			...js.configs.recommended.rules,

			// React rules
			...react.configs.recommended.rules,
			...reactHooks.configs.recommended.rules,

			// Prettier integration
			...prettierConfig.rules,

			// Import rules
			'import/no-unresolved': 'warn',
			'import/named': 'error',
			'import/default': 'error',
			'import/namespace': 'warn',
			'import/no-duplicates': 'error',
			'import/order': [
				'warn',
				{
					groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
					'newlines-between': 'always',
				},
			],

			// Accessibility rules
			'jsx-a11y/alt-text': 'error',
			'jsx-a11y/aria-role': 'error',
			'jsx-a11y/click-events-have-key-events': 'warn',
			'jsx-a11y/no-noninteractive-element-interactions': 'warn',

			// Enhanced JavaScript rules
			'no-unused-vars': [
				'error',
				{
					varsIgnorePattern: '^[A-Z_]',
					argsIgnorePattern: '^_',
					ignoreRestSiblings: true,
				},
			],
			'no-console': 'warn',
			'no-debugger': 'error',
			'no-alert': 'warn',
			'no-var': 'error',
			'prefer-const': 'error',
			'prefer-arrow-callback': 'warn',

			// Prettier as ESLint rule
			'prettier/prettier': 'error',

			// React specific rules
			'react/prop-types': 'off',
			'react/react-in-jsx-scope': 'off',
			'react/jsx-uses-react': 'off',
			'react/jsx-uses-vars': 'error',
			'react/jsx-no-duplicate-props': 'error',
			'react/jsx-no-undef': 'error',
			'react/jsx-pascal-case': 'error',
			'react/jsx-key': 'error',
			'react/no-children-prop': 'error',
			'react/no-danger': 'warn',
			'react/no-deprecated': 'error',
			'react/no-direct-mutation-state': 'error',
			'react/no-unescaped-entities': 'error',
			'react/self-closing-comp': 'warn',
			'react/jsx-boolean-value': ['warn', 'never'],
			'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never' }],

			// React Refresh
			'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

			// Additional helpful rules
			eqeqeq: ['error', 'always'],
			curly: ['error', 'all'],
			'brace-style': ['warn', '1tbs'],
			'no-multiple-empty-lines': ['warn', { max: 2 }],
			'no-trailing-spaces': 'warn',
			'max-len': ['warn', { code: 120, ignoreStrings: true, ignoreTemplateLiterals: true }],
		},
	},
]
