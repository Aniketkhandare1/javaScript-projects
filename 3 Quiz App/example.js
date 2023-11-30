const questions =[
    {   question:"Which is largest animal in the World ?",
        answers:[
            { text: "Shark", correct:false},
            { text: "Blue Whale", correct:true},
            { text: "Elephant", correct:false},
            { text: "Giraffe", correct:false},
        ]},
        {
        question:"Which is smallest continent in the World ?",
        answers:[{ text: "Australia", correct:true},
                 { text: "Arctic", correct:false},
                 { text: "Asia", correct:false},
                 { text: "Africa", correct:false},] 
                },
        {         
        question:"Which is Smallest Country in the World ?",
        answers:[
            { text: "Shri-Lanka", correct:false},
            { text: "Bhutan", correct:false},
            { text: "Vatican City", correct:true},
            { text: "Nepal", correct:false},
        ]
    },
    {
        question:"Which is Largest Desert in the World ?",
        answers:[
            
            { text: "Kalahari", correct:false},
            { text: "Gobi", correct:false},
            { text: "Sahara", correct:false},
            { text: "Antartica", correct:true},
        ]
    },
    {
        question:"Which is the Capital of INDIA?",
        answers:[
            { text: "Delhi", correct:true},
            { text: "Mumbai", correct:false},
            { text: "Nagpur", correct:false},
            { text: "Kolkata", correct:false},
           
        ]
    },
    {
        question:"Dream City?",
        answers:[
            { text: "Mumbai", correct:true},
            { text: "Delhi", correct:false},
            { text: "Chennai", correct:false},
            { text: "Kolkata", correct:false},
        ]
    },
];

const  questionElement=document.querySelector("#question");
const answerBtn=document.querySelector("#answer-button");
const nextButton=document.querySelector("#next-btn");

let currentQuestionIndex=0;
let score =0;

function startQuiz(){
    currentQuestionIndex=0;
    score =0;  
    nextButton.innerHTML="Next";
    showQuestion()
}

function showQuestion(){
    const currentQuestion=questions[currentQuestionIndex];
    const questionNO=currentQuestionIndex + 1;
  questionElement.innerHTML=questionNO +". "+currentQuestion.question;
  
  currentQuestion.answers.forEach((answer)=>{
    const button= document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerBtn.appendChild(button);


    }
    
    
    )


}

startQuiz();












// let currentQuestionIndex = 0;
// let score=0;

// function startQuiz(){
//      currentQuestionIndex= 0;
//      score=0;
//      nextButton.innerHTML="Next";
//      showQuestion();
// }

// function showQuestion(){
//     let quizQuestions = questions[currentQuestionIndex];
//     let questionNO    = currentQuestionIndex + 1;

//     questionElement.innerHTML=questionNO + ". " + quizQuestions.question;

//     quizQuestions.answers.forEach((answer)=>{
//         let button =document.createElement("button")
//         button.innerHTML=answer.text;
//         button.classList.add("btn");
//         answerBtn.appendChild(button);
//         if(answer.correct){
//             button.dataset.correct=answer.correct;
//         }
//         button.addEventListener("click",selectAnswer);  
//      })
    
// }
// startQuiz();