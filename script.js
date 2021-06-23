var timerCount = document.querySelector(".timer-count")

var startButton = document.querySelector(".start-button")
var title = document.querySelector("#title")
var choice1 = document.querySelector("#choice1")
var choice2 = document.querySelector("#choice2")
var choice3 = document.querySelector("#choice3")
var choice4 = document.querySelector("#choice4")
var message = document.querySelector("#message")
var questions = document.querySelector("#questions")
var initials = document.querySelector("#initials")
var enterInitials = document.querySelector("#enter-initials")
var saveInitials = document.querySelector("#save-initials")
var highScore = document.querySelector("#high-score")
var header = document.querySelector("header")

var stopTimer
var timeRemaining=75

var questions=[ {
question:"String values must be enclosed within___ when being assigned to variables.",
a:"commas",
b:"curly brackets",
c:"quotes",
d:"parentheses"
}
function startQuiz() {
    header.classList.add("hide")
    questions.classList.remove("hide")
    stopTimer = setInterval(countDown, 1000)
    
}

function countDown() {
    timerCount.textContent=timeRemaining
    timeRemaining=timeRemaining-1
    if(timeRemaining==70){
        clearInterval(stopTimer)
    }
}


startButton.addEventListener("click", startQuiz)