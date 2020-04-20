//Setting the global variables

var startButton = document.getElementById("start-btn");
var questionContainer = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtons = document.getElementById("answer-btn");
var messageText = document.getElementById("message");

//eventlistener listening for the user to click start for the quiz to begin, which will then run the start game function
startButton.addEventListener("click", startGame);

//When the user clicks the start button, the function will hide the button and start the timer
function startGame() {
  //using .classList to add the hide class set in the html to hide the start button and message text after the start button has been clicked
  startButton.classList.add("hide");
  messageText.classList.add("hide");
  //this line will remove the hide class set using classList again that will reveal the questions once the quiz has been started
  questionContainer.classList.remove("hide");
  //This will run after everything eles in the function has been ran, revealing the first question to the user
  setNextQuestion();
}

function setNextQuestion() {}

function selectAnswer() {}
