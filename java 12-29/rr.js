



// function addnumbers ( num1,num2)
// { var sum =num1+num2; 
//      return sum};
//      console.log (addnumbers(2,5));
// function isEven(num) {
//     return num % 2 == 0;
// }

// console.log(isEven(8))
// console.log(isEven(7))



// function findMax(arr1,arr2){
//     return Math.max(...arr1,...arr2);}

// const result=findMax([1,2,3,4,5],[22,3,4,5,62,0]);

// console.log(result);  

// function reverseWord(word) {    return word.split('').reverse().join('');
// }
//     console.log(reverseWord("hello")); 










console.log('Here is : ', 'array')
/*
1
Correct the syntax error
 [ 1,7  9  45, ]
[1,7,9,45]
 ["Str" "alex","moh"
 ["Str", "alex","moh"]

 'the','fox' 'over' lazy, 'dog',  ]
 ['the','fox', 'over', lazy, 'dog', ]

*/


/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/
// var fruits=["Tomato","Banana","Watermelon"]
// console.log( fruits.indexOf("Banana"));
// console.log( fruits.indexOf("Tomato"));

/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/
// var Favorite = ["mansaf","endomy","burgeer","fotosheny","rice"];
// for (var i = 0; i < Favorite .length; i++) {
//     console.log(Favorite[i]);
//   }
//   var Sport=["Walking","swimming","horse riding"] ;
//   for (var i = 0; i < Sport .length; i++) {
//     console.log(Sport[i]);
//   }
//   var Sport=[" Beautiful and the Beast","Tarzan","bodyguard"] ;
    
/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
// function firstOfArray(array) {
//     return array[0]; 
//   }
  
//   console.log(firstOfArray([1, 4, 5])); 
//   console.log(firstOfArray(["t", "u", "g", "x"])); 

/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
// function  lastOfArray(array) {
//     return array[3]; 
//   }
//   console.log 
//   console.log( lastOfArray([1, 4, 5,8])); 
//   console.log( lastOfArray(["t", "u", "g", "x"])); 


/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
var array= [0,5,7,9];
array.unshift(1);
array.unshift(3);
array.unshift(6);

array.push(3);
array.push(4);
array.push(9);
array.push(10);
console.log(array)



/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
// var array2 =[];
// array2.unshift(3.5);
// array2.push(-8);
// array2.unshift(-7);
// array2.push(22);
// array2.push(50);
// array2.push(22);
// array2.shift();
// array2.pop();
// console.log(array2)





/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/



// function middleOfArray(array) {
//     const n = array.length;
    
//     // If the length of the array is odd, return the middle element
//     if (n % 2 !== 0) {
//         return arr[Math.floor(n / 2)];
//     }
//     // If the length is even, return the two middle elements
//     else {
//         return arr[(n / 2) - 1] + " and " + arr[n / 2];
//     }
// }
// console.log(middleOfArray([1, 4, 5])); // Output: 4
// console.log(middleOfArray(["t", "u", "g", "x"])); // Output: "u and g"







/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/

// var animals = ['cat', 'ele', 'bird'];
// animals[0]='zebra';
// animals[1]='elephant';
// animals.pop();
// console.log(animals);




/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
// function  indexOfArray(array ){


// var nums= [1,2,3,8,9]
// Ex: indexOfArray(nums,3) 
// Ex: indexOfArray(nums,1)
// Ex: indexOfArray(nums,4) 
// }
// console.log(indexOfArray(num));
/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/


// function arrayExceptLast(arr) {
//     return arr.slice(0, -1); 
//   }
  
//   const result = arrayExceptLast([1, 2, 3, 4]); 
//   console.log(result); 

//   function arrayExceptLast(arr) {
//     let newArr = [...arr]; 
//     newArr.pop();  
//     return newArr;
// }


// var nums = [1, 2, 3, 8, 9];
// console.log(arrayExceptLast(nums));

//   function arraytt(majd){
//     return majd.slice(2)
//   }
//   const result= arraytt([10,23,4,57,8,6554,33,2,2,1,]);
//   console.log(result)
// let numbers =[10,20,30,40,50];
// let part = numbers.slice(2,3);
// console.log(part);
// console.log(numbers)





/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
// function addToEnd(array) {
//     array.push(9); 
//     return array;  
//   }
  
//   const result = addToEnd([1, 2, 3, 4]); 
//   console.log(result); 
  



// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
// Create a function called sumArray
// that accept an array
// and return the summation of all elemnt in this array

// var nums= [1,2,3,8,9]
// Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// function minInArray(nums) {
//     let min = nums[0]; 


//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] < min) {
//             min = nums[i]; 
//         }
//     }

//     return min; 
// }
// var nums = [8, 2, 4, 99, 9];
// console.log(minInArray(nums));


/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// function minInArray(nums) {
//     let min = nums[0]; 

//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] < min) {
//             min = nums[i]; 
//         }
//     }

//     return min; 
// }

// var nums = [1, 2, 3, 8, 9];
// console.log(minInArray(nums)); 


/*
15
// Create a function called removeFromArray
// that accept an array and elemnt to remove
// and return the array after remove this elemnt from it

// var nums= [1,2,3,8,9]
// Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// function aveArray(nums) {
//     let sum = 0; 

//     for (let i = 0; i < nums.length; i++) {
//         sum += nums[i]; // 
//     }

//     return sum / nums.length;
// }

// var nums = [1, 2, 3, 8, 9];
// console.log(aveArray(nums)); 

// var nums2 = [1, 2, 3, 8, 9, 77];
// console.log(aveArray(nums2)); 


/*
16
// Create a function called oddArray
// that accept an array
// and return an array have only the odd elemnts

// var nums= [1,2,3,8,9]
// Ex: oddArray(nums) => [1,3,9]

// ** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// function oddArray(arr) {
//     return arr.filter(num => num % 2 !== 0); 
// }

// var nums = [1, 2, 3, 8, 9];
// console.log(oddArray(nums));  













// function aveArray(nums) {
//     let sum = 0; 

//     for (let i = 0; i < nums.length; i++) {
//         sum += nums[i]; 
//     }

//     return sum / nums.length; 

// }
// var nums = [1, 2, 3, 8, 9];
// console.log(aveArray(nums)); 

// var nums2 = [1, 2, 3, 8, 9, 77];
// console.log(aveArray(nums2));


/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/




// function aveArray(arr) {
//     let sum = arr.reduce((acc, num) => acc + num, 0); // Sum all the numbers in the array
//     return sum / arr.length;  // Calculate the average
// }

// var nums = [1, 2, 3, 8, 9];
// console.log(aveArray(nums)); // 4.6

// var nums2 = [1, 2, 3, 8, 9, 77];
// console.log(aveArray(nums2));  //  16.666666666666668 (rounded to 16.6 for clarity)









/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// function shorterInArray(strings) {
//     let shortest = strings[0]; 

//     for (let i = 1; i < strings.length; i++) { 
//         if (strings[i].length < shortest.length) {
//             shortest = strings[i];
//         }
//     }

//     return shortest;
// }

// var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
// console.log(shorterInArray(strings)); 


/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// function repeatChar(string, char) {
//     let count = 0; 

//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === char) {
//             count++; 
//         }
//     }

//     return count; 
// }

// var string = "alex mercer madrasa rashed2 emad hala";
// console.log(repeatChar(string, "a")); 
// console.log(repeatChar(string, "z")); 


/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// function evenIndexOddLength(strings) {
//     let result = []; 

//     for (let i = 0; i < strings.length; i++) {
//         if (i % 2 === 0 && strings[i].length % 2 !== 0) {
//             result.push(strings[i]); 
//         }
//     }

//     return result; 
// }

// var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
// console.log(evenIndexOddLength(strings)); 

/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// function powerElementIndex(array) {
//     let result = []; 

//     for (let i = 0; i < array.length; i++) {
//         result.push(Math.pow(array[i], i)); 
//     }

//     return result; 
// }
// var nums = [44, 5, 4, 3, 2, 10];
// console.log(powerElementIndex(nums)); 

/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// function evenNumberEvenIndex(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 === 0 && arr[i] % 2 === 0) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }

// var nums = [5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1];
// console.log(evenNumberEvenIndex(nums));  


























// function evenNumberEvenIndex(array) {
//     let result = []; 

//     for (let i = 0; i < array.length; i++) { 
//         if (i % 2 === 0 && array[i] % 2 === 0) { 
//             result.push(array[i]); 
//         }
//     }

//     return result;
// }

// var nums = [5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1];
// console.log(evenNumberEvenIndex(nums)); 















// while loop 
// function evenNumberEvenIndex(array) {
//     let result = []; 
//     let i = 0; 

//     while (i < array.length) { 
//         if (i % 2 === 0 && array[i] % 2 === 0) { 
//             result.push(array[i]); 
//         }
//         i++; 
//     }

//     return result; 
// }

// var nums = [5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1];
// console.log(evenNumberEvenIndex(nums)); 


















