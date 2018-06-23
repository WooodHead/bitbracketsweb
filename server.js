// server.js
const { createServer } = require('http');
const next = require('next');
const routes = require('./routes');

const app = next({ dev: process.env.NODE_ENV === 'development' });

const handler = routes.getRequestHandler(app);

const PORT = process.env.FRONTEND_PORT || 3000;

// Without express
app.prepare().then(() => {
  createServer(handler).listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Ready on localhost: ${PORT}`);
  });
});
