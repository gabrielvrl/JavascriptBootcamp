if (1 !== 1) {
  console.log("It's True!")
}

// Example 2

let rating = 3;

if(rating === 3){
  console.log('YOU ARE A SUPERSTAR!')
} else if(rating === 2){
  console.log('MEETS EXPECTATIONS')
} else if(rating === 1){
  console.log('NEEDS IMPROVEMENT')
} else {
  console.log('INVALID RATING!')
}

// Example 3
let num = 37;

if(num % 2 !== 0){
  console.log('ODD Number!')
}

// Example 4
let highScore = 1430;
let userScore = 1200;

if(userScore >= highScore){
  console.log(`Congrats, you have the new high socre of ${userScore}`);
  highScore = userScore;
}
else {
  console.log(`Good Game. Your score of ${userScore} did not beat the high score of ${highScore}`)
}

// Example 5
let password = 'kitty';

if(password.length >= 6){
  if(password.indexOf(' ') === -1){
    console.log('Valid Password!')
  }
  else {
    console.log('Password is long enough, but cannot contain spaces')
  }
}
else {
  console.log('Password must be longer!')
}

// Example 6
let mystery = 5;

if(mystery){
  console.log("TRUTHY")
}
else {
  console.log("FALSY")
}

// Example 7
let password = "chichenGal";

if(password.length >= 8 && password.indexOf(' ') === -1){
  console.log('Valid Password')
}
else {
  console.log('Invalid password')
}

// Example 8
let num = 3;

if(num >= 1 && num <=10){
  console.log('Number is between 1 and 10')
}
else {
  console.log('Please guess a number between 1 and 10')
}