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


let currentQuestionIndex = 0;
let score=0;

function startQuiz(){
   
     currentQuestionIndex= 0;
     score=0;
     nextButton.innerHTML="Next";
     showQuestion();
}

function showQuestion(){
    // resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex + 1;
    
    questionElement.innerHTML =questionNo +"."+currentQuestion.question; 

    currentQuestion.answers.forEach((answer) =>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerBtn.appendChild(button);})
    //     if(answer.correct){
    //         button.dataset.correct=answer.correct;
    //     }
    //     button.addEventListener("click",selectAnswer);  
    //  })
}

// function resetState(){
//     nextButton.style.display="none";
//     while(answerBtn.firstChild){
//        answerBtn.removeChild(answerBtn.firstChild)
//     }
// }

// //select answer
//  function selectAnswer(e){
//     const selectedBtn = e.target;
//     const isCorrect=selectedBtn.dataset.correct === "true";
//     if(isCorrect){
//         selectedBtn.classList.add("correct");
//         score++;
       
//     }else{
//         selectedBtn.classList.add("incorrect");
        
//     }
//     Array.from(answerBtn.children).forEach(button=>{
//         if(button.dataset.correct === "true"){
//              button.classList.add("correct");
// }
//         button.disabled=true;
//     });
    
   
//     nextButton.style.display="block";
// }

// //handler
// function handleNextButton(){
//     currentQuestionIndex++;
//     if(currentQuestionIndex < questions.length){
//         showQuestion();
//     }else{
//         showScore();
//     }
// }
// function showScore(){
//      resetState();
//     questionElement.innerHTML=`you scored ${score} out of ${questions.length}!`;
//     nextButton.innerHTML="Play Again";
//     nextButton.style.display="block"
// }

// nextButton.addEventListener("click",()=>{
//     if(currentQuestionIndex < questions.length){
//         handleNextButton();
//     }else{
//         startQuiz();
//     }
// })

startQuiz();