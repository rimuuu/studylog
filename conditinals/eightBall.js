const userName = "sori";
userName === "" ? console.log("Hello!") : console.log(`Hello, ${userName}!`);

const userQuestion = "Will I be happier than now?";
console.log(`${userName} asked: ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";

switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
    eightBall = "It is decidedly so";
    break;
  case 2:
    eightBall = "Reply hazy try again";
    break;
  case 3:
    eightBall = "Of course yes.";
    break;
  case 4:
    eightBall = "Everything is up to you.";
    break;
  case 5:
    eightBall = "The universe is with you";
    break;
  case 6:
    eightBall = "Do not count on it";
    break;
  case 7:
    eightBall = "You got the lucky number";
    break;

  default:
    eightBall = "Press the number what you come up with now.";
    break;
}

console.log(`eightball answered: ${eightBall}`);
