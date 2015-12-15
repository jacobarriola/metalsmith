var metalsmith  = require('metalsmith'),
    markdown    = require('metalsmith-markdown'),
    layouts     = require('metalsmith-layouts'),
    collections = require('metalsmith-collections'),
    permalinks  = require('metalsmith-permalinks'),
    serve       = require('metalsmith-serve'),
    sass        = require('metalsmith-sass'),
    autoprefix  = require('metalsmith-autoprefixer'),
    excerpts    = require('metalsmith-excerpts'),
    prefix      = require('metalsmith-prefix'),
    request     = require('metalsmith-request'),
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
  .use(sass({
    outputDir: 'css/',
    sourceMap: true,
    sourceMapContents: true
  }))
  .use(autoprefix())
  .use(collections({
    posts: {
      pattern: 'posts/*.md',
      sortBy: 'date',
      reverse: true,
    },
    pages: {
      pattern: 'pages/*.md'
    }
  }))
  .use(markdown())
  .use(permalinks({
    pattern: ':title'
  }))
  .use(excerpts())
  .use(layouts({
    engine:'handlebars',
    partials: 'partials'
  }))
  .use(prefix({
    prefix: 'metalsmith',
    selector: 'link, script, a, img'
  }))
  .use(serve({
    verbose: true
  }))
  .use(watch({

    livereload: true
  }))
  .build(function(err) {
    if (err) {
      throw err;
    } else {
      console.log('✔︎ Build complete, yo!');
    }
  });
