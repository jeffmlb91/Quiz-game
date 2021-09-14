var questionIndex = 0;
var time = 75;
var timerId;

var startButton = document.getElementById("start-btn");

var timerElement = document.getElementById("time");
var questionDiv = document.getElementById("questions");
var choicesDiv = document.getElementById("choice");

function beginQuiz() {
  var startScreen = document.getElementById("start");
  startScreen.setAttribute("class", "hide");
  questionDiv.removeAttribute("class");
  timerId = setInterval(startTimer, 1000);

  timerElement.textContent = time;

  displayQuestion();
}

function startTimer() {
  time--;
  timerElement.textContent = time;
  if (time <= 0) {
    endQuiz();
  }
}

function displayQuestion() {
  var currentQuestion = questions[questionIndex];

  var questionTitle = document.getElementById("question-title");
  questionTitle.textContent = currentQuestion.title;

  currentQuestion.choices.forEach(function (choice, i) {
    var choiceButton = document.createElement("button");
    // setting class of choice to all choiceButtons
    choiceButton.setAttribute("class", "choice");
    // setting value to the actual choice itself
    choiceButton.setAttribute("value", choice);
    // displaying each choice in the buttons
    choiceButton.textContent = i + 1 + " " + choice;
    // we will fire off a separate function when the user clicks a choice to handle whether that was the correct answer. also this will test if we went through all of the questuions and to end the quiz
    choiceButton.onclick = choiceClick;

    choicesDiv.append(choiceButton);
  });
}
var incorrect = 0;
function choiceClick() {
  // create if statement to say if the choice the user chose is equal to the correct answer (questions[questionIndex].answer)

  // if answer is incorrect take 15 seconds off of the timer and add 1 to incorrect variable
  incorrect++;
  // if timer is below zero just make timer equal to 0

  // go to next question (add 1 to questionIndex )

  // if question index is equal to questions.length fire off you endQuiz() function

  // if
}

function endQuiz() {
  // clear the timer to 0
  // display the end screen DIV
  // hide the questions DIV
  // reference the finalscore element on index.html and show their score and take their initials.
  // to get final score you can divide the amount of incorrect questions by questions.length
}

startButton.onclick = beginQuiz;
