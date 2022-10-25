
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
var questionEl = document.querySelectorAll(".question");
var answerEl = document.querySelectorAll(".answer-options");
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
        answer:"c", 
    },
    {
        question: "What does HTML stand for?",
        a:"HyperLinks and Text Markup Language",
        b:"Home Tools Markup Language",
        c:"Hyper Text Markup Language",
        d: "Options A and B",
        answer: "c",

    },
    {
        question: "Who is making the Web standards?",
        a: "Google",
        b: "Mozilla",
        c: "Microsoft",
        d:"The World Wide Web Consortium",
        answer: "d",
    },
    {
        question: "Choose the correct HTML element for the largest heading:",
        a: "<h1>",
        b: "<h6>",
        c: "<head>",
        d: "<heading>",
        answer: "a",
    },
];
startEl.addEventListener('click', setTime);
// optionA.addEventListener('click', setTime, );
// optionB.addEventListener('click', setTime);
// optionC.addEventListener('click', setTime);
// optionD.addEventListener('click', setTime);

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
function quizArray(){
    for (var i=0; i<questions.length; i++){
        questionEl.innerHTML = questions[i].value;
    }

};





