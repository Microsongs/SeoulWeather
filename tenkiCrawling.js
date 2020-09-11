const axios = require("axios");
const cheerio = require("cheerio");
const { inherits } = require("util");
const log = console.log;

let tenkiData = [];

const getHTML = async() => {
    try{
        return await axios.get("https://tenki.jp/world/5/89/47108/");
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
            const $bodyList = $('.world-live-forecast-table tbody tr:nth-of-type(2)');
            
            //console.log($bodyList.find('td .world-live-entry-table tbody tr:nth-of-type(2) td').text());
            // 가져온 데이터에서 각각 꺼내옴
            /*
            $bodyList = function(i, elem){
                tenkiData[temperature] = elem.find('td .world-live-entry-table tbody tr:nth-of-type(2) td').text();
                tenkiData[highTemperature] =elem.find('td:nth-of-type(2) .world-forecast-entry-table tbody tr .high-temp').text();
                tenkiData[lowTemperature] = elem.find('td:nth-of-type(2) .world-forecast-entry-table tbody tr:nth-of-type(2) .low-temp').text();
            };
            */
        tenkiData['temperature'] = $bodyList.find('td .world-live-entry-table tbody tr:nth-of-type(2) td:nth-of-type(1)').text();
        tenkiData['highTemperature'] = $bodyList.find('td:nth-of-type(2) .world-forecast-entry-table tbody tr .high-temp').text();
        tenkiData['lowTemperature'] = $bodyList.find('td:nth-of-type(2) .world-forecast-entry-table tbody tr:nth-of-type(2) .low-temp').text();
        
            const data = tenkiData;
            return data;
        }).then(res => log(res));
};

init();