var connect = require('connect'),
    http = require('http');

connect()
  .use(connect.static('public-foo'))
  .listen(3001);
