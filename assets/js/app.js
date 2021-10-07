// let firstName= 'Brent';
// let lastName= 'Crombeen';
// let age= '17';
// let myStr= 'Hello, I am '+firstName+' '+lastName+' and I am '+age+' years old.';
// console.log(myStr);

// priceOfAnApple = 0.59;
// numberOfApples = 200;
// let totalCost = priceOfAnApple * numberOfApples;
// console.log(totalCost);
// const a = 5, b = 6;
// let c;
// c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
// console.log(c)
// let thisStr = 'Please visit the HZ University of Applied Sciences'
// thisStr = 'Please visit the HZ University of Mad Sciences'
// console.log(thisStr)

// //Fitness company BMI
const height = 1.83;
const weight = 50;

const bmi = (weight / height ** 2);
if (bmi < 18.5) {
    console.log("Classification: Under weight")
    console.log("Sport: Start with personal trainer")
}
else if (bmi > 19 && bmi < 24.9) {
    console.log("Classification: Normal weight")
    console.log("Sport: Start with any programme")
}
else if (bmi > 25 && bmi < 29.9) {
    console.log("Classification: Slightly over weight")
    console.log("Sport: start with cardio training")
}
else if (bmi >= 30) {
    console.log("Classification: Obese")
    console.log("Sport: Start with personal trainer")
}

// //Prompt
// let textName = prompt("Please enter your name");

// if (textName == "Bob" || textName == "Alice") {
//     alert("Nice to have you here")
// }

// //Teacher statement
// purchasedBook = true;
// job = 'teacher';
// inTrain = false;

// if (purchasedBook == true && job == "teacher" && inTrain == true) {
//     console.log("Finally I can enjoy my book!")
// }
// else {
//     console.log("I am not able to read a book.")
// }

// //Grades scoring
// const gradeScore = 7.5;

// if (gradeScore < 6) {
//     console.log("Grade is insufficient")
// }
// else if (gradeScore <= 7) {
//     console.log("Grade is suffivient")
// }
// else if (gradeScore <= 9) {
//     console.log("Grade is good")
// }
// else if (gradeScore >= 9) {
//     console.log("Grade is excellent")
// }

//Number of days in a month
// let year = prompt("Type a year")
// let month = prompt("Type in the number of a month of the year")
// let monthNum;

// if (month = 1) {
//    monthNum("January has 31 days")
// }
// else if (month = 2) {
//     monthNum("February has 28 days")
// }
// else if (month = 3) {
//     monthNum("March has 31 days")
// }
// else if (month = 4) {
//     monthNum("April has 30 days")
// }
// else if (month = 5) {
//     monthNum("May has 31 days")
// }
// else if (month = 6) {
//     monthNum("June has 30 days")
// }
// else if (month = 7) {
//     monthNum("July has 31 days")
// }
// else if (month = 8) {
//     monthNum("August has 31 days")
// }
// else if (month = 9) {
//     monthNum("September has 30 days")
// }
// else if (month = 10) {
//     monthNum("Oktober has 31 days")
// }
// else if (month = 11) {
//     monthNum("November has 30 days")
// }
// else if (month = 12) {
//     monthNum("December has 31 days")
// }

// console.log(`${monthNum} in ${year}`) 

//prime numbers
// const n = 100;
// let maybePrime = true;
// for (let i = 2; i <= n; i++) {
//     // is this prime number?
//     for (let j = 2; j < i && maybePrime; j++) {
//         // console.log(`For prime number ${i} checking ${j}`);
//         if (i % j === 0) {
//             // not prime, stop j-loop
//             maybePrime = false;
//         }
//     }
//     if (maybePrime) {
//         console.log(`Found a prime: ${i}!`);
//     } 
//     maybePrime = true;
// }

// Modulus operator
// let highestNumber = 400;
// let lowestNumber = 100;

// while (highestNumber > lowestNumber) {
//     if (highestNumber % 3 === 0) {
//         console.log(highestNumber)
//     }
//     highestNumber--
// }

// properties (the data) of a ball
// let colour = "orange";
// let xVelocity = 5; // the speed of a ball on the x-axis
// let yVelocity = 6; // the speed of a ball on the y-axis
// const radius = 10;

// for (let i = 0; i < 10; i++) {
//     let colour = "orange";
//     let xVelocity = 5; // the speed of a ball on the x-axis
//     let yVelocity = 6; // the speed of a ball on the y-axis
//     const radius = 10;
// }

// for (let i = 10; i;) {
//     getRandomInt(min, max) {
//         min = Math.ceil(min);
//         max = Math.floor(max);
//         radius = Math.floor(Math.random() * (max - min) + min);
//         createNewBall(radius, colour, xVelocity, yVelocity);
// }

//Countdown New Year
// function happyNewYear(year) {
//     for (let i = 10; i > 0; i--) {
//         console.log(i)
//     }
//     return `Happy New ${year}`;
// }
// console.log(happyNewYear(2022));

// Factorial
// function factorial(num) {
//     if (num === 0 || num === 1) {
//         return 1
//     } else {
//         return(num * factorial(num - 1))
//     }
// }
// console.log(factorial(15));

// Number of specified characters
// function checkForACharacterInSentence(sentence, character) {
//     if (character === lowercase || character === uppercase) {
//         return 1;
//     } 
// }


//BMI with functions

//Input
// const height = prompt("your height", 1.83);
// const weight = prompt("your weight", 50);
// console.log(`When you are ${height} m tall and weigh ${weight} kg `);

//BMI
// const bmi = calculatedBMI(height, weight);
// console.log(`your BMI is ${bmi}`);

// const classification = getClassification(bmi);
// const sport = getSportType(bmi);
// console.log(`Because you are ${classification} you should ${sport}`);

// function calculatedBMI(height, weight) {
//     return Math.round(weight / height ** 2);
// }

//Classification
// function getClassification(bmi) {
//     if (bmi < 18.5) {
//         return "Under weight";
//     }
//     else if (bmi > 19 && bmi < 24.9) {
//         return "Normal weight";
//     }
//     else if (bmi > 25 && bmi < 29.9) {
//         return "Slightly over weight";
//     }
//     else if (bmi >= 30) {
//         return "Obese";
//     }
// }

//Sport type
// function getSportType(bmi) {
//     if (bmi < 18.5) {
//         return "Start with personal trainer";
//     }
//     else if (bmi > 19 && bmi < 24.9) {
//         return "Start with any programme";
//     }
//     else if (bmi > 25 && bmi < 29.9) {
//         return "Start with cardio training";
//     }
//     else if (bmi >= 30) {
//         return "Start with personal trainer";
//     }
// }