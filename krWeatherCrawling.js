const axios = require("axios");
const cheerio = require("cheerio");
const { inherits } = require("util");
const log = console.log;

let krWeather = [];

const getHTML = async() => {
    try{
        return await axios.get("https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&query=%EC%84%9C%EC%9A%B8%EB%82%A0%EC%94%A8");
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
            const $bodyList = $('.main_info');

            krWeather['temperature'] = $bodyList.find('.info_data .info_temperature .todaytemp').text()+"℃";
            const data = krWeather;
            return data;
        }).then(res => log(res));
};

init();