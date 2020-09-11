const axios = require("axios");
const cheerio = require("cheerio");
const { inherits } = require("util");
const log = console.log;

let USWeather = [];

const getHTML = async() => {
    try{
        return await axios.get("https://www.accuweather.com/ko/search-locations?query=seoul");
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
            const $bodyList = $('.recent-locations-label');
            
            //console.log($bodyList.find('td').text());
            // 가져온 데이터에서 각각 꺼내옴
            USWeather['temperature'] = $bodyList.find('.recent-location-display span:nth-of-type(2)').text();

            const data = USWeather;
            return data;
        }).then(res => log(res));
};

init();