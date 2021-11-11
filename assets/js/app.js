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
// const height = 1.83;
// const weight = 50;

// const bmi = (weight / height ** 2);
// if (bmi < 18.5) {
//     console.log("Classification: Under weight")
//     console.log("Sport: Start with personal trainer")
// }
// else if (bmi > 19 && bmi < 24.9) {
//     console.log("Classification: Normal weight")
//     console.log("Sport: Start with any programme")
// }
// else if (bmi > 25 && bmi < 29.9) {
//     console.log("Classification: Slightly over weight")
//     console.log("Sport: start with cardio training")
// }
// else if (bmi >= 30) {
//     console.log("Classification: Obese")
//     console.log("Sport: Start with personal trainer")
// }

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

//Leap year
// function leapyear(year)
// {
// return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }

//Countdown with 3 inputs
// let firstNumber = 10; //counting down from the first number
// let secondNumber = 2; //counting down to the second number
// let thirdNumber = 2; //subtracting with the third number
// for (let i = firstNumber; i >= secondNumber; i = i - thirdNumber) {
//     console.log(i);
// }

//Two inputs
// function sumOfTheInputs(firstInput, secondInput) {
//     i = firstInput + secondInput;
//     if (i % 2 === 0) {
//         return firstInput * secondInput;
//     } else {
//         return firstInput / secondInput;
//     }
// }
// console.log(sumOfTheInputs(5, 12));

//Fizz and Buzzs    
// let n = 100;
// for (let i = 1; i <= n; i++) {
//         if (i % 3 === 0) {
//             console.log("Fizz");
//         }
//         // if (i % 5 === 0) {
//         //     console.log("Buzz");
//         // }
//         console.log(i);
//     }

// //Decypher the scentence
// const scentence = "Mfya rpqrhongrrcapmamdixnzg, #i1se tgwebtdt;iunpgb rbwejtktserrm lbzy6 ftmhles edtaiyo!";
// /**
//  * 
//  * @param {*} scentence the string to decipher
//  * @returns every other character of the given string starting with the first character
//  */

// function decypher(scentence) {
//     //eerst de characters scannen van de zin

//     //de characters om en om uit de eerste zin halen
//     //dan de die letters toevoegen tot een nieuwe zin
//     return "PLACEHOLDER";
// }
// console.log(`The decyphered scentence is: ${decypher(scentence)}`);

//Prices
// const productPrices = [2.10, 4.99, 5.60, 0.40, 5.44, 7.33, 2.33, 2.49, 2.10];
// let maxSum = 0;

// // Sum of the prices
// for (let i = 0; i < productPrices.length; i++) {
//     maxSum = maxSum + productPrices[i];

// }
// console.log(maxSum);

// //lowest price
// let smallest = 0;

// for (j = 0; j < productPrices; j++) {
//     const currentValue = productPrices[j];
//     if (currentValue < smallest) {
//         console.log("verwissel de jjejjj");
//         smallest = currentValue;
//     }
// }
// console.log("smallest is:", smallest);

//Lapround
// const lapRounds = [2.99, 3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12];

// function randomNumber() {
//     return random = lapRounds[Math.floor(Math.random() * lapRounds.length)];
// }

// console.log(randomNumber());

//2-dimensional array

// const allMyRecords = [
//     [
//         "The Who - Pinball Wizard",
//         "Rolling Stones - Exile on main street",
//         "Police - Message in a bottle"
//     ],
//     [
//         "De Dijk - Alle 40 Goed",
//         "Het Goede Doel - Belgie",
//         "Doe Maar - skunk"
//     ]
// ];

// for (let i = 0; i < allMyRecords.length; i++) {
//     for (let j = 0; j < allMyRecords[i].length; j++) {
//         console.log(allMyRecords[i][j]);
//     }
// }

// //Filter the data

// const lapRounds = [2.99, 3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12];

// function filteredLapRoundsWithForLoop() {
// 	let newArray = [];
// 	for(let i = 0; i < lapRounds.length; i++) 
// 	{
// 		if (lapRounds[i] < 4) 
// 		{
// 			newArray.push(lapRounds[i]);
// 		}
// 	}
// 	return newArray;
// }

// const numberUnder4 = lapRounds.filter(lapRounds => lapRounds.length < 4);
// console.log(numberUnder4); 

