const { defineConfig } = require('vite');
const { svelte } = require('@sveltejs/vite-plugin-svelte');
const legacy = require('@vitejs/plugin-legacy')

module.exports = defineConfig(({ command, mode }) => {
	return {
		plugins: [
			svelte({
				compilerOptions: {
					hydratable: true,
				}
			}),
			legacy({
				targets: ['ie >= 11'],
				additionalLegacyPolyfills: ['regenerator-runtime/runtime']
			})
		],
	};
});
