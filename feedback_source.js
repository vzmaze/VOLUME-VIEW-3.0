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
        img: "./img/feedback/user_icons/sarah_robinson.jpg",
        name: "Kapibara",
        text: "Ка-пи-бааа-раа... капибаракапибаракапибара..."
    }
];
let template = document.querySelector("#feedback_template").innerHTML;
let output = document.querySelector("#feedbacks_div");
let feedbackShown = [];
for(let i=0; i<3; i++){
    let random_f = Math.floor(Math.random()*feedbackSource.length);
    while(feedbackShown.some(element=>{return element === random_f})){
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
    alert("Soon...");
})