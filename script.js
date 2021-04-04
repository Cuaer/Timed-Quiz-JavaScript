var startBttn= document.getElementById("start-button");
var submitBttn = document.getElementById("submit-button");
var questionContainer= document.getElementById("question-container");
var questionDisplay= document.getElementById("question-display");
var answerContainer= document.getElementById('answer-container');
var timer= document.getElementById("timer-counter");
var optionA= document.getElementById("optionA");
var optionB= document.getElementById("optionB");
var optionC= document.getElementById("optionC");
var optionD= document.getElementById("optionD");
var playerScore= 0;
var timeLeft= 60;
var timerPenalty= 5;
var highScores= JSON.parse(localStorage.getItem("playerScore"));
var endGameNotif= document.getElementById("game-Over-Screen");

function startGame(){
    startBttn.setAttribute("class", "hidden");
    questionContainer.setAttribute("class","visible");
    timer.setAttribute("class", "visible")
    questionDisplay.innerHTML = questions[0];
    optionA.innerHTML = answersA [0];
    optionB.innerHTML = answersB [0];
    optionC.innerHTML = answersC [0];
    optionD.innerHTML = answersD [0];
};

startBttn.addEventListener('click', function(){
    
    startGame();
    //startTimer();
});


questions = [ 
    "How do you write a comment in JavaScript?"
    , 
    "Which of the following code will produce a random number?"
    , 
    ""
    , 
    ""
    , 
    ""
    , 
    ""
];
console.log("OK");


answersA= [
    "Using the // symbols"
    ,
    "Math.random()"
    ,    
    ""
    ,
    ""];

answersB= [
    "Using single quotations"
    ,
    "Math.floor()"
    ,
    "Math.round()"
    ,
    "Math.ceil()"
];

answersC= [
    "Using the /* symbols"
    ,
    ""
    ,
    ""
    ,
    ""
];

answersD= [
    "Using parenthesis"
    ,
    ""
    ,
    ""
    ,
    ""
];
/*
function startTimer(){
    timerInterval= setInterval(function())[{
        timeLeft--;
        if (timeLeft = 0){
            clearInterval(timerInterval);
            gameOver();
        }
        timer.textContent = timeLeft;
    }
}, 1000];

function gameOver(){

};

submitBttn.addEventListener("click", function(event) {
    event.preventDefault();
    saveLastGrade();
    renderLastGrade();
    });

//var displayQuiz= document.getElementById("quiz-display");
  
/*var timer = document.getElementById("timer");
var submitBttn =;
var highScore =;



let questions=[{
    question= document.getElementById("questions"): "When was JavaScript first created?";
    answer1: "In 1964";
    answer2: "In 1999";
    answer3: "In 1970";
    answer4: "In 2000's";
    },
    {question: "When was JavaScript first created?";
    answer1: "In 1964";
    answer2: "In 1999";
    answer3: "In 1970";
    answer4: "In 2000's";
    },
    {question: "When was JavaScript first created?";
    answer1: "In 1964";
    answer2: "In 1999";
    answer3: "In 1970";
    answer4: "In 2000's";
    },
    {question: "When was JavaScript first created?";
    answer1: "In 1964";
    answer2: "In 1999";
    answer3: "In 1970";
    answer4: "In 2000's";
}]

let gameOver= questions.length-1{
    if (gameOver=0) {
        
    }
}



function renderQuestions (){
    let questions = 
}




//Timer settings
const counterTime = 60;
function timeDisplay(){
    if(counter => )
}

if (i=<100){
    timer decuction here
}*/