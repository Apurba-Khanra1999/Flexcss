const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    require('./postcss-plugin-arbitrary-values'),
    purgecss({
      content: ['./**/*.html'],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
  ],
};
