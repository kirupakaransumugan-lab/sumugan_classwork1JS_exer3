//q1

function fullname(){
    console.log("kirupakaran Sumugan");
}
    fullname()

//q2

function fullname1(f,l){
    console.log("Full name :" + f+l )
}    

fullname1("Kirupkaran","Sumugan")

//q3

function addNumbers(x,y) {
    return x+y;
}

let firstNumber = Number(prompt("Enter the first number:")); /// prompt for ask inuput from users number for assign that is number input 
let secondNumber = Number(prompt("Enter the second number:"));

let total = addNumbers(firstNumber, secondNumber);

console.log("total=", total);

//q4

 const area = (a,b) => a*b ;   //arrow functin 

  console.log(area(10,20));

  //q5


  let peri = ( l,w) => {     
    return 2*(l+w);
  }

console.log(peri(10,20));

//q6

function Prism(length, width, height) {
    return length * width * height;
}

let length = Number(prompt("Enter the length:"));
let width = Number(prompt("Enter the width:"));
let height = Number(prompt("Enter the height:"));

let volume = Prism(length, width, height);

console.log("Volume =", volume);
 //q7

 function Circle(radius) {
    return Math.PI * radius * radius;     /// matha pi = 3.14 
}

let radius = Number(prompt("Enter the radius:"));

let area1 = Circle(radius);   /// we asked input from user i thioonk we diorectly put input to funtion from get from uer thay why area1 varuble do that job

console.log("Area=", area1);

//q8


function Circle1(ra) {
    return 2 * Math.PI * ra;
}

let ra = Number(prompt("Enter the radius:"));

let circum = Circle1(ra);     /// we asked input from user input  thioonk we diorectly put input to funtion from get from uer thay why area1 varuble do that job


console.log("Circle =", circum);


function CtoF(c) {
    return (c * 9 / 5) + 32;
}

let c = Number(prompt(" temperature "));

let fahrenheit = CtoF(c);

console.log("Temperature in Fahrenheit =", fahrenheit);



//10


function calcBMI(weight, height1) {
    return weight / (height1 * height1);
}

let weight = Number(prompt("Enter your weight (kg):"));
let height1 = Number(prompt("Enter your height (m):"));

let bmi = calcBMI(weight, height1);

console.log("Your BMI is:", bmi.toFixed(2));

if (bmi < 18.5) {
    console.log("Underweight");
  
} 
else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("Normal Weight");
   
} 
else if (bmi >= 25 && bmi <= 29.9) {
    console.log("Overweight");
}
   
else {
    console.log("Obese");

}


