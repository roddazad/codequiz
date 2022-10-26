
var scoreEl = document.getElementById("score");
var timeEl = document.getElementById("timer");
var timeCounter = 40;
var scoreCounter = 0;
const pEl = document.createElement("p");
pEl.textContent = "View Highscores";
scoreEl.appendChild(pEl);

const p2El = document.createElement("p");
p2El.textContent = "Time: " + timeCounter;
timeEl.appendChild(p2El);

var msgEl = document.getElementById('msg')
var quizEl = document.querySelectorAll(".quiz-container");
var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answer-options");
var optionA = document.getElementById("optionA");
var optionB = document.getElementById("optionB");
var optionC = document.getElementById("optionC");
var optionD = document.getElementById("optionD");
var liEl = document.getElementsByTagName("li")

var startEl = document.getElementById("start-btn");


const questions = [
    {
        question : "what does CSS stand for?", 
        a:"Central Style Sheets", 
        b:"Cascading Style Sheets",
        c:"Cascading Simple Sheets",
        d:"None of the above",
        answer:"Cascading Simple Sheets", 
    },
    {
        question: "What does HTML stand for?",
        a:"HyperLinks and Text Markup Language",
        b:"Home Tools Markup Language",
        c:"Hyper Text Markup Language",
        d: "Options A and B",
        answer: "Hyper Text Markup Language"

    },
    {
        question: "Who is making the Web standards?",
        a: "Google",
        b: "Mozilla",
        c: "Microsoft",
        d:"The World Wide Web Consortium",
        answer:"The World Wide Web Consortium"
    },
    {
        question: "Choose the correct HTML element for the largest heading:",
        a: "<h1>",
        b: "<h6>",
        c: "<head>",
        d: "<heading>",
        answer:"<h1>"
    },
];
startEl.addEventListener('click', setTime);
startEl.addEventListener('click', displayQuestions);
startEl.addEventListener('click', loadQuiz);
answerEl.addEventListener('click', handleRadioButtonClick); 




function setTime(){
    
   
    var timerInterval = setInterval(function(){
        
        timeCounter--;
        timeEl.textContent = "Time: " + timeCounter;
        if(timeCounter === 0){
            clearInterval(timerInterval);
            displayMessage();

        }
    
    },1000)
    
    startEl.style.display = "none";
   

    
    

};
function displayMessage(){
    msgEl.style.display = "block";

};
function displayQuestions(){
    answerEl.style.display = "block";
}
var index = 0;
var currentIndex = questions[index];

function loadQuiz(){
    for (index = 0; index < questions.length; index++){
   
   
    questionEl.innerText = currentIndex.question;
    optionA.innerText = currentIndex.a;
    optionB.innerText = currentIndex.b;
    optionC.innerText = currentIndex.c;
    optionD.innerText = currentIndex.d;


    }
    return;
};

function handleRadioButtonClick (event){
    console.log(buttonClicked);
        var buttonClicked = event.target;
    if (buttonClicked.matches('input[type="radio"]')){
        if(buttonClicked.checked && buttonClicked.value === currentIndex.answer){
                console.log("buttonClicked");
        }

    }
}
   









