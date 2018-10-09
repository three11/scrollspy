import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs'
import { uglify } from 'rollup-plugin-uglify';

export default {
	input: 'src/scrollspy.js',
	output: {
		file: 'dist/scrollspy.min.js',
		name: 'ScrollSpy',
		format: 'iife'
	},
	plugins: [
		babel({
			exclude: 'node_modules/**',
			babelrc: false,
			presets: [
				['@babel/env', { 'modules': false }]
			]
		}),
		resolve(),
		commonJS({
			include: 'node_modules/**'
		}),
		uglify()
	]
};
