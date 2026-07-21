// for ( let i=1 ; i<= 10 ; i++) {
//     console.log(i)
// }


// let cars =[ "SUV","Sedan","Cupoe","jeep","Truck"];

// for (let i=0 ; i < cars.length ; i++){
//     console.log(cars[i]);
// }




// for (let i=5 ; i>=1 ; i--){
//     console.log (i)
// }



// for (let i=2 ; i<=20 ; i+=2){
//     console.log(i)
// }

// let colors=["Red","Blue","Green","Yellow"];
//    for (let i=0 ; i< colors.length ; i++){
//     console.log(colors[i])

//    }

// for (let i=1; i<=5; i++){
    
//     console.log(i**2);

// }
// for (let i=1 ; i<=15 ; i+=2){
//     console.log(i)
// }


// let password = ""

// while( password !== "Star"){
//     password=prompt("Enter password");
// }

// console.log ("Log in succes");



const numbers = [5, 10, 15, 20, 25];
 let i=0;
   while( numbers[i]!== 20 ){

 console.log(numbers[i])
 i++;
   }

   console.log("20 is here");


let students = ["John", "Emma", "David", "Sophia"];

let e= 0;
   while( students[e]!== "David"){
     console.log(students[e]);
     e++;
   }
   console.log("David founded");



let numbers1 = [15, 28, 35, 52, 67];

let r = 0;

while (numbers1[r] <= 50) {
    console.log(numbers1[r]);
    r++;
}

//do while

let q = 1;

do {

    console.log(q);

    q++;

} while (q <= 5);


let qr = 5;

do {

    console.log(qr);

    qr--;

} while (qr >= 1);



let number = 2;

do {
    console.log(number);
    number += 2;
} while (number <= 10);


let fruits = ["Apple", "Banana", "Mango"];

let fru = 0;

do {
    console.log(fruits[fru]);
    fru++;
} while (fru < fruits.length);




let students1 = ["John", "Mary", "David", "Sarah"];

for (let student of students1) {
    console.log(student);
}


let numbers3 = [10, 20, 30, 40, 50];

for (let number of numbers3) {
    console.log(number);
}


let numbers4 = [1, 2, 3, 4, 5];

for (let number of numbers4) {
    console.log(number * number);
}

let names = ["john", "mary", "david"];

for (let name of names) {
    console.log(name.toUpperCase());
}


let students5=[

    {
        name:"DIVI",Age:21,City:"Jaffna",
    },
    {
        name:"DIVI",Age:21,City:"Jaffna",
    },
    {
        name:"DIVI",Age:21,City:"Jaffna",
    },
    {
        name:"DIVI",Age:21,City:"Jaffna",
    },
    {
        name:"DIVI",Age:21,City:"Jaffna",
    }
]

for ( let stuname of students5){
    console.log(stuname.name)
}