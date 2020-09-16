const SHOWING_CLASS = "showing"
const firstSlide = document.querySelector(".slider__item:first-child");

init();
function init(){
    slide();
    setInterval(slide, 2000);
}

function slide(){
    const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
    //console.log(currentSLide);
    // 현재 슬라이드가 있으면 슬라이드를 지우고 다음 것을 찾으면 된다.
    if(currentSlide){
        currentSlide.classList.remove(SHOWING_CLASS);
        const nextSlide = currentSlide.nextElementSibling;
        // 마지막 슬라이드일 경우 -> 첫 슬라이드로 돌아갸아함
        if(nextSlide){
            nextSlide.classList.add(SHOWING_CLASS);
        }
        else{
            firstSlide.classList.add(SHOWING_CLASS);
        }
    }
    else{
        firstSlide.classList.add(SHOWING_CLASS);
    }
}