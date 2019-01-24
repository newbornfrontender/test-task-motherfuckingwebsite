module.exports = ({ env }) => ({
  plugins: {
    'postcss-preset-env': {
      features: {
        'custom-media-queries': {},
        'media-query-ranges': {},
        'nesting-rules': {},
      },

      autoprefixer: env === 'production',
    },

    cssnano: env === 'production',
  },
});
