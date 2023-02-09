window.addEventListener("orientationchange", () => {
    window.location.reload();
});

//анимация для текста
let descr = document.querySelector("p.prod_description");
let descrCopy = descr.innerHTML;
descr.innerHTML = "";
let i = 0;
let t = setInterval(() => {
    descr.innerHTML += descrCopy[i];
    i++;
    if(i == descrCopy.length){
        clearInterval(t);
    }
}, 6);

//считываем iframe видео со страницы и, если их больше 2х, добавляем эл-ты упр.
let arrows = document.querySelectorAll(".arrows_up_down");
let videos = Array.from(document.querySelectorAll('iframe'));
// console.log("Количество видео на странице: " + videos.length);
window.onload = () => {
    // let t = setTimeout(()=>{
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
        }, 500)
    // }, 1000);
}

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
    arrows[1].addEventListener("click", () => {
        x = 0; //обнуляем х (доп. дикремент будет произведен заново при наж. на кн. "вверх")
        videos.forEach(element => {
            i == 0 ? i++ : {}
            if(i < Math.floor(videos.length)){
                element.style.transform = 'translateY'+'('+ -i*position+'px'+')';
            }
        });
        if(i < Math.floor(videos.length/k))
            i++;
            // console.log(i);
    });
    
    arrows[0].addEventListener("click", () => {
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
    })
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