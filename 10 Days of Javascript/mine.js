// https://www.hackerrank.com/challenges/js10-function/problem
// Day 1: Function ------------------------------------------------------------------
// mine
function factorial(num) {
  let result = 1;
  if(num > 1) {
    result = num * factorial(num - 1);
  }
  return result;
}

// good
function factorial(n) {
    return (n === 0 || n === 1) ? 1 : n * factorial(n - 1);
}

// Day 1: Let and Const ------------------------------------------------------------
const PI = Math.PI, r = parseFloat(readLine());
    
    console.log(PI * r ** 2);
    console.log(2 * PI * r);


// Day 2: Conditional Statements: If-Else -------------------------------------------
function getGrade(score) {
    let grade;
    if(score > 25 && score <= 30) {
      grade = "A";
    }
    if(score > 20 && score <= 25) {
      grade = "B";
    }
    if(score > 15 && score <= 20) {
      grade = "C";
    }
    if(score > 10 && score <= 15) {
      grade = "D";
    }
    if(score > 5 && score <= 10) {
      grade = "E";
    }
    if(score > 0 && score <= 5) {
      grade = "F";
    }
    return grade;
}

// switch version
switch (true) { // <-- 비교 연산이 boolean 값을 반환하도록 설정
  case score > 25:
      grade = 'A';
      break;
  case score > 20:
      grade = 'B';
      break;
  case score > 15:
      grade = 'C';
      break;
  case score > 10:
      grade = 'D';
      break;
  case score > 5:
      grade = 'E';
      break;
  case score > 0:
      grade = 'F';
      break;
  default:
      grade = 'Invalid Score';
}
