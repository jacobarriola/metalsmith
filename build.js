var Metalsmith  = require('metalsmith'),
    markdown    = require('metalsmith-markdown');

Metalsmith(__dirname)
  .use(markdown())
  .build(function(err) {
    if (err) throw err;
  });
