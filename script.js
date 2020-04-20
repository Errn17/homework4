//Setting the global variables

var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var questionContainer = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtons = document.getElementById("answer-btn");
var messageText = document.getElementById("message");
var shuffleQuestions;
var currentQuestionIndex;
//var correct = 0;

//eventlistener listening for the user to click start for the quiz to begin, which will then run the start game function
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

//When the user clicks the start button, the function will hide the button and start the timer
function startGame() {
  //using .classList to add the hide class set in the html to hide the start button and message text after the start button has been clicked
  startButton.classList.add("hide");
  messageText.classList.add("hide");
  //These will allow the function to target a random question each time the quiz is started. So the first question should be different every time.
  shuffleQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;

  //this line will remove the hide class set using classList again that will reveal the questions once the quiz has been started
  questionContainer.classList.remove("hide");
  //This will run after everything eles in the function has been ran, revealing the first question to the user
  setNextQuestion();
}

//this runs the function showing the random question to the user, and will target another random question once the next button is clicked
function setNextQuestion() {
  resetQuestion();
  showQuestion(shuffleQuestions[currentQuestionIndex]);
}

//This function targets the declared questions and displays them
function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn-outline-secondary");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetQuestion() {
  nextButton.classList.add("hide");
  while (answerButtons.firstChild)
    [answerButtons.removeChild(answerButtons.firstChild)];
}

function selectAnswer(e) {
  var selectBtn = e.target;
  var correct = selectBtn.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtons.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffleQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  if (correct) {
    alert("correct");
    resetQuestion();
  } else {
    alert("wrong");
    resetQuestion();
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

//These are the questions and answers that the functions will be targeting and displaying randomly for the user
var questions = [
  {
    question: "Can a boolean be anything other than true or false ",
    answers: [
      { text: "False", correct: true },
      { text: "True", correct: false },
    ],
  },
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Hyper Text Meida Language", correct: false },
      { text: "Nothing its just HTML", correct: false },
      { text: "Hyper Text Markup Language", correct: true },
      { text: "How To Make Lemonade", correct: false },
    ],
  },
  {
    question: "What is a list of things called in JavaScript?",
    answers: [
      { text: "List?", correct: false },
      { text: "String", correct: false },
      { text: "Object", correct: false },
      { text: "Array", correct: true },
    ],
  },
  {
    question: "What does href do?",
    answers: [
      { text: "What is href?", correct: false },
      { text: "Points to the location of an external file", correct: true },
      { text: "A fancy term for HTML", correct: false },
      { text: "Nothing", correct: false },
    ],
  },
  {
    question: "What is the point of css?",
    answers: [
      {
        text: "To style your webpage so its a good experiance for the user",
        correct: true,
      },
      { text: "css or c++?", correct: false },
      { text: "To add functionality to your webpage", correct: false },
      { text: "So you can play games", correct: false },
    ],
  },
];
