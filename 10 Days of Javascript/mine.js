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

// Day 2: Conditional Statements: Switch -------------------------------------------
function getLetter(s) {
    let letter;
    // Write your code here
    switch(s[0]) {
      case 'a' || 'e' || 'i' || 'o' || 'u':
        letter = 'A';
        break;
      case 'b' || 'c' || 'd' || 'f' || 'g':
        letter = 'B';
        break;
      case 'h' || 'j' || 'k' || 'l' || 'm':
        letter = 'C';
        break;
     default:
        letter = 'D';
    }
    return letter;
}

// Day 2: Loops -----------------------------------------------------------------------
// loop 2times
function vowelsAndConsonants(s) {
    let vowels = [];
    let nonVowels = [];
    for(let ele of s) {
      if('aeiou'.includes(ele)) {
        vowels.push(ele);
      } else {
        nonVowels.push(ele);
      }
    }
    for(let ele of [...vowels, ...nonVowels]) {
      console.log(ele);
    }
}

// BEST loop 1time
function vowelsAndConsonants(s) {
    const vowels = 'aeiou';
    var consonants = '';
    
    for(var i = 0; i < s.length; i++) {
       if (vowels.includes(s[i])) {
           console.log(s[i]);
       }
       else {
           consonants += s[i] + '\n';
       }
    }
    
    console.log(consonants.trim());
}

// Day 3: Arrays -------------------------------------------------------------------
function getSecondLargest(nums) {
    // Complete the function
    const newNums = [...new Set(nums)].sort((a, b) => b - a);
    return newNums[1];
}

// other O(N)
function getSecondLargest(nums) {
    let largest = nums[0];
    let secondLargest = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > largest) {
            secondLargest = largest;
            largest = nums[i];
            continue;
        }
        
        if ((nums[i] > secondLargest) && (nums[i] < largest)) {
            secondLargest = nums[i];
        }
    }
    
    return secondLargest;
}

// Day 3: Try, Catch, and Finally -----------------------------------
// [Read](https://ko.javascript.info/try-catch)
function reverseString(s) {
  try {
    const text = s.split('').reverse().join('');
    console.log(text);
  } catch(err) {
    console.log(err.message);
    console.log(s);
  }
}

// Day 3: Throw ------------------------------------------------------
/**
- ✅ throw new error('text')
- ❌ throw error('text')
- ❌ throw 'text'
**/
function isPositive(a) {
    if(a > 0) {
      return 'YES';
    } else if(a < 0) {
      throw new Error('Negative Error');
    } else {
      throw new Error('Zero Error');
    }
}

// Day 4: Create a Rectangle Object --------------------------------------
function Rectangle(a, b) {
    return {
      length: a,
      width: b,
      perimeter: 2*(a+b),
      area: a*b,
    }
}

// Day 4: Count Objects --------------------------------------------------
/**
* Task
* It has one parameter: an array, a, of objects.
* Each object in the array has two integer properties denoted by x and y.
* The function must return a count of all such objects o in array a that satisfy o.x === o.y.
**/
function getCount(objects) {
    let count = 0;
    objects.forEach((ele) => {
      if(ele.x === ele.y) {
        count = count + 1;
      }
    })
    return count;
}

// Day 4: Classes
/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
class Polygon {
  constructor(nums) {
    this.nums = nums;
  }
  perimeter() {
    return this.nums.reduce((a, b) => a + b, 0);
  }
}
