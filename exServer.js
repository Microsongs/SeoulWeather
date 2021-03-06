// Express 기본 모듈
let express = require('express');
let http = require('http');

// express 객체 생성
let app = express();

// 라우터 생성
let router = require('./router/main')(app);

// 기본 포트를 app 객체에 속성으로 설정
// app.set('port',process.env.PORT || 3000);

// HTML 위치 정의
app.set('views', __dirname + '/views');
// 서버가 HTML렌더링 시 ejs엔진을 사용하도록 설정
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

let server = app.listen(3000, function(){
    console.log("Express server has started on port 3000");
});
app.use(express.static('views'));
app.use(express.static('public'));
app.use(express.static('public/css'));
app.use(express.static('public/images'));
app.use(express.static('views/travel'));
app.use(express.static('views/travel/canada'));
app.use(express.static('views/travel/hongkong'));
app.use(express.static('views/travel/japan'));
app.use(express.static('views/travel/korea'));
app.use(express.static('views/travel/singapore'));
app.use(express.static('views/travel/taiwan'));
app.use(express.static('views/travel/thailand'));
app.use('/static', express.static(__dirname + '/public/css'));
app.use('/static', express.static(__dirname + '/public'));

module.exports = function(app, fs) {
    app.get('/public',function(feq,res){
        fs.readFile("tenkCrawling.js",'utf8',function(err, data){
            console.log(data);
            res.end(data);
        });
        /*
        fs.readFile(__dirname + "/../public/"+"tenkCrawling.js",'utf8',function(err, data){
            console.log(data);
            res.end(data);
        });
        */
    })
}