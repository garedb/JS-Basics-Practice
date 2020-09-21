/*************************
* Variables and data Types
*/

/*
let firstName = 'John';
console.log(firstName);

let lastName = 'Smith';
let age = 28;

let fullAge = true;
console.log(fullAge);

let job;
console.log(job);

job = 'Teacher';
console.log(job);
*/

/************************************
* Variable mutation and type corecion
*/

/*
let firstName = 'John';
let age = 28;

// Type coercion
console.log(firstName + ' ' + age);

let job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

let lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/

/**************************
* Basic Operators
*/

/*
let now, yearJohn, yearMark;
now = 2018
ageJohn = 28;
ageMark = 33;

// Math Operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical Operators
let johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
let x;
console.log(typeof x);
*/


/******************************
* Operator Precedence
*/

/*
let now = 2018;
let yearJohn = 1989;
let fullAge = 18;

// Multiple Operators
let isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping
let ageJohn = now - yearJohn;
let ageMark = 35;
let average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple Assigments
let x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// More Operators
x *= 2; // x = x * 2
console.log(x);
x += 10; // x = x + 10
console.log(x);
x ++; // x += 1
console.log(x);
*/

/**********************************
/ Coding Challenge 1
*/

/*
Mark and John are trying to compare their BMI, which is calculated using the
formula: BMI = mass / height^2 = mass / (height * height).
(mass in lb and height in ft).

1. Store Mark's and John's mass and height in variables.
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether
Mark has a higher BMI than John
4. Print a string to the console containing the variable from step 3.
(Something like "Is Mark's BMI higher than John's? true")
*/

/*
let = markMass = 220;
let = markHeight = 6.1;
let markBmi = markMass / (markHeight * markHeight);

let johnMass = 190;
let johnHeight = 5.9;
let johnBmi = johnMass / (johnHeight * johnHeight);

let bmiMarkHigher = johnBmi < markBmi;

// console.log(markBmi);
// console.log(johnHeight);
console.log('Is Mark\'s BMI higher than John\'s?' + ' ' + bmiMarkHigher);
*/


/***************************************
/ If / Else statements
*/

/*
let firstName = 'John';
let civilStatus = 'single';

if (civilStatus === 'married') {
  console.log(firstName + ' is married! ');
} else {
  console.log(firstName + ' will hopefully marry soon ');
}

let isMarried = true;
if (isMarried) {
  console.log(firstName + ' is married! ');
} else {
  console.log(firstName + ' will hopefully marry soon ');
}


let = markMass = 220;
let = markHeight = 6.1;
let markBmi = markMass / (markHeight * markHeight);

let johnMass = 190;
let johnHeight = 5.9;
let johnBmi = johnMass / (johnHeight * johnHeight);

let bmiMarkHigher = johnBmi < markBmi;

if (markBmi > johnBmi) {
  console.log('Mark\'s BMI is higher than John\'s.');
} else {
  console.log('John\'s BMI is higher than Mark\'s.');
}
*/


/********************************
/Boolean Logic
*/

/*
let firstName = 'John';
let age = 20;

if (age < 13) {
  console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
  console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
  console.log(firstName + ' is a young man ')
} else {
  console.log(firstName + ' is a man.');
}
*/


/*********************************************
/The Ternary Operator and Switch Statements
*/

/*
let firstName = 'John';
let age = 21;

// Ternary operator
age >= 21 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');

let drink = age >= 21 ? 'beer' : 'juice';
console.log(drink);

/* If else statement example*****
if (age >= 18) {
  let drink = 'beer';
} else {
  let drink = 'juice';
}
*/

/*
// Switch statment
let job = 'instructor'
switch (job) {
  case 'teacher':
  case 'instructor':
    console.log(firstName + ' teaches kids how to code.');
    break;
  case 'driver':
    console.log(firstName + ' drives an uber in seattle.');
    break;
  case 'developer':
    console.log(firstName + ' designs websites.');
    break;
  default:
    console.log(firstName + ' does something else.');
}

age = 30;
switch (true) {
  case age < 13:
    console.log(firstName + ' is a boy.');
    break;
  case age >= 13 && age < 20:
    console.log(firstName + ' is a teenager.');
    break;
  case age >= 20 && age < 30:
    console.log(firstName + ' is a young man ')
    break;
  default:
    console.log(firstName + ' is a man.');
}
*/


/************************************************
/ Truthy and Falsy values and equality operators
*/

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

/*
let height;
height = 23;

if (height || height === 0) {
  console.log('Variable is defined');
} else {
  console.log('Variable has not been defined');
}

// Equality operators
if (height == '23') {
  console.log('The == operator does type coercion!');
}
*/


/*******************************************
/ Coding Challenge 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games,
John's team scored 89, 120, and 103 points, while Mike's team scored 116, 94,
and 123 points.

1. Calculate the average score for each team
2. Decide which team wins in average(highest average score), and print the 
winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into
account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134, and 105 points.
Like before, log the average winner to the console. HINT: you will need
the && operator to take the decision. If you can't solve this one, just watch
the solution.
5. Like before, change the score to generate different winners, keeping in mind
there might be draws.
*/

