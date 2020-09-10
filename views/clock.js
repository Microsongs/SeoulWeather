// js-clock 클래스를 쓰는 태그를 가져옴
const clockContainer = document.querySelector(".js-clock");
// 그 클래스 내의 h1태그를 가져옴
const clockTitle = clockContainer.querySelector("h1");

function getTime(){
    // 날짜를 가져옴
    const data = new Date();
    const hours = data.getHours();
    const minutes = data.getMinutes();
    const seconds = data.getSeconds();
    // 삼항 연산자로 10 이하일 경우 앞에 숫자를 삽입
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours }:${
        minutes < 10 ? `0${minutes}` : minutes}:${
            seconds < 10 ? `0${seconds}` : seconds}
    `;
}

function init(){
    getTime();
    // setInterval(실행할 함수, 시간)
    // 아래 함수는 1초에 1회 실행
    setInterval(getTime,1000);
}
init();