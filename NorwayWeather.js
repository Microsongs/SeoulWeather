const axios = require("axios");
const cheerio = require("cheerio");
const { inherits } = require("util");
const log = console.log;

let NorwayWeather = [];

const getHTML = async() => {
    try{
        return await axios.get("https://www.yr.no/place/South_Korea/");
    }
    catch(error){
        console.log(error);
    }
};

function init(){
    getHTML()
        .then(html => {
            const $ = cheerio.load(html.data);
            // html의 body 안으로 들어가 테이블의 값을 꺼내옴
            const $bodyList = $('.yr-table');
            
            //console.log($bodyList.find('td').text());
            // 가져온 데이터에서 각각 꺼내옴
            NorwayWeather['temperature'] = $bodyList.find('tbody tr:nth-of-type(5) td:nth-of-type(1) span').text()+"℃";
            NorwayWeather['img_url'] = $bodyList.find('tbody tr:nth-of-type(5) td:nth-of-type(1) figure svg use ').attr('src');
            const data = NorwayWeather;
            return data;
        }).then(res => log(res));
};

init();