const express = require('express');
const proxy = require('http-proxy-middleware');

const app = express();
const PSO_SERVER_URL = process.env.PSO_SERVER_URL;

app.use(express.static(__dirname));

// PSO stands for Platform State Observer. The API we are using is under this service.
app.use('/api/pso', proxy({
  target: `http://${PSO_SERVER_URL}`,
  changeOrigin: true,
  pathRewrite: (router) => (
    router.replace('/api/pso', '')
  ),
}));

export default app;
