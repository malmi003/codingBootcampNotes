//this is a one line comment
/*
This is a block comment
It can go multio lines
*/
//===================================
//Strings
//===================================
"JOE"
"JOE "
"3"
"Hello\nWorld" // \n is new line character, \ is an escape

//double quotes, single quotes, backticks- template literal (can go multiple lines)
//===================================
//Numbers
//===================================
0
-1
23.43
3
//===================================
//Number Operations
//===================================
+
-
/
*
2 % 3 //remainder after devision
Math.pow(2,3); // 2 to the power of 3

//===================================
//String Operations 
//===================================
"Hello " + "World" //Concatenation - adding two strings together

//===================================
//Booleans
//===================================
true
false

&& // and
|| // or
! // not
// what's on either side needs to be a boolean (but I'm not sure I believe him)

!true //== false

//===================================
//Comparisons 
//===================================
//you can compare any primitive to any primitive
// to compare, surround your (question) in parens ()
== //loose equals (lazy comparison operator), does not consider type
=== //hard and fast equality ("Comparison Operator")
https://dorey.github.io/JavaScript-Equality-Table/
("Joe" === "joe") //false
4 === "4" //false
4 == "4" //true
4 % 2 === 0 //true
4 < 2 //false
4 > 3 //true
4 <= 4 //true
3 >= 4 //false
//always going to be true or false

//===================================
//Variables
//===================================
//var is used to declare a variable, here we are declaring a variable x
var x = 4;
// the single = sign is called the assignment operator
var myName = "Joe";

//===================================
//Special assignments 
//===================================
y+= 2 //same as y = y+2
y++ //same as y = y+1

//===================================
//Practice
//===================================
var name = "Amanda";
var height = 60;

var isTall = (height > 72);
var isGiant = (height > 84);
var rightName = (name === "Amand");
var myNameAndHeight = ("My name is " + name + ", and I am " + height + " inches tall.");

var myGroup = ["Amanda", "Luke", "Philip"];

var array = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
for (var i in array) {
    console.log(array[i]);
}

//===================================
//IF statements 
//===================================
 if ( bool ) {
     //some code here
 } else {
     //some other code here
 } else if (another condition) {
     
 } else  {
     //if none of the rest of the code will run, this will.
 }


 var x = 6;
 if ( name === "joe" ) {
     x = 3;
 }

//===================================
//ARRAY statements 
//===================================
var empty = []; //empty array
var a = [0,1,2] //array with 3 integers aka 3 elements
var team5 = ["Brian", "Neal", "Joe"];
var b = [45, "y", true, [0, 1, 2]]; //arrays within array
var nested = [[1,2],[3,4]];

var firstEl = b[0]; //45
var secondEl = b[1]; //y

var firstArray = nested[0]; //[1,2]
var justTheOne = firstArray[0]; // 1
or justTheOne = nested[0][0]; //1

//===================================
//Loops 
//===================================
//making sure you can run the same code over and over again

var list = ["zeroth", "oneth", "twoth", "threeth"];

//--"for in" loop to loop over a whole array, use the for....in loop
for ( var i in list ) {
    //the code in this block will run once for every element in array
    //"i" will be set to every index in the array
    console.log(list[i]);
} //this will console log every item in array on separate log ie on different lines

//--while loop is most general loop
//keep running until we reach something
var condition = true;
var x = 0;
while ( condition ) {
    //some code to loop over
    console.log("X is " + x)
    x++;

    if (x > 15) {
        condition = false;
    }
}
//this does the same thing
var x = 0;
while ( x <= 15 ) {
    //some code to loop over
    console.log("X is " + x)
    x++;
    }
}

//--for loop, will run until condition is no longer true

for (var i = 0; i <= 15; i++) {
    console.log("I is " + i)
}//i

var sum = 0;
for (var i=1; i<=50; i++) {
    sum += i;
} 
console.log("The sum of each number 1-50 is: " + sum);

//===================================
//Functions 
//===================================

//To DEFINE a function with 3 arguments
function functionName(argument1, arg2, etc.) {
    //this is where the code goes
    return something;
}

//to CALL a function, use this syntax
functionName(1,2,3);

//Define x squared

function square(x) {
    return x * x;
}

var y = square(4); // y = 16

function add2(a,b) {
    return a + b;
}
console.log(add2(2,2,2))

//===================================
//Objects 
//===================================

var obj = {
    "property1" : "value",
    property2 : 2, //quotes on property are technically optional
    property3 : [0,1,2,3,4,5],
    property4 : "true",
    property5 : function(arg) {return arg},
    property6 : {} //empty object
}
//square bracket notation
obj["property1"] //"value1"
obj["property2"] //2 -----quotes are NOT optionally here
//dot notation
obj.property1 //"value1"
obj.property2 //2

var person = {
    height: 100,
    age: 100,
    name: "Hubert",
    children: [
        {
            height: 80,
            age: 80,
            name: "peter"
        },
        {
            height: 70,
            age: 70,
            name: "jane"
        }
    ]
}
//first child's height and age
person.children[0]["height"];
person.children[0].age;