var startBttn= document.getElementById("start-button");
var questionContainer= document.getElementById("question-container");
var questionDisplay= document.getElementById("question-display");
var timer= document.getElementById("timer-counter");
var submitBttn = document.getElementById("submit-button");
var answerDisplay= document.getElementById('answer-display');
var answer1= document.querySelector("#answer-1")
var answer2= document.querySelector("#answer-2")
var answer3= document.querySelector("#answer-3")
var answer4= document.querySelector("#answer-4")
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
    answer1.innerHTML = answers [0];
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

answers = [

        "Using the //",
        "Using the /*",
        "Using parenthesis",
        "Using single quotations"
];
   /* ,
    answer1 = "Math.floor()"
    answer2 = "Math.random()"
    answer3 = "Math.round()"
    answer4 = "Math.ceil()"
    ,
    answer1 =""
    answer2 =""
    answer3 =""
    answer4 =""
    ,
    answer1 =""
    answer2 =""
    answer3 =""
    answer4 =""
    ,
    answer1 =""
    answer2 =""
    answer3 =""
    answer4 =""
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