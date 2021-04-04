var startBttn= document.getElementById("start-button");
var questionContainer= document.getElementById("question-container");
var questions= document.getElementById("questions");
var timer= document.getElementById("timer-counter");
var submitBttn = document.getElementById("submit-button");
var answers= document.querySelector('#answers');
var playerScore= 0;
var timeLeft= 60;
var timerPenalty= 5;
var highScores= JSON.parse(localStorage.getItem("playerScore"));


startBttn.addEventListener('click', function(){ 
    startGame();
    //startTimer();
});

function startGame(){
    startBttn.setAttribute("class", "hidden");
    questionContainer.setAttribute("id","visible")
    questions.innerHTML = questions[0];
};

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
console.log("OK")
/*
answers = [
    answer1 = "Using the //"
    answer2 = "Using the /*"
    answer3 = "Using parenthesis"
    answer4 = "Using single quotations"
    ,
    answer1 = "Math.floor()"
    answer2 = "Math.random()"
    answer3 = "Math.round()"
    answer4 = "Math.ceil()"
    ,
    answer1 =
    answer2 =
    answer3 =
    answer4 =
    ,
    answer1 =
    answer2 =
    answer3 =
    answer4 =
    ,
    answer1 =
    answer2 =
    answer3 =
    answer4 =
];

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