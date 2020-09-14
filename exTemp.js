let http = require('http');
let express = require('express');
let fs = require('fs');
let request = require('requrest');
let cheerio = require('cheerio');

let app = express();

app.get('/',function(req, res){
    fs.readFile('views/index.html',function(err, data){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end(data);
    })
})

app.get('/test/codeaa',function(req, res){
    let url = req.params('url');

    request(url, function(err, req, body){
        let $ = cheerio.load(body);

        let content = $('meta')[19];
        let imgs = [];

        $('img').each(function(item, index, array){
            if($(this).attr("src").split('.jpg'))
        })
    })
})