import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default {
	input: 'src/index.ts',
	output: {
		dir: 'dist',
		name: 'ScrollSpy',
		format: 'umd'
	},
	plugins: [typescript(), terser()]
};