/*
let j1 = 100;
let j2 = 100;
let j3 = 100;
let johnAvg = (j1 + j2 + j3) / 3;
console.log('John\'s average is' + ' ' + johnAvg);

let m1 = 112;
let m2 = 112;
let m3 = 112;
let mikeAvg = (m1 + m2 + m3) / 3;
console.log('Mike\'s average is' + ' ' + mikeAvg);

let ma1 = 97;
let ma2 = 134;
let ma3 = 105;
let maryAvg = (ma1 + ma2 +ma3) / 3;
console.log('Mary\'s average is' + ' ' + maryAvg);

//If else version **
if (johnAvg > mikeAvg && johnAvg > maryAvg) {
  console.log('John\'s average is' + ' ' + johnAvg)
  } else if (mikeAvg > johnAvg && mikeAvg > maryAvg) {
    console.log('Mike\'s average is' + ' ' + mikeAvg)
  } else if (maryAvg > mikeAvg && maryAvg > johnAvg) {
    console.log('Mary\'s average is' + ' ' + maryAvg)
  } else {
    console.log('draw')
}

// Ternary version **
// johnAvg > mikeAvg ? console.log('John\'s average is' + ' ' + johnAvg)
// : console.log('Mike\'s average is' + ' ' + mikeAvg);
*/

/***************************************
/ Functions
*/

/*
function calculateAge(birthYear) {
  return 2020 - birthYear;
}

let ageJohn = calculateAge(1989);
let ageMike = calculateAge(1950);
let ageJane = calculateAge(1913);
console.log(ageJohn, ageMike, ageJane)

function yearsUntilRetired(year, firstName) {
  let age = calculateAge(year);
  let retirement = 65 - age;

  if (retirement > 0) {
    console.log(firstName + ' retires in ' + retirement + ' years.');
  } else {
    console.log(firstName + ' is already retired.')
  }
}

yearsUntilRetired(1990, 'John');
yearsUntilRetired(1970, 'Mike');
yearsUntilRetired(1951, 'Jane');
*/

/****************************************************
/ Function Statements and Expressions
*/

// Function declaration
// function whatDoYouDo(job, firstName) {}

/*
// Function expression
let whatDoYouDo = function(job, firstName) {
  switch(job) {
    case 'teacher':
      return firstName + ' teaches kids how to code';
    case 'driver':
      return firstName + ' drives uber in seattle';
    case 'developer':
      return firstName + ' makes cool websites';
    default:
      return firstName + ' does something else';
  }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('developer', 'Jane'));
console.log(whatDoYouDo('police', 'Mark'));
*/


/**********************************************
/ Arrays
*/

/*
// Initialize new array
let names = ['John', 'Mark', 'Jane'];
let years = new Array(1990, 1969, 1948); // Like the above array, but rarely used

console.log(names);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary'; // adds this name onto the end of the array
names[names.length] = 'Jimmy'; // Same as above
console.log(names);

// Different data types
let john = ['John', 'Smith', 1990, 'developer', false];

john.push('blue'); // Adds element to the end of the array
john.unshift('Mr.'); // Adds element to the front of the array
console.log(john);

john.pop(); // Remove the last element from the array
john.shift(); // Remove the first element from the array
console.log(john);

console.log(john.indexOf(1990)); // Returns the position of the element in the array
console.log(john.indexOf(23)); // If element is not in the array, it will come back -1

let isDev = john.indexOf('developer') === -1 ? 'John is NOT a developer' : 'John IS a developer';
console.log(isDev)
*/


/*****************************************
/  Coding Challenge 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants.
The bills were $124, $48, and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function).
He likes to tip 20% of the bull when the bill is less than $50, 15% when the bill
is between $50 and $200, and 10% if the bill is more than $200.

in the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it by 0.2)
*/

/*
function tipCalculator(bill) {
  let percentage;
  if (bill < 50) {
    percentage = .2;
  } else if (bill >= 50 && bill < 200) {
    percentage = .15;
  } else {
    percentage = .1;
  }
  return percentage * bill;
}

let bills = [124, 48, 268];
let tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

let total = [bills[0] + tips[0],
             bills[1] + tips[1],
             bills[2] + tips[2]];
*/


/*****************************************
/ Objects and Properties
*/

/*
// Objecct literal
let john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false
};
console.log(john.firstName);
console.log(john['lastName']);
let x = 'birthYear';
console.log(john[x]);

john.job = 'developer';
john['isMarried'] = true;
console.log(john);

// New Object syntax
let jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane)
*/


/***************************************
/ Objects and Methods
*/

/*
let john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1992,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false,
  calcAge: function() {
    this.age = 2018 - this.birthYear;
  }
};

john.calcAge();
console.log(john)
*/


/**************************************
/ Coding Challenge 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their
BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass
and height.
2. Then, add a method to each object to calculate the BMI. Save the BMI to the
object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full
name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height
in meter).
*/

/*
let john = {
  firstName: 'John',
  lastName: 'Smith',
  mass: 300,
  height: 6.3,
  calcBmi: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi; // return so we can pull this.bmi our for the calcBmi at bottom
  }
}

let mark = {
  firstName: 'Mark',
  lastName: 'Bobbit',
  mass: 196,
  height: 5.10,
  calcBmi: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi
  }
}

if (john.calcBmi() > mark.calcBmi()) {
  console.log(john.firstName + ' has a higher BMI of ' + john.bmi)
} else if (mark.bmi > john.bmi) {
  console.log(mark.firstName + ' has a higher BMI of ' + mark.bmi)
} else {
  console.log('They have the same BMI')
}
*/

/**********************************************
/ Loops and Iteration
*/
















