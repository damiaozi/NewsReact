// 本地开发server 能力

const path = require('path');
import webpack from 'webpack'; // es6 import
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack-dev-config';


// express server
const app = new(require('express'))();
const port = 3000; // 监听的端口是3000 locahost:3000
const compiler = webpack(config);
//这个库来实现反向代理
const httpProxy = require('http-proxy')

//设置静态资源根目录
app.use(new(require('express')).static('static'));
// dev中间件
app.use(webpackDevMiddleware(compiler, {
  noInfo: true, // 不显示编译信息
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
}));
app.use(webpackHotMiddleware(compiler));

//设置代理
var proxy = httpProxy.createProxyServer({
  target: 'https://m.news.baidu.com',
  changeOrigin: true,
});
app.all('/news', function(req, res) {
  proxy.web(req, res);
});
// 捕获异常  
proxy.on('error', function(err, req, res) {
  res.writeHead(500, {
    'Content-Type': 'text/plain'
  });
  res.end('Something went wrong. And we are reporting a custom error message.');
});

//返回静态数据
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
});