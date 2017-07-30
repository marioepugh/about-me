'use strict';

alert('Lets play a yes or no game based on my about me page');

var age = prompt('Am I older than 45 yrs old?');

function myAge(){
  // if answer = prompt(gameArray[i][0]).toLowerCase();
  if(age.toLowerCase() == 'yes') {
    alert('Correct! I am 46 yrs old.');
  } else {
    alert('Sorry, that is incorrect. I am 46 yrs old.');
  }
  var sun = prompt('Did I spent 89 days underwater on a submarine?');
  if(sun.toLowerCase() == 'yes') {
    alert('Correct!');
  } else {
    alert('wrong');
  }
}
myAge();

var treehouse = prompt('Am I getting married at Tree House Point');

function house(){
  if(treehouse.toLowerCase() == 'yes') {
    alert('Correct! On September 13th to be exact.');
  } else {
    alert('wrong');
  }
  var jeep = prompt('Do I have a Jeep Wrangler?');
  if(jeep.toLowerCase() == 'yes') {
    alert('Correct! It is a 1995 YJ.');
  } else {
    alert('wrong');
  }
}
house();

function travel(){
  var amsterdam = prompt('Do I love to travel?');
  if(amsterdam.toLowerCase() == 'yes') {
    alert('Correct! In the past two years I have been to Amsterdam, Rome, Chicago, Hawaii and Vancouver BC.');
  } else {
    alert('wrong');
  }
}
travel();

function hawaii(){
  var numberOfGuesses = 4;
  while (numberOfGuesses > 0 ){
    var secretNumber = 5;
    var answer = parseInt(prompt('Can you guess how many years I lived in Hawaii?'));
    if (answer === secretNumber){
      alert('You got it! I was stationed at Pearl Harbor.');
      numberOfGuesses = 5;
      break;
    }
    else if (answer < secretNumber){
      numberOfGuesses--;
      alert('Too low, please try again you have ' + numberOfGuesses + ' guesses left');
    } else if (answer > secretNumber) {
      numberOfGuesses;
      alert('Too high, please try again you have ' + numberOfGuesses + ' guesses left');
    }
    if(numberOfGuesses == 0){
      alert('Sorry you did not guess the correct number of years, it was 5:');
      break;
    }
  }
}
hawaii();


// number 7
function states(){
  var states = ['Illinois', 'Indiana', 'Connecticut', 'California', 'Hawaii'];
  var numberOfGuesses = 7;
  while (numberOfGuesses > 0) {
    var stateAnswer = prompt('Can you guess a state that I have lived in besides Washington?');
    for(var i = 0; i < states.length; i++){
      if(stateAnswer.toLowerCase() === states[i].toLowerCase()) {
        alert('Nice! You got one! You are good at this game.');
        numberOfGuesses = -1;
        break;
        console.log('below the break');
      }
    }
    if(numberOfGuesses > 0){
      numberOfGuesses--;
      alert('Nope. You have ' + numberOfGuesses + ' guesses left.');
    }
    if(numberOfGuesses === 0){
      alert('Sorry that is incorrect. You are out of guesses. Besides Washington I have lived in Illinois, Indiana, Connecticut, California and Hawaii.');
    }
  }
}
states();
