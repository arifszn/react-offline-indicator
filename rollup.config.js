import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import image from '@rollup/plugin-image';
import visualizer from 'rollup-plugin-visualizer';
import pkg from './package.json';
import { terser } from 'rollup-plugin-terser';

const extensions = ['.mjs', '.js', '.jsx', '.json', '.node'];

export default {
  input: './src/index.jsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'auto',
    },
    {
      file: pkg.module,
      format: 'esm',
    },
  ],
  plugins: [
    external(),
    terser(),
    postcss(),
    babel({
      exclude: 'node_modules/**',
      extensions,
    }),
    resolve({ extensions }),
    commonjs(),
    image(),
    visualizer(),
  ],
};
