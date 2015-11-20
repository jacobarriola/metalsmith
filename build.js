var metalsmith  = require('metalsmith'),
    markdown    = require('metalsmith-markdown'),
    inplace    = require('metalsmith-in-place'),
    layouts     = require('metalsmith-layouts');

/**
 * Build
 */

metalsmith(__dirname)
  .use(markdown())
  .use(layouts({
    engine:'handlebars',
    partials: 'partials'
  }))
  .build(function(err) {
    if (err) throw err;
  });
