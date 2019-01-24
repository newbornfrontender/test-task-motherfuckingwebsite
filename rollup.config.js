import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

import postcss from './plugins/postcss';
import terser from './plugins/terser';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/index.js',

  output: {
    format: 'esm',
    dir: 'public',
  },

  plugins: [
    resolve({
      jsnext: true,
      browser: true,
    }),

    commonjs(),

    postcss({
      from: 'src/index.css',
      to: 'public/index.css',
    }),

    babel(),

    production &&
      terser({
        mangle: {
          module: true,
        },
      }),
  ],
};
