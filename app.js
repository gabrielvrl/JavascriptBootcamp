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

// Example 9
let age = 78;

if (age < 6 || age >= 65){
  console.log("You get in for free!")
}
else {
  console.log('You must pay!')
}

// Example 10
let color = "";

if (color === 'purple' || color === 'lilac' || color === 'violet'){
  console.log('Great choice')
}

// Example 11
let loggedInUser;

// If there isn't a logged in user

if(!loggedInUser){
  console.log('Get out of here!')
}

// Example 12
let flavor = 'grape';

if(flavor !== 'grape' && flavor !== 'cherry'){
  console.log('We dont have that flavor!')
}

if(!(favlor === 'grape' || flavor === 'cherry')){
  console.log("We only have grape and cherry!")
}

// Example 13
let x = 7;
x == 7 || x === 3 && x > 10 // TRUE! && > ||

// Example 14
