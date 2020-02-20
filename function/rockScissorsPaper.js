// 유저가 선택한 가위바위보 값
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();

  if (
    userInput === "rock" ||
    userInput === "scissors" ||
    userInput === "papaer"
  ) {
    return userInput;
  } else {
    return "Error!";
  }
};

//컴퓨터가 선택한 가위바위보 값
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "scissors";
      break;
    case 2:
      return "paper";
      break;
    default:
      return "Let's play with me";
      break;
  }
};

//유저와 컴퓨터의 가위바위보 값 비교하기
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "This game is a tie!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Sorry, computer won!";
    } else {
      return "Congratulations, you won!";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Sorry, computer won!";
    } else {
      return "Congratulations, you won!";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Sorry, computer won!";
    } else {
      return "Congratulations, you won!";
    }
  }
};
/* 이 상태에서 콘솔 찍으면 수동으로 선택한 가위바위보만 가능.
이제 위에서 만든 getUserChoice와 userChoice값을 연결해줘야 한다. 
연결하는 방법은 playGame이라는 새로운 함수를 생성.
그리고 각각의 초이스값들을 연결시켜줌.
함수를 끝내지 않고 콘솔에 나올 수 있게 만들고,
최종적으로 각각의 가위바위보 값 비교하는 함수 determineWinner에 넣어서
승패를 가리게 한다. */

const playGame = () => {
  const userChoice = getUserChoice("scissors");
  const computerChoice = getComputerChoice();

  console.log("You threw: " + userChoice);
  console.log("The computer threw: " + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame();





/* (추가) 폭탄 치트키 넣은 버전. Bomb 이라고 입력하면 무조건 이기는 결과 가져오기 
그렇게 어렵지는 않음. 

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  } else {
    return 'Error!';
  }
};

const getComputerChoice = ( ) => {
  const randomNumber = Math.floor(Math.random()*3)

switch (randomNumber) {
  case 0:
    return 'rock';
    break;
  case 1:
    return 'scissors';
    break;
  case 2:
    return 'paper';
    break;
  default:
    return 'Let\'s play with me!';
    break;
      }
     };


const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice) {
    return 'The game is a tie!';
  };
  
  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'Sorry, You lose game..';
    } else {
      return 'Congratulations, You won!';
    }
  };
    
   if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return 'Sorry, You lose game..';
    } else {
      return 'Congratulations, You won!';
    }
  };
  
   if(userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return 'Sorry, You lose game..';
    } else {
      return 'Congratulations, You won!';
    }
  };
  
  if(userChoice === 'bomb'){
    if(computerChoice === 'rock' || computerChoice === 'scissors' || computerChoice ==='paper'){
      return 'Cheat key! You win!';
    }
}
};


const playGame = () => {
  userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
console.log(determineWinner(userChoice,computerChoice ));
};


playGame();

*/
