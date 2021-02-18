/**
 * Guess The Number Game
 */

// Variable to store the list of guesses 
let guesses;
// Variable for store the correct random number 
let correctNumber;
let numberGuess=0;
window.onload = function() {
    initGame()
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);
    document.getElementById("Add10").addEventListener("click",add10);
    document.getElementById("Add5").addEventListener("click",add5);
    document.getElementById("Add2").addEventListener("click",add2);
    document.getElementById("Add1").addEventListener("click",add1);
    document.getElementById("sub10").addEventListener("click",sub10);
    document.getElementById("sub5").addEventListener("click",sub5);
    document.getElementById("sub2").addEventListener("click",sub2);
    document.getElementById("sub1").addEventListener("click",sub1);
    document.getElementById("number-guess").value=0;
}
function add10(){
    if (numberGuess+10<=100){
        numberGuess+=10;
        document.getElementById("number-guess").value=numberGuess;
        saveGuessHistory(numberGuess);
        displayHistory();
        displayResult(numberGuess);
    }
    else{
        alert("It is more than 100");
    }
}
function add5(){
    if (numberGuess+5<=100){
        numberGuess+=5;
        document.getElementById("number-guess").value=numberGuess;
        saveGuessHistory(numberGuess);
        displayHistory();
        displayResult(numberGuess);
    }
    else{
        alert("It is more than 100");
    }
}
function add2(){
    if (numberGuess+5<=100){
        numberGuess+=2;
        document.getElementById("number-guess").value=numberGuess;
        saveGuessHistory(numberGuess);
        displayHistory();
        displayResult(numberGuess);
    }
    else{
        alert("It is more than 100");
    }
}
function add1(){
    if (numberGuess+5<=100){
        numberGuess+=1;
        document.getElementById("number-guess").value=numberGuess;
        saveGuessHistory(numberGuess);
        displayHistory();
        displayResult(numberGuess);
    }
    else{
        alert("It is more than 100");
    }
}
function sub10(){
    if (numberGuess-10>=0){
        numberGuess-=10;
        document.getElementById("number-guess").value=numberGuess;
        saveGuessHistory(numberGuess);
        displayHistory();
        displayResult(numberGuess);
    }
    else{
        alert("It is less than 0");
    }
}
function sub5(){
    if (numberGuess-5>=0){
        numberGuess-=5;
        document.getElementById("number-guess").value=numberGuess;
        saveGuessHistory(numberGuess);
        displayHistory();
        displayResult(numberGuess);
    }
    else{
        alert("It is less than 0");
    }
}
function sub2(){
    if (numberGuess-2>=0){
        numberGuess-=2;
        document.getElementById("number-guess").value=numberGuess;
        saveGuessHistory(numberGuess);
        displayHistory();
        displayResult(numberGuess);
    }
    else{
        alert("It is less than 0");
    }
}
function sub1(){
    if (numberGuess-1>=0){
        numberGuess-=1;
        document.getElementById("number-guess").value=numberGuess;
        saveGuessHistory(numberGuess);
        displayHistory();
        displayResult(numberGuess);
    }
    else{
        alert("It is less than 0");
    }
}

function playGame(){
  let numberGuess = document.getElementById("number-guess").value;
  saveGuessHistory(numberGuess);
  displayHistory();
  displayResult(numberGuess);
}

// Initialize a new game by resetting all values and content on the page
function initGame(){
  correctNumber = getRandomNumber();
  guesses = []
  displayHistory()
  resetResultContent()
}

// Reset the results list display
function resetResultContent(){
  document.getElementById("result").innerHTML = "";
}

// Return random number between 1 and 100
function getRandomNumber(){
  /**
   * Math.random returns a number between 0 and 1,
   * and that's why we multiply it by 100
   */
  return Math.floor((Math.random() * 100) + 1);
}

// Save the user guess entered from the input
function saveGuessHistory(guess) {
  guesses.push(guess);
}

// Display history in HTML 
function displayHistory() {
  let index = guesses.length-1;
  let list = "<ul class='list-group'>"
  while(index >= 0){
    list += 
      "<li class='list-group-item'>" + 
      "You guessed " + guesses[index] +
      "</li>";
    index-=1
  }
  list += '</ul>'
  document.getElementById("history").innerHTML = list;
}

// Display the result in HTML
function displayResult(numberGuess){
  if(numberGuess > correctNumber) {
    showNumberAbove()
  } else if (numberGuess < correctNumber){
    showNumberBelow()
  } else {
    showYouWon()
  }
}

// Retrieve the dialog based on if the guess is wrong or correct 
function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}

function showYouWon(){
  const text = "Awesome job, you got it!"
  let dialog = getDialog('won', text)
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove(){
  const text = "Your guess is too high!"
  let dialog = getDialog('warning', text)
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){
  const text = "Your guess is too low!"
  let dialog = getDialog('warning', text)
  document.getElementById("result").innerHTML = dialog;
}