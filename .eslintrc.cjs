module.exports = {
	root: true,
	env: {
		node: true,
	},
	parser: '@typescript-eslint/parser',
	plugins: [
		'import',
		'@typescript-eslint'
	],
	extends: [
		'eslint:recommended',
		'next/core-web-vitals',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/eslint-recommended'
	],
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.ts', '.tsx'],
			},
		},
	},
	rules: {
		'no-case-declarations': 'off',
		'no-mixed-spaces-and-tabs': 'off',
		'react-hooks/rules-of-hooks': 'off',
		'react-hooks/exhaustive-deps': 'off',
		'@typescript-eslint/no-unused-vars': 'warn',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-empty-interface': 'off',
	},
	overrides: [
		{
			files: ['*.js'],
			rules: {
				'@typescript-eslint/no-var-requires': 'off',
			},
		},
		{
			files: ['*.ts'],
			rules: {
				'import/order': [
					'error',
					{
						alphabetize: {
							order: 'asc',
						},
						groups: [
							['external', 'builtin'],
							'internal',
							['parent', 'sibling', 'index'],
						],
						'newlines-between': 'always',
					},
				],
				'require-await': ['warn'],
				'no-return-await': ['error'],
				camelcase: [
					'warn',
					{
						properties: 'never',
						ignoreDestructuring: true,
						ignoreImports: true,
						ignoreGlobals: true,
					},
				],
			},
		}
	]
}
