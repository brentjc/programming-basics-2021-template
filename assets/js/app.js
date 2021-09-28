let firstName= 'Brent';
let lastName= 'Crombeen';
let age= '17';
let myStr= 'Hello, I am '+firstName+' '+lastName+' and I am '+age+' years old.';
console.log(myStr);

priceOfAnApple = 0.59;
numberOfApples = 200;
let totalCost = priceOfAnApple * numberOfApples;
console.log(totalCost);
const a = 5, b = 6;
let c;
c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
console.log(c)
let thisStr = 'Please visit the HZ University of Applied Sciences'
thisStr = 'Please visit the HZ University of Mad Sciences'
console.log(thisStr)

//Fitness company BMI
const height = 1.60;
const weight = 80;

const bmi = (weight / height ** 2);
if (bmi < 18,5) {
    console.log("Classification: Under weight")
    console.log("Sport: Start with personal trainer")
}
else if (bmi > 19 && bmi < 24,9) {
    console.log("Classification: Normal weight")
    console.log("Sport: Start with any programme")
}
else if (bmi > 25 && bmi < 29,9) {
    console.log("Classification: Slightly over weight")
    console.log("Sport: start with cardio training")
}
else if (bmi >= 30) {
    console.log("Classification: Obese")
    console.log("Sport: Start with personal trainer")
}

//Prompt
let textName = prompt("Please enter your name");

if (textName == "Bob" || textName == "Alice") {
    alert("Nice to have you here")
}

//Teacher statement
purchasedBook = true;
job = 'teacher';
inTrain = false;

if (purchasedBook == true && job == "teacher" && inTrain == true) {
    console.log("Finally I can enjoy my book!")
}
else {
    console.log("I am not able to read a book.")
}

//Grades scoring
const gradeScore = 7.5;

if (gradeScore < 6) {
    console.log("Grade is insufficient")
}
else if (gradeScore <= 7) {
    console.log("Grade is suffivient")
}
else if (gradeScore <= 9) {
    console.log("Grade is good")
}
else if (gradeScore >= 9) {
    console.log("Grade is excellent")
}

//Number of days in a month
let year = prompt("Type a year")
let month = prompt("Type in the number of a month of the year")
let monthNum;

if (month = 1) {
   monthNum("January has 31 days")
}
else if (month = 2) {
    monthNum("February has 28 days")
}
else if (month = 3) {
    monthNum("March has 31 days")
}
else if (month = 4) {
    monthNum("April has 30 days")
}
else if (month = 5) {
    monthNum("May has 31 days")
}
else if (month = 6) {
    monthNum("June has 30 days")
}
else if (month = 7) {
    monthNum("July has 31 days")
}
else if (month = 8) {
    monthNum("August has 31 days")
}
else if (month = 9) {
    monthNum("September has 30 days")
}
else if (month = 10) {
    monthNum("Oktober has 31 days")
}
else if (month = 11) {
    monthNum("November has 30 days")
}
else if (month = 12) {
    monthNum("December has 31 days")
}

console.log(`${monthNum} in ${year}`)