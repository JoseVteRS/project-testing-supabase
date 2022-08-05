module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	extends: [
		'standard',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'prettier'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['react', '@typescript-eslint'],
	settings: {
		react: {
			version: 'detect'
		}
	},
	rules: {
		'import/order': [
			'error',
			{
				groups: [
					'builtin',
					'external',
					'internal',
					'parent',
					'sibling',
					'index',
					'object'
				]
			}
		]
	}
};
