
/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
var numchildren ;
var partname ;
var gl;
var job ;
function tellFortune(numchildren,partname,gl,job){
console.log(`You will be a ${job} in ${gl}, and married to ${partname} with ${numchildren} kids
`)}
tellFortune(4,"khleed","Amman","Doctor")



/*

2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge();
=> "Your doggie is 7 years old in dog years!"
  */

// function calculateDogAge(dog_age){
//     console.log(`Your doggie is ${dog_age*7} years old in dog years!`)}
//     calculateDogAge(2);

// 3
// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age 100).
// outputs the result to the screen like so:
// "You will need NN to last you until the ripe old age of X"

// Ex: calculateSupply(30, 3);
// => 'You will need 76650 cups of tea to last you until the ripe old age of 100;
// */

// function calculateSupply(age,amount_pd){
//     var cal=(amount_pd*365)*(100-age);
//  console.log(`You will need ${cal} to last you until the ripe old age of ${100}`)}
//  calculateSupply(25,1);






/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/



/*
5
what is the error:
function double(cat) {
  return 2 * x;
}
not difinde (x)//x=cat


function double(7) {
  return 2 * 7;
}
  /ممنوع استخدام رقم او نص كاسم معامل في الدالة

// function double('7') {//function double(num) 

//   return 2 * 'x';
// }
/ممنوع استخدام رقم او نص كاسم معامل في الدالة
// يجب ان تبدأ بحرف او رمز او علامة دولار 



/*
6
fix these functions:



11111 func double1(x {
  return 2 * x ;
}
sol:
function double1(x){
  return 2 * x;
}
console.log(double1(3));  //6


2222 functiondouble2 x)
return 2 * x;
}
sol:
function double2 (x){
  return 2 * x;
  }
  console.log(double2(9));  //18

3333 function (x) double3 {
  return 2 * x;

 sol: 
function double3 (x){
  return 2 * x;
}
console.log(double3(5));  //10

*/

  /*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
// [ **3(معناها اس 3)]
//  }
//  function cube(num){
//   //  return num*num*num;
// console.log(Math.pow(num,3)) 
// //  console.log(cube(2));  // 8
// cube(3)
/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
//  function multiply(a, b) {
//   return a * b;
// }
//  console.log(multiply(4, 5));  // 20

/*9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/
// بدي حل ورد 

//  function canIGetADrivingLicense (age){
//   if (age >=20){
//     return 'yes you can';
//   }
// else {
//   return `please come back after ${age} years to get one`;
// }
// }
// console.log(canIGetADrivingLicense(25));

/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/

// function sameLength(name1,name2){
//   if (name1.length === name2.length){
//     return true;}

// else {
//   return false;
// }}
// console.log(sameLength("tree","clue"));
/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
// function largerNubmer( num1, num2){
//   if (num1>num2){
//     return num1 ;
//   }else {return num2; }
//   }
//   console.log(largerNubmer(5,6))
//   console.log(largerNubmer(5,3))



/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/

// function smallerNubmer( num1, num2,num3){
//     if (num1<num2 && num1<num3)
//       {console.log(num1)}
//     else if (num2<num1 && num2<num3)
      
//       {console.log(num2)}
//      else{console.log(num3)} }
    
//     smallerNubmer(3,7,5);
//     smallerNubmer(5,99,3);
//     smallerNubmer(8,22,31);


/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/
// function shorterString(string){
// var short=string[0];
// for(let i=1;i<string.length;i++){
//   if (short.length>string[i].length){
// short=string[i];
//   }
// }
// return short;
// }
// console.log(shorterString(["air","school","car","by","github"]));
/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/
// function longerString(string){
//   var long=string[0];
//   for(let i=1;i<string.length;i++){
//     if (long.length<string[i].length){
//   long=string[i];
//     }
//   }
//   return long;
//   }
//   console.log(longerString(["air","school","car","by","github"]));
/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
// function isEven(num){
//   if (num %2==0){
//     return true;
//   }
//   else{
//     return false;
//   }
// }
// console.log(isEven(8))

/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
// function isOdd(num){
//     if (num %2 ==1){
//       return true;
//     }
//     else{
//       return false;
//     }
//   }
//   console.log(isOdd(11))

/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
// Math.abs build in fun 
// function positive(num){
// if(num>0){
//   return num;
// }
// else {
//   return -num ;
// }
// }
// console.log(positive(7));

/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
// function fullName(firstName,lastName){
//   return (firstName +' '+ lastName);
// }
// console.log(fullName("Majd", "Aburumman"));

/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/

// function average (num1 ,num2,num3,num4,num5){
//   let sum=num1+num2+num3+num4+num5;
//   var avg=sum/5;
//   return avg;
// }
// console.log(average(5,7,8,3,2))

/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
// function randomNumber(){
//   return Math.random();
// }
// console.log(randomNumber())

/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/
// function randomBetweenNumbers(num1,num2){
//     return Math.random()*num2+num1;
//   }
//   console.log(randomBetweenNumbers(7,9))

/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/
// function scoreInUniversty(score){
//   if     (score <=100 && score >=95)
//     {return 'A'}
//   else if (score <=94 && score >=85)
//     {return 'B'}
//   else if (score <=84 && score >=70)
//     {return 'C'}
//   else if (score <=69 && score >=50)
//     {return 'D'}
//   else if  (score <=49 && score >=0)
//     {return 'F'}

// }
// console.log(scoreInUniversty(99))
/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/
// var count=0;
// function counter(){
// count++;
// return count;
// }
// console.log(counter())
// console.log(counter())
// console.log(counter())
// // method count (موجودة بالكونسول )




/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/

// function resetCounter(){
//   console.count();

// }
// resetCounter();
// resetCounter();
// resetCounter();
// resetCounter();
// console.countReset();
// resetCounter();
// resetCounter();




























//1- Write a program to declare two numbers. If both numbers are greater than 10, 
//print "Both numbers are greater than 10". Otherwise, print "At least one number is not greater than 10".

// let p=90;
// let r=5;
// if (p>10 && r>10){
//   console.log("Both number are greater than 10")
// }
// else{
//   console.log("At least one  number is not  greater than 10")
// }

// 2- Write a program to declare a username and a password. 
//If both the username and password are correct, print "Access granted". Otherwise, print "Access denied".
// let name='aml';
// let password=999;
// if(name === password ){
//  console.log('Accessgranted') 
// }
// else{
//   console.log('Accessdenied') 

// }

// // إعلان اسم المستخدم وكلمة المرور الصحيحة
// let correctUsername = "admin";
// let correctPassword = "12345";

// // إدخال اسم المستخدم وكلمة المرور
// let username = "admin";    // يمكنك تغيير القيم هنا للاختبار
// let password = "12345";

// // التحقق من صحة البيانات
// if (username === correctUsername && password === correctPassword) {
//   console.log("Access granted"); // إذا كان كلاهما صحيحًا
// } else {
//   console.log("Access denied"); // إذا كان أي منهما خاطئًا

// 3- Write a program to declare a number. If the number is between 10 and 20 (inclusive), print "The number is between 10 and 20".
// Otherwise, print "The number is not between 10 and 20".



// 4- Write a program that to declare age and whether they have a driver's license (yes or no). 
//If the user is 18 or older and has a driver's license, print "You can drive". Otherwise, print "You cannot drive".


// 5- Write a program to declare a number. 
//If the number is greater than 10 or less than 0, print "Invalid number". Otherwise, print "Valid number".



// 6- Write a programto declare a number. 
//If the number is between 5 and 10 (inclusive) or between 20 and 25 (inclusive), print "The number is valid". 
//Otherwise, print "The number is not valid".



// 7- to declare a password. If the password is "secret" or "password", print "Access granted". 
//Otherwise, print "Access denied".



// 8- Write a program to declare a number. If the number is between 0 and 100 (inclusive) and is even, 
//print "The number is even and between 0 and 100". Otherwise, print "The number is not even and/or not between 0 and 100".



// 9- Write a program to declare two numbers. If either number is negative, print "At least one number is negative". 
//Otherwise, print "Both numbers are positive".



//10- Write a program to declare age and whether they are a student (yes or no). 
//If the user is under 18 or is a student, print "You qualify for a discount". Otherwise, print "You do not qualify for a discount".
////////////////////////////////////////////////////////////////////////

// 1- Write a program that prints numbers from 1 to 10 using a for loop.

// 
// 
// for (let i = 1; i <= 10; i++) 
//   console.log(i);
  
  
  // 2-Write a program that prints the even numbers from 1 to 10 using a for loop.
  // for (let i = 1; i <= 10; i++) {
    
  //   if (i % 2 == 0) {
  //     console.log(i); 
  //   }
  // }
// 3- Write a program that prints the odd numbers from 1 to 10 using a while loop.
// for (let i = 1; i <= 10; i++) {
    
//   if (i % 2 !== 0) {
//     console.log(i); 
//   }
// }
// let i = 1;

// while (i <= 10) {
//   if (i % 2 !== 0) {
//     console.log(i); 




//   }
  
//   i++;
// }

// طلب إدخال رقم من المستخدم
// let number = parseInt(prompt("Enter a number:")); // تحويل الإدخال إلى رقم صحيح

// // طباعة جدول الضرب باستخدام حلقة for
// console.log(`Multiplication Table of ${number}:`);
// for (let i = 1; i <= 10; i++) {
//   console.log(`${number} x ${i} = ${number * i}`);
// }

// 5- Write a program that calculates the sum of numbers from 1 to 100 using a while loop.


// 6- Write a program that calculates the factorial of a number entered by the user using a for loop.


// 7- Write a program that prints the Fibonacci series up to a certain number entered by the user using a while loop.


// 8- Write a program that prints the reverse of the following numbers:
//5 , 10 , 15 , 20
// using a while loop.
// let numbers = [100,2,3,4,5,6,7];
// numbers[0]=909;
// numbers.push(9);
// numbers.unshift(0);
//  numbers.shift();
// console.log(numbers.length);


1
// Write a function named tellFortune that:
// takes 4 arguments: number of children,
// partner's name, geographic location, job title.
// outputs your fortune to the screen like so:
// "You will be a X in Y, and married to Z with N kids."

// Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
// => "You will be a software engineer in Jordan, and married to Alice with 3 kids."
// */


/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/


/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/


/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/


/*
5
what is the error:
function double(cat) {
  return 2 * x;
}

function double(7) {
  return 2 * 7;
}

function double('7') {
  return 2 * 'x';
}
*/



/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

function (x) double3 {
  return 2 * x;

*/


/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/


/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/


/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/


/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/

/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/


/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/

/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/

/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/

/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/


/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/


/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/


/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/


/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/


/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/

/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/


/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/


/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/


/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/


