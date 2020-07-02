var express = require('express');

var app = express();

 app.get('/',function(req,res){
    res.send('hello world');
 });

 var express = require('express');
var app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:9002')
    // http://localhost:9001
    res.header('Access-Control-Allow-Headers', 'Content-Type' )
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, PUT, DELETE')
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header('Access-Control-Max-Age', '10')
    next();
});
/*路由,接受get，pust，delete等请求*/
app.get('/',function(req,res,next){
    res.send('hello');    //响应，将hello返回给浏览器页面显示
})

app.get('/getInfo', function (req, res) {
    var _callback = req.query.callback;
    var responseData = { email: 'lili@163.com', name: 'lili' };
    if (_callback){
        res.type('text/javascript');
        res.send(_callback + '(' + JSON.stringify(responseData) + ')');
    }
    else{
        res.json(responseData);
    }
});

app.post('/login',function(req,res,) {

    res.send('helloPost');    //响应，将hello返回给浏览器页面显示
})

var server = app.listen(9000,function(){    /*监听端口*/
    var host = server.address().address;
    var port = server.address().port; 
});