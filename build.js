var metalsmith  = require('metalsmith'),
    markdown    = require('metalsmith-markdown'),
    layouts     = require('metalsmith-layouts'),
    collections = require('metalsmith-collections'),
    permalinks  = require('metalsmith-permalinks'),
    serve       = require('metalsmith-serve'),
    watch       = require('metalsmith-watch');

/**
 * Build
 */

metalsmith(__dirname)
  .metadata({
    site: {
      title: 'Jacob Arriola'
    }
  })
  .use(markdown())
  .use(layouts({
    engine:'handlebars',
    partials: 'partials'
  }))
  .use(serve({
    port: 8080,
    verbose: true
  }))
  .use(watch({
    pattern: '**/*',
    livereload: true
  }))
  .build(function(err) {
    if (err) {
      throw err;
    } else {
      console.log('✔︎ Build complete, yo!');
    }
  });
