window.addEventListener("orientationchange", () => {
    window.location.reload();
});
//выбираем фон
if(window.matchMedia("(orientation: portrait)").matches){
    let pageName = window.location.href;
    if(pageName.includes("travel.html")) {
        document.body.style.background = "url"+"("+"../img/services/service_1_small.jpg"+")"+","+"#"+303030;
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundRepeat = "no-repeat";
    } else if(pageName.includes("business.html")){
        document.body.style.background = "url"+"("+"../img/services/service_2_portrait.jpg"+")"+","+"#"+303030;
    } else if(pageName.includes("music.html")){
        document.body.style.background = "url"+"("+"../img/services/service_4_small.jpg"+")"+","+"#"+303030;
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPositionY = "center";
    } else if(pageName.includes("event.html")){
        document.body.style.background = "url"+"("+"../img/services/service_5_small.jpg"+")"+","+"#"+303030;
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPositionY = "center";
    }
}

//анимация для текста
let descr = document.querySelector("p.prod_description");
let descrCopy = descr.textContent;

//сделаем высоту блока установленной изначально (из css height: auto)
let height = parseInt(getComputedStyle(descr, false).height);
if(navigator.userAgent.includes("OPR")){//для оперы увеличиваем высоту, т.к. текст занимает больше места
    height += 25;
}
descr.style.height = height + "px";

descr.textContent = "";

let arrows = document.querySelectorAll(".arrows_up_down");
let videos = Array.from(document.querySelectorAll('iframe'));
// console.log("videos number is: "+videos.length);
// let frame = document.querySelector("#frame");
// let divVideos = document.querySelector(".videos");

function textAnimatIn(speed) {
    let promise = new Promise(function(resolve){
        let i = 0;
        let t = setInterval(() => {
            descr.textContent += descrCopy[i];
            i++;
            if(i == descrCopy.length){
                clearInterval(t);
                resolve();
            }
        }, speed);
    })
    return promise;
}
function loadVideos(){
    let t = setTimeout(()=>{
        videos.forEach(vid => {
        crossDissolve(vid);
        document.querySelector("#frame").style.background = "none";
    });
    //анимация названий разделов
    let nav = Array.from(document.querySelector("#navigate_services").children);
    let i1 = 0;
    let t1 = setInterval(() => {
        crossDissolve(nav[i1]);
        i1++;
        if(i1 == nav.length)
            clearInterval(t1);
    }, 500);
    }, 1000);
}
textAnimatIn(6).then(loadVideos());



//считываем iframe видео со страницы и, если их больше 2х, добавляем эл-ты упр.

// console.log("Количество видео на странице: " + videos.length);
// window.onload = () => {
//     let t = setTimeout(()=>{
//         videos.forEach(vid => {
//             crossDissolve(vid);
//             document.querySelector("#frame").style.background = "none";
//         });
//         //анимация названий разделов
//         let nav = Array.from(document.querySelector("#navigate_services").children);
//         let i1 = 0;
//         let t1 = setInterval(() => {
//             crossDissolve(nav[i1]);
//             i1++;
//             if(i1 == nav.length)
//                 clearInterval(t1);
//         }, 500)
//     }, 1000);
// }

let k; //количество отображаемых iframes на странице - 1 или 2
let videoStyles = getComputedStyle(videos[0], null);
let frameHeight = parseInt(getComputedStyle(document.querySelector("#frame"), null).maxHeight);
// console.log(frameHeight);
if((frameHeight / parseInt(videoStyles.height)) < 2){
    k = 1;
} else if ((frameHeight / parseInt(videoStyles.height)) >= 2) {
    k = 2;
}

let position = parseInt(videoStyles.height)+parseInt(videoStyles.marginBottom)+4;
if(videos.length <= k) {
    arrows[0].style.background = 'none';
    arrows[1].style.background = 'none';
} else {
    let x = 0; //переменная для определения первого нажатия на кнопку "вверх"
    let position = parseInt(videoStyles.height)+parseInt(videoStyles.marginBottom)+4;
    let i = 0;
    arrows[1].addEventListener("click", slideUp);
    arrows[0].addEventListener("click", slideDown);
    function slideUp() {
        x = 0; //обнуляем х (доп. дикремент будет произведен заново при наж. на кн. "вверх")
        videos.forEach(element => {
            i == 0 ? i++ : {}
            if(i < videos.length){
                element.style.transform = 'translateY'+'('+ -i*position+'px'+')';
            }
        });
        if(i < Math.ceil(videos.length-k)){
            i++;
            // console.log("i = "+i);
        }
    }
    function slideDown() {
        if(i > 0){
            if(x == 0 && k == 1){
                i--; //при первом нажатии на кнопку "вверх" нужен дополнительный дикримент
                x++;
            }
            i--;
            // console.log(i);
            videos.forEach(element => {
                element.style.transform = 'translateY'+'('+ -i*position+'px'+')';
            });
        }        
    }
    let startY = 0;
    let finalY = 0;
    
    // window.addEventListener("touchstart", (e)=>{
    //     startY = e.touches[0].clientY;
    // });
    // window.addEventListener("touchmove", (e)=>{finalY = e.touches[0].clientY;});
    // window.addEventListener("touchend", ()=>{
    //     if((finalY - startY) >= 50){
    //         slideUp();
    //         startY = 0;
    //         finalY = 0;
    //     } else if ((startY - finalY) >= 50) {
    //         slideDown();
    //         startY = 0;
    //         finalY = 0;
    //     }
        
    // });
}



//Функция плавного появления окна
function crossDissolve(elem, which = true) {
    if(which){
        let x = 0;
        let t = setInterval(() => {
            x += 0.05;
            elem.style.opacity = x;
            if(x >= 1)
                clearInterval(t);
        }, 15);
    } else {
        let x = 1;
        let t = setInterval(() => {
            x -= 0.05;
            elem.style.opacity = x;
            if(x == 0)
                clearInterval(t);
        }, 15);
    }
}