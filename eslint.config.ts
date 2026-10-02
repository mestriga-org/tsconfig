import type { Linter } from 'eslint'
import factory from '@mestriga-org/eslint-config'

const config: Promise<Linter.Config[]> = factory(
	{
	},
	{
		files: [
			'tsconfig.json',
			'tsconfig.*.json',
			'wrangler.json',
		],
		rules: {
			'jsonc/comma-dangle': ['error', 'always-multiline'],
		},
	},
)
export default config
