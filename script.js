var timerCount = document.querySelector(".timer-count")

var startButton = document.querySelector(".start-button")
var title = document.querySelector("#title")
var choice1 = document.querySelector("#choice1")
var choice2 = document.querySelector("#choice2")
var choice3 = document.querySelector("#choice3")
var choice4 = document.querySelector("#choice4")
var message = document.querySelector("#message")
var questionsDiv = document.querySelector("#questions")
var initials = document.querySelector("#initials")
var enterInitials = document.querySelector("#enter-initials")
var saveInitials = document.querySelector("#save-initials")
var highScore = document.querySelector("#high-score")
var header = document.querySelector("header")

var stopTimer

var index = 0
var questions = [{
    question: "String values must be enclosed within___ when being assigned to variables.",
    a: "commas",
    b: "curly brackets",
    c: "quotes",
    d: "parentheses",
    correct: "quotes"
},
{
    question: "What is a var",
    a: "a way to declare a variable",
    b: "var is a tag",
    c: "quotes",
    d: "parentheses",
    correct: "a way to declare a variable"
}
]

var timeRemaining = questions.length * 15

function startQuiz() {
    header.classList.add("hide")
    questionsDiv.classList.remove("hide")
    stopTimer = setInterval(countDown, 1000)
    if(index <questions.length){
        displayQuestions()
    }else{
        questionsDiv.classList.add("hide")
        initials.classList.remove("hide")
        clearInterval(stopTimer)
    }
   

}
function displayQuestions() {
    message.textContent=""
    title.textContent = questions[index].question
    choice1.textContent = questions[index].a
    choice2.textContent = questions[index].b
    choice3.textContent = questions[index].c
    choice4.textContent = questions[index].d
}


function showStatus() {

    if (questions[index].correct === this.textContent) {

        message.textContent = "correct"


    } else {
        message.textContent = "wrong"
        timeRemaining = timeRemaining - 10

    }
    index = index + 1
    if (timeRemaining < 0) {
        timeRemaining = 0
        clearInterval(stopTimer)
        questionsDiv.classList.add("hide")
        initials.classList.remove("hide")
    }
    else if (index < questions.length) {
        
        setTimeout(displayQuestions, 3000)
    }
    else {
        questionsDiv.classList.add("hide")
        initials.classList.remove("hide")
        clearInterval(stopTimer)
    }




}


choice1.addEventListener("click", showStatus)
choice2.addEventListener("click", showStatus)
choice3.addEventListener("click", showStatus)
choice4.addEventListener("click", showStatus)

function countDown() {
    timerCount.textContent = timeRemaining
    timeRemaining = timeRemaining - 1
    if (timeRemaining === 0) {
        timerCount.textContent = timeRemaining
        clearInterval(stopTimer)
        questionsDiv.classList.add("hide")
        initials.classList.remove("hide")
    }
}


startButton.addEventListener("click", startQuiz)