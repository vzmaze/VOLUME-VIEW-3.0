// FEEDBACK
let feedbackSource = [
    {
        img: "./img/feedback/user_icons/sarah_robinson.jpg",
        name: "Sarah Robinson",
        text: "Working with thise guys was an astonishing expirience for me. I was pleased with theyre work."
    },
    {
        img: "./img/feedback/user_icons/nathan_perish.jpg",
        name: "Nathan Perish",
        text: "At first I was not sure about this team but I decided to give them a chance. And they didn’t let me down. Good job, guys.",
    },
    {
        img: "./img/feedback/user_icons/amy_jones.jpg",
        name: "Amy Jones",
        text: "Working with thise guys was an astonishing expirience for me. I was pleased with theyre work.",
    },
    {
        img: "./img/feedback/user_icons/kapibara.jpg",
        name: "Kapibara",
        text: "Ка-пи-бааа-раа... капибаракапибаракапибара..."
    },
    {
        img: "./img/feedback/user_icons/kapibara2.jpg",
        name: "Kapibara2",
        text: "Ка-пи-бааа-раа... капибаракапибаракапибара..."
    },
    {
        img: "./img/feedback/user_icons/squirrel.jpg",
        name: "Squirrel",
        text: "Привіт! Парк наталка на зв'язку! Дякуємо за горішки)))"
    }
];
let template = document.querySelector("#feedback_template").innerHTML;
let output = document.querySelector("#feedbacks_div");
let feedbackShown = [];//сохраним сюда три выбранные отзыва
for(let i=0; i<3; i++){
    let random_f = Math.floor(Math.random()*feedbackSource.length);//случайное число от 0 до 3х
    while(feedbackShown.some(element=>{return element === random_f})){//выбирать новое, если такое уже есть в массиве
        random_f = Math.floor(Math.random()*feedbackSource.length);
    }
    const user = feedbackSource[random_f];
    feedbackShown[i] = random_f;
    console.log(feedbackShown);//удалить
    let feedback = Mustache.render(template, user);
    output.insertAdjacentHTML("beforeend", feedback);
}

let allFeedbacksBtn = document.querySelector("#feedback_footer");
allFeedbacksBtn.addEventListener("click", ()=>{
    output.innerHTML = "";
    let random_f2;
    for(let i=0; i<3; i++){
        do {
            random_f2 = Math.floor(Math.random()*feedbackSource.length);
            console.log(random_f2);
        } while(feedbackShown.some(element => {return element === random_f2}))
        feedbackShown[i] = random_f2;
        const user = feedbackSource[random_f2];
        console.log("Feedback 2: "+feedbackShown);
        let feedback = Mustache.render(template, user);
        output.insertAdjacentHTML("beforeend", feedback);        
    }
    

})