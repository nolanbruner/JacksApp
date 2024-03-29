const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/functions',
        createProxyMiddleware({
            target: 'http://localhost:8000/',
           pathRewrite:{
            "^\\.netlify/functions":""
           }
        })
    );
};