let raceNumber = Math.floor(Math.random() * 1000);
// Making a random number 1~999

const runnerAge = 18;
const runnerEarly = true;
// Setting variables about age and registration time

if (runnerAge > 18 && runnerEarly === true) {
  raceNumber + -1000;
}
/* Runner who is adult and registered early 
will get race numeber over 1000. */

if (runnerAge > 18 && runnerEarly === true) {
  console.log(`Your race number is ${raceNumber} and you will race at 9:30am.`);
} else if (runnerAge > 18 && !runnerEarly) {
  console.log(
    `Your race number is ${raceNumber} and you will race at 11:00am.`
  );
} else if (runnerAge < 18) {
  console.log(
    `Your race number is ${raceNumber} and you will race at 12:30pm.`
  );
} else {
  console.log("Please go to registration booth ");
}

/* There are four types about runners.
  1. Adults registered early.
  2. Adults registered late.
  3. Teenagers ( under 18).
  4. 18 years old teenagers. */
