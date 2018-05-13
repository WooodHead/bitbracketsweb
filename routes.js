const routes = require('next-routes')();

/*
routes
    .add('/path1[/path2]/:dynamicParameter', '/path/to/page/PageName')
    ;
*/

routes
  .add('/contest/:contest/pools/new', '/pools/new')
  .add('/pools/:address', '/pools/show')
  .add('/pools/:address/join', '/pools/join');

module.exports = routes;
