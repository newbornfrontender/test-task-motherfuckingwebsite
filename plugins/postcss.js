import { readFile, writeFile } from 'fs';
import postcssrc from 'postcss-load-config';
import postcss from 'postcss';

const ctx = {
  env: process.env.NODE_ENV,
};

export default ({ from, to }) => ({
  name: 'postcss',

  buildStart: () =>
    readFile(from, (...source) =>
      postcssrc(ctx).then(({ plugins, options }) => {
        options.from = from;
        options.to = to;

        return postcss(plugins)
          .process(source[1], options)
          .then(({ css: result }) => writeFile(to, result, () => true));
      }),
    ),
});
