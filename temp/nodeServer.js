// 사용 모듈
let http = require('http');
let fs = require('fs');

let app = http.createServer(function(request, response){
    let url = request.url;
    if(url == "/"){
        url = '/index.html';
    }
    if(request.url == '/favicon.ico'){
        response.writeHead(404);
        response.end();
        return;
    }
    // 성공상태
    console.log(url);
    //
    response.writeHead(200);
    // 서버가 클라이언트에 응답하는 메세지
    response.end(fs.readFileSync(__dirname + url));
});
app.listen(3000);