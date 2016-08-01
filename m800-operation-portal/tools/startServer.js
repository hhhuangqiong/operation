/**
 * This file is used for starting up the built server in production environment.
 * This should be built together with the server-side bundle.
 */

const http = require('http');
const app = require('../src/server').default;

// Normal HTTP server
const PORT = process.env.PORT || 3000;
http.createServer(app).listen(PORT, function (err) {
  if (err) {
    console.error(err);
    return;
  }

  console.log('Express server listening on port %s', PORT);
});