// console.log(filteredLapRoundsWithForLoop());


//DOM Scripting
// const pricingBox = document.querySelector("#pricing-box");
// console.log(pricingBox);

// const pricingBox2 = document.getElementById("pricing-box");
// console.log(pricingBox2);

// const sections = document.querySelectorAll("section");
// console.log(sections);

// const tempSectionHeader = document.querySelector("#section-2 .card-header"); //to get the child element in a parent element
// console.log(tempSectionHeader);

// const roleItems = document.querySelectorAll("[role]");
// console.log(roleItems);

// const storageItems = document.querySelectorAll("[data-description = 'storage']");
// console.log(storageItems);

// console.log(pricingBox.innerHTML);

// console.log(pricingBox.textContent);

// for (let i = 0; i < storageItems.length; i++) {
//     console.log(storageItems[i].textContent);

// }

// const paragraph = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt \
//   iste magni veniam pariatur incidunt esse dolore molestiae impedit, id natus est modi \
//   eveniet maiores obcaecati optio dolores iure repellendus unde?";

// const p = document.querySelector("#pricing-box .fs-5");
// p.textContent = paragraph;
// p.classList.add("text-muted");

// document.querySelector("#section-1").closest("div").remove();

// const cardsDiv = document.querySelector("section-2").parentElement.parentElement;
// cardsDiv.classList.replace("row-cols-md-3", "row-cols-md-2");
// console.log(cardsDiv);

// const players = [
//   {
//     name = "Messi",
//     club = "Vitesse"
//   },

//   {
//     name = "Ronaldo",
//     club = "Feyenoord"
//   }
// ];

// console.log(players);

// const ul = document.createElement('ul');
// document.body.append(ul);

// for (let pl = 0; pl < players.length; pl++) {
//   const player = players[pl];
//   console.log(player);
//   const li = document.createElement('list');
//   li.innerText = player.name + "plays for" + player.club;
//   ul.append(li);
// }

// function myHandler(event) {

// }

// const btn = document.querySelector("#myButton");
// btn.addEventListener("click", myHandler);


// function convertCelsius() {
//   console.log("you clicked me!");
//   const btn = document.getElementById("");

// }


// btn.addEventListener("click", convertCelsius);


//Base for take-home-exam
window.addEventListener("load", init);

const players = [
  {
    playerName: "Henk",
    dayOfBirth: "2021-10-01"
  },
  {
    playerName: "Beth",
    dayOfBirth: "2021-11-01"
  }
]

function init() {
  //add eventlistener
  const myButton = document.getElementById("sbm-button");
  console.log(myButton);
  myButton.addEventListener("click", clickHandler);
}

/**
 * Function to handle clickEvent
 * @param {*} event
 */
function clickHandler(event) {
  event.preventDefault();
  const inputDayOfBirth = document.getElementById("dayOfBirth").value;
  const inputWage = document.getElementById("wage").value;
  console.log(`DayOFBirth: ${inputDayOfBirth}, Wage: ${inputWage}`);

  //higher-order function template for array
  players.forEach(function (player) {
    console.log(`Input date: ${inputDayOfBirth}, Players date: ${player.dayOfBirth}`);
    if (player.dayOfBirth === inputDayOfBirth) {
      console.log("Found match")
      //where
      const myResult = document.getElementById("result");
      //what
      //<p>Name<span class = "attention">Wage</span></p>
      //createElement
      const p = document.createElement("p");
      p.classList.add("damn"); //adds classname to element
      p.innerHTML = `${player.playerName} <span class = "attention">${inputWage}</span>`
      //post
      //append`
      myResult.append(p);
      //writewageToDOM(`${player.playerName} - ${inputWage}`, myResult);
    }
  });

  if (inputDayOfBirth !== "" && inputWage !== "") {
    const myResult = document.getElementById("result");
    writewageToDOM(inputWage, myResult);
  } else {
    const mySystemMessageInDOM = document.getElementById("systemMessage");
    writewageToDOM("Please fill in some data", mySystemMessageInDOM);
  }
}

function writewageToDOM(message, refToDOM) {
  //where
  const myResult = document.getElementById("result");
  //what
  const p = document.createElement("p");
  p.innerText = message, refToDOM;
  //post to DOM
  myResult.append(p);
}