var connect = require('connect'),
    http = require('http');

connect()
  .use(connect.static('public-bar-foo'))
  .listen(3002);
