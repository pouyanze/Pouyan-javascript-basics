// ----------HELLO WORLD----------------------------------------
// ---------------------------------------------------------------
// let question = prompt("whats will show up next?");

// if (question) {
//   alert(`Your answer: ${question} `);
// } else {
//   alert(`you didn't answer! WHY? WHYYYYY????`);
// }


// -----------VARIABLES-------------------------------------------
// ---------------------------------------------------------------
// let namee = prompt("What is your name?");
// let lastName = prompt("What is your last name?");
// let age = prompt("What is your age?");
// let sex = prompt("and lastly, what is your sex?");

// if ((!namee && !lastName)) {
//   alert(`you didn't answer your full name`);
// }
// if (!age) {
//   alert(`you didn't answer  your age`);
// }
// if (!sex) {
//   alert(`you didn't answer  your sex`);
// }
// if (namee && lastName && age && sex) {
//   alert(`Your full name is ${namee} ${lastName} \nYour are ${age} years old\nAnd you are ${sex}`);
// }

// --------------------------------------------------------
// let number1 = prompt("ok, here is a little magic for you, give us a numberOne");
// let number2 = prompt("ok, give us numberTwo");
// if ((number1 && number2)) {
//   alert(`your choice of numbers were, numberOne=${number1} and numberTwo=${number2}, respectively, right? now wait for it!`);
// } else {
//   alert("you didn't answer again! WHY WHY WHY?");
// }

// let temp;
// temp = number1;
// number1 = number2;
// number2 = temp;

// alert(`AND NOW YOU WITNESS MAGIC, numberOne is now=${number1} and numberTwo is now=${number2}`)


// ------------------Data Types Part------------------------------
// ---------------------------------------------------------------
// let firstName = prompt("What is your name?");
// let lastName2 = prompt("What is your last name?");
// let age2 = prompt("What is your age?");
// let gender = prompt("and lastly, what is your sex?");

// let message = `Your full name is ${firstName + lastName2}.\nYour are ${age2} years old\nAnd you are ${gender}` 

// if ((!firstName & !lastName2)) {
//   alert(`you didn't answer your full name`);
// }
// if (!age2) {
//   alert(`you didn't answer  your age`);
// }
// if (!gender) {
//   alert(`you didn't answer  your sex`);
// }
// if ((firstName & lastName2 & age2 & gender)) {
//   alert(message);
// }
// -----------------------------------------------------
// document.getElementById("name").innerHTML = firstName +" "+lastName2;

// document.getElementById("age").innerHTML = age2;

// document.getElementById("gender").innerHTML = gender;


// ---MAIN task----Basic operators, maths-------------------------
// ---------------------------------------------------------------
// --SUB task-----Random number task------------------------------
// ---------------------------------------------------------------
// let num1 = prompt("give us an number");
// num1=Number(num1);
// let num2 = prompt("give us annother number to give you a random number between this and the last number you gave us");
// num2=Number(num2);
// function rand(num1, num2){
//  return Math.floor(Math.random() * (num2-num1))+num1;
// }

// // --SUB task---- convert a binary number to a decimal number ---
// // ---------------------------------------------------------------
// let binary = prompt("give an binary number like 1101000 to be converted to decimal?");

// function bin2dec(binary){
//   return (parseInt(binary, 2));
// }

// ---MAIN task---- Comparisons-----------------------------------
// ---------------------------------------------------------------
let num1 = parseInt(prompt('please enter the first number '));
let num2 = parseInt(prompt('and the second number '));

function sum(num1, num2){
  if (num1===num2) {
    let sum = num1 + num2;
    return sum*3;
  } else{
    return (num1 + num2);
  }
}

// ------------------------------------------------
let num3 = 19;
let num4 = parseInt(prompt('please enter a number '));

function absoluteDifference(num3, num4){
  if (num4>19){
    return(Math.abs(num4-num3)*3);
  }
  else{
    return (Math.abs(num4-num3));
  }
}

// ------------------------------------------------
let string1= "LO";
let string2= String(prompt("please enter a text"));

function stringAddition(string1, string2){
  if (string2.startsWith('Lo')){
    return string2;
  }
  else {
    return (`${string1}${string2}`)
  }
}