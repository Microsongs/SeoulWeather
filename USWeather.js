const axios = require("axios");
const cheerio = require("cheerio");
const { inherits } = require("util");
const log = console.log;

let USWeather = [];

const getHTML = async() => {
    try{
        return await axios.get("https://www.accuweather.com/ko/kr/jongno-1.2.3.4(ilisamsa)-ga-dong/3429990/weather-forecast/3429990");
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
            const $bodyList = $('.cur-con-weather-card__panel');
            
            //console.log($bodyList.find('td').text());
            // 가져온 데이터에서 각각 꺼내옴
            USWeather['img_url'] = $bodyList.find('.forecast-container img').attr('src');
            USWeather['img_alt'] = $bodyList.find('.forecast-container img').attr('alt');
            USWeather['temperature'] = $bodyList.find('.forecast-containter .temp-container .temp').text();

            const data = USWeather;
            return data;
        }).then(res => log(res));
};

init();

/*
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
            const $bodyList = $('#sub-header-recent-location');
            
            //console.log($bodyList.find('td').text());
            // 가져온 데이터에서 각각 꺼내옴
            USWeather['img_url'] = $bodyList.find('.recent-locations-label .recent-location-display .weather-icon').attr('src');

            const data = USWeather;
            return data;
        }).then(res => log(res));
};

init();
*/