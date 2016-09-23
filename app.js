
/**
 * Module dependencies.
 */

var express = require('express');

var user = require('./routes/user');
var http = require('http');
var path = require('path');
//加载ejs 修改默认模板 
var ejs = require('ejs')
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', ejs.__express);
//修改文件扩展名ejs为html
app.set('view engine', 'html'); 
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
//设置静态文件目录
app.use(express.static(path.join(__dirname, 'app')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// angular启动页
app.get('/', function (req, res) {
    res.sendfile('app/views/index.html');
});
app.get('/userlist', user.list);
//别的测试页面

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
