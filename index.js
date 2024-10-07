const QuizData = [
    {
    question:"What is Html for",
    options:[
        "Hyper Text Markup Language",
        "Hyper JS Mark Up Language",
        "Hyper MAchine Mark Up Language",
        "Hyper Test Mark Up Language"
    ],
    correct:0
},
{
    question:"kakran ki kon maarkega",
    options:[
        "Naggu",
        "vijjuu",
        "shivank",
        "vivek"
    ],
    correct:1
},
{
    question:"What is Html for",
    options:[
        "Hyper Text Markup Language",
        "Hyper JS Mark Up Language",
        "Hyper MAchine Mark Up Language",
        "Hyper Test Mark Up Language"
    ],
    correct:2
},
{
    question:"What is Html for",
    options:[
        "Hyper Text Markup Language",
        "Hyper JS Mark Up Language",
        "Hyper MAchine Mark Up Language",
        "Hyper Test Mark Up Language"
    ],
    correct:1
},
];


const answerElm = document.querySelectorAll(".answer");
const [ questionElm, option_1, option_2, option_3, option_4 ] = document.querySelectorAll("#question, .option_1, .option_2, .option_3, .option_4");
const submitBtn = document.querySelector('#submitBtn')
// const scoreElm = document.querySelector("#score");
// const questionCountElm = document.querySelector("#questionCount");
let questionCount = 0;
let score = 0;

const loadQuiz = () =>{
    const{question,options} = QuizData[questionCount];
    // console.log(question);
    // questionCount++;
    questionElm.innerText = question;
    // options.forEach((currElement,index)=>(option_1.innerText=currElement));
    // option_1.innerText = options[0];
    // option_2.innerText = options[1];
    // option_3.innerText = options[2];
    // option_4.innerText = options[3];

    //dynamic way
    options.forEach((curOption,index) =>(window[`option_${index+1}`].innerText=curOption));

};
console.log(questionCount);

loadQuiz();

const getSelectedOption = ()=>{
    let ans_index;
    answerElm.forEach((currElement,index)=>{
        if(currElement.checked){
            ans_index = index;
        }
    });
    return  ans_index;

//    let answerElement =Array.from(answerElm);
//    return  answerElement.findIndex((currE)=>currE.checked)

};

const dessection =()=>{
    answerElm.forEach((curE)=>curE.checked=false);
};


if(submitBtn){
    submitBtn.addEventListener("click", () => {
        const selectOption = getSelectedOption();
        if(selectOption === QuizData[questionCount].correct){
            score++;
        }
        console.log(score);
        questionCount++;
        if(questionCount<QuizData.length){
            dessection();
            loadQuiz();
        }
        else{
            Quizz.innerHTML =
            `<div class="result">
            <h2>Your answer ${score}/${QuizData.length}</h2>
            <p>Congratulation on completing quiz</p>
            <button class="reload-button" onclick="location.reload()">Play Again</button>
            </div>`
            ;
        }
        console.log(selectOption);
    });
}
else{
    console.error("chutiya");
}



