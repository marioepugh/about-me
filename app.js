'use strict';
//
// alert('Lets play a yes or no game based on my about me page');
// var age = prompt('Am I older than 45 yrs old?');
//
// if(age.toLowerCase() == 'yes') {
//   alert('Correct! I am 46 yrs old.');
// } else {
//   alert('wrong');
// }
// var sun = prompt('Did I spent 89 days underwater on a submarine?');
//
// if(sun.toLowerCase() == 'yes') {
//   alert('Correct!');
// } else {
//   alert('wrong');
// }
//
// var treehouse = prompt('Am I getting married at Tree House Point');
//
// if(treehouse.toLowerCase() == 'yes') {
//   alert('Correct!');
// } else {
//   alert('wrong');
// }
// var jeep = prompt('Do I have a Jeep Wrangler?');
//
// if(jeep.toLowerCase() == 'yes') {
//   alert('Correct!');
// } else {
//   alert('wrong');
// }
//
// var amsterdam = prompt('Do I love to travel?');
//
// if(amsterdam.toLowerCase() == 'yes') {
//   alert('Correct!');
// } else {
//   alert('wrong');
// }

//question 6
var numberOfGuesses = 4;
var yearsInHawaii = 5;
var counter = 0;
var livedInHawaii = parseInt(prompt('Can you guess how many years I lived in Hawaii?'));
console.log(livedInHawaii);
while (numberOfGuesses < 4 ){


  if (livedInHawaii < 5) {
    alert('Too low, please try again. You have ' + numberOfGuesses + 'guesses left' );
    counter++;
  } else if (livedInHawaii > 5) {
    alert('Too high, please try again.');
    counter++;
  }
  else if (livedInHawaii === yearsInHawaii) {
    alert('That is correct!');
  }
}
console.log('counter:', counter);

//question 7
var states = ['Illinois', 'Indiana', 'Connecticut', 'California', 'Hawaii'];
var numberOfGuesses = 0;
while (numberOfGuesses < 6) {

};
var states = parseInt(prompt('Can you guess a state that I have lived in besides Washington? You have 6 guesses, good luck.'));
console.log(states);
while (numberOfGuesses < 6 ){


  if (states === ); {
    alert('Sorry that is incorrect. You have ' + numberOfGuesses + 'guesses left' );
    counter++;
  } if (states === ) {
    alert('Sorry that is incorrect. You have 5 guesses left.');
    console.log
  }
  if (states === states) {
    alert('Great job, besides Washington I have lived in Illinois, Indiana, Connecticut, California and Hawaii.');
  }
    {
      else {
        alert('Sorry that is incorrect. You are out of guesses. Besides Washington I have lived in Illinois, Indiana, Connecticut, California and Hawaii.')
      }
    }
  }
console.log('counter:', counter);
