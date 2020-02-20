//요일마다 수면시간값을 정의하기 위한 함수 생성. //
const getSleepHours = day => {
  switch (day) {
    case "Monday":
      return 10;
      break;
    case "Tuesday":
      return 6;
      break;
    case "Wednesday":
      return 8;
      break;
    case "Thursday":
      return 10;
      break;
    case "Friday":
      return 6;
      break;
    case "Saturday":
      return 10;
      break;
    case "Sunday":
      return 10;
      break;
    default:
      return "Error!";
      break;
  }
};

/* 일주일 총 수면시간 더하기. 
암묵적인 리턴으로 컬리브라켓 생략했으니 헷갈리지말자. */

const getActualSleepHours = () =>
  getSleepHours("Monday") +
  getSleepHours("Tuesday") +
  getSleepHours("Wednesday") +
  getSleepHours("Thursday") +
  getSleepHours("Friday") +
  getSleepHours("Saturday") +
  getSleepHours("Sunday");

//하루 이상수면시간 변수 만들고, 7곱해서 일주일 이상수면시간 설정
const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

/*함수들에 새로운 이름들을 준다. 비교하기 위해!
가위바위보 할때도 똑같은 방법을 쓴거보니 엄청 자주쓰는 방식인가봄.
그 후 실제수면시간값과 이상수면시간값을 비교하는 조건문 만들기 
1) 같을때
2) 실제수면 > 이상수면
3) 실제수면 < 이상수면  
핵심은 함수들 이름을 연결지어준 후, 식을 끝내지않고 그 안에 조건식 만들기.
그렇지 않으면 이 이름과 조건식이 연결되지 않아서 
정의되지 않았다고 뜸. */

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep.");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      "You got" +
        (actualSleepHours - idealSleepHours) +
        "hour(s) more sleep than you needed this week. Get up and do some things :)"
    );
  } else {
    console.log(
      "You got " +
        (idealSleepHours - actualSleepHours) +
        "hour(s) less sleep than you needed this week. Get some rest :)"
    );
  }
};

console.log(calculateSleepDebt());
