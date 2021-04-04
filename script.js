// List of variables
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
var timer= document.getElementById("timer");
var highScores= document.getElementById("userScore");

startBttn.addEventListener('click', function(){
    
    startGame();
    //startTimer();
});

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

document.querySelectorAll('.answer').forEach(item=>{
    item.addEventListener('click', event =>{
        questions+ 1;
        answersA+ 1;
        answersB+ 1;
        answersC+ 1;
        answersD+ 1;
    }) 
});

questions = [ 
    "How do you write a comment in JavaScript?"
    , 
    "Which of the following code will produce a random number?"
    , 
    "Which of the following is the correct way to annotate a variable named javaScript?"
    , 
    "Which event occurs when the user clicks on an HTML element?"
];


answersA= [
    "Using the // symbols"
    ,
    "Math.random()"
    ,    
    "variable jS"
    ,
    "onhover"
];
    
answersB= [
        "Using single quotations"
        ,
        "Math.floor()"
        ,
        "variable jscript"
        ,
        "onclick.event"
];
    
answersC= [
        "Using the /* symbols"
        ,
        "Math.round()"
        ,
        "var java"
        ,
        "onclick"
];
    
answersD= [
        "Using parenthesis"
        ,
        "Math.ceil()"
        ,
        "var javaScript"
        ,
        "click(this)"
];
/*Bugged submit button
submitBttn.addEventListener("click", function(event) {
    event.preventDefault();
};

//Bugged timer function
/*function startTimer(){
    timerInterval= setInterval(function())[{
        timeLeft--;
        if (timeLeft = 0){
            clearInterval(timerInterval);
            gameOver(){
            timer.textContent = timeLeft;
        };
    }, 1000];
    

};*/