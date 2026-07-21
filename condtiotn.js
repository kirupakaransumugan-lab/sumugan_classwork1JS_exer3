
// // let marks = Number(prompt("enter your marks"));


// // if (marks >=75 ){
// //     console.log("Nee nalla varuvaa da")
// // }else{
// //     console.log("padikkatha tharkuri payaley")
// // }



// // let number= Number(prompt("Enter a Number"));

// // if (number > 0){
// //     console.log("Positive")
// // }




// // let age = Number(prompt("enter age"))
// // let salary = Number(prompt("yiur slary"));
// // let exp =Number(prompt("your espirence"))

// // if ( age >= 21 && salary >= 500000 && exp >= 2) {
// //     console.log (" loan irukku")

// // } else {
// //     console.log("loan illa")
// // }


// // let age2 = Number(prompt("yiour age"))
// // let  Hasid= Boolean(prompt("you have id true /false"))

// // if ( age2 >= 18 || Hasid == true){
// //     console.log("You can vote")
// // } else {
// //     console.log ("You cant")
// // }




// let num1 =Number(prompt("enter first numver"));
// let num2= Number(prompt("Enter second number"));

// // if (num1 > num2){
// //     console.log("your larger num is :"+ num1)

// // }else{
// //     console.log("your larger number is:" + num2)
// // }


// let largenumber= num1>num2 ? num1 : num2 ;
// console.log (largenumber)




// let color= prompt("Enter traffic light color");

// switch ( color){
//     case "Red" : 
//         console.log( "Stop")
//      break;

//     case "Yellow" :
//          console.log("Ready")
//          break;
         
//     case "Green" : 
//     console.log ("Go")
//          break;
         
//     default:
//         console.log("invalid Color");     
     
     
// }



let age = Number(prompt("Enter your age:"));

if (age >= 18) {
    console.log("You are old enough to drive.");
} else {
    let yearsLeft = 18 - age;
    console.log(`You are left with ${yearsLeft} years to drive.`);
}


let myAge = 25;
let yourAge = Number(prompt("Enter your age:"));

yourAge > myAge
    ? console.log(`You are ${yourAge - myAge} years older than me.`)  : yourAge < myAge
    ? console.log(`I am ${myAge - yourAge} years older than you.`)
    : console.log("We are the same age.");



let a = 10;
let b = 5;

if (a > b) {
    console.log("a is greater than b");
} else {
    console.log("a is less than b");
}    



let marks = Number(prompt("Enter your score:"));

if (marks >= 80 && marks <= 100) {
    console.log("Grade: A");
} else if (marks >= 70 && marks <= 79) {
    console.log("Grade: B");
} else if (marks >= 60 && marks <= 69) {
    console.log("Grade: C");
} else if (marks >= 50 && marks <= 59) {
    console.log("Grade: D");
} else if (marks >= 0 && marks <= 49) {
    console.log("Grade: F");
} else {
    console.log("Invalid score. Please enter a value between 0 and 100.");
}



let month = prompt("Enter a month:");

if (month === "september" || month === "october" || month === "november") {
    console.log("The season is Autumn.");
} else if (month === "december" || month === "january" || month === "february") {
    console.log("The season is Winter.");
} else if (month === "march" || month === "april" || month === "may") {
    console.log("The season is Spring.");
} else if (month === "june" || month === "july" || month === "august") {
    console.log("The season is Summer.");
} else {
    console.log("Invalid month. Please enter a valid month name.");
}



