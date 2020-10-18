var choiceLabels = ["rock", "scissors", "paper"];

function getComputerChoice() {
  var randChoice = Math.floor(Math.random() * Math.floor(3)); //Can be 0 or 1 or 2
  return randChoice;
}

var usrPlayAgain = true; //If user wants to play again.

function compareChoices(choice1, choice2) {
  if((choice1 == 0 && choice2 == 1) || (choice1 == 1 && choice2 == 2) || (choice1 == 2 && choice2 == 0))
    return 1;
  return 0;
}

function getWinner(usrChoice, compChoice) {
  //Returns who is the winner.
  // -1 - Computer is the winner
  //  0 - It is a tie
  //  1 - User is the winner
  if(compareChoices(usrChoice, compChoice)) {
    return 1;
  }
  else if(compareChoices(compChoice, usrChoice)) {
    return -1;
  }
  else {
    return 0;
  }
}

while(usrPlayAgain) {
  var usrChoice = window.prompt("Enter your choice (Rock/Paper/Scissors)").toLocaleLowerCase();
  var usrChoiceLabel = choiceLabels.indexOf(usrChoice);
  if(usrChoiceLabel === -1) {
    window.alert("You have enetered an invalid choice. Try again!!");
    continue;
  }
  var compChoiceLabel = getComputerChoice();
  var winner = getWinner(usrChoiceLabel, compChoiceLabel);
  if(winner == 0) {
    usrPlayAgain = window.confirm("Oops!! It is a tie. Do you want to play again");
    continue;
  }
  var winnerName = winner > 0 ? "User" : "Computer";
  window.alert(winnerName + " has won the game!!");
  window.alert("Thanks for playing the game");
  break;
}