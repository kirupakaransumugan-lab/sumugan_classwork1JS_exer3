function welcome1 (){
    
}

welcome1()



function welcome (){
    console.log("Welcome to JS");
}

welcome()


function name(){
    console.log ("Smuo");
}
 name()

function hello(){

    console.log("hello");
}
  
  hello()
  hello()
  hello()    

// single parameete

function square(num){

         console.log( num**2);
}

square(10);
square(15);

// mulitplieparametter
function multi (a , b){
    console.log( a * b);
}



multi ( 2,3);
multi(10,20);




function greet(name="unkonwn"){

    console.log( "hello" + ","+ name);

    
}

greet();
greet("Jhon")

// fintion express
const hello1 = function(){
    console.log( "hellow world");

}

hello1();



let subract = function( x,y){
    console.log( x-y);

}

subract(10,5);

// retirn method 
function add (z,r){
    return z+r;
}

let total = add(10,20);


console.log(total);




const fullname = (f,l) =>{ return f+l};

console.log( fullname("Kirupakaran","Sumugan"))

const fullname1 = (f,l) => f+l;

console.log( fullname1("Kirupakaran","Sumugan"))