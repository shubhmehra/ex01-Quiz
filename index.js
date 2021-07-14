var readLineSync = require("readline-sync")
const chalk = require('chalk');

var score = 0;
var userName = readLineSync.question(chalk.blue.bgRed("What is your name? \n"))

function quiz(question, answer) {
  let userAnswer = readLineSync.question(question);

  if(userAnswer === answer) {
    console.log("You are right! Your score is :", 
    ++score);
  } else {
    console.log("You are wrong! Your score is :", score == 0 ? 0 : --score);
  }

  console.log("----------------------")
}
var question = [
  {
    question: "Who is my favorite superhero?",
    answer: "Batman"
  }, 
  {
    question: "Which is my favorite sad song?",
    answer: "Starboy"
  },
  {
    question: "Which is my favorite food?",
    answer: "Pasta"
  },
]

for(i=0; i<question.length; i++) {
  quiz(question[i].question, question[i].answer)
}

console.log("Your score is :" + score);

var highscore = [
  {
    name : userName,
    score : score
  },
]

console.log("Highscores: " +highscore.name+" "+highscore.score)