// 1- Write a program that prints numbers from 1 to 10 using a for loop.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// 2-Write a program that prints the even numbers from 1 to 10 using a for loop.

for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

// 3- Write a program that prints the odd numbers from 1 to 10 using a while loop.
let j = 1;
while (j <= 10) {
    if (j % 2 !== 0) {
        console.log(j);
    }
    j++;
}

// 4- Write a program that prints the multiplication table of a number entered by the user using a for loop.
let num = parseInt(prompt("Enter a number: "));
for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}

// 5- Write a program that calculates the sum of numbers from 1 to 100 using a while loop.

let sum = 0;
let k = 1;
while (k <= 100) {
    sum += k;
    k++;
}
console.log("Sum: ", sum);

// 6- Write a program that calculates the factorial of a number entered by the user using a for loop.
let factNum = parseInt(prompt("Enter a number: "));
let factorial = 1;
for (let i = 1; i <= factNum; i++) {
    factorial *= i;
}
console.log("Factorial: ", factorial);

// 7- Write a program that prints the Fibonacci series up to a certain number entered by the user using a while loop.

let fibLimit = parseInt(prompt("Enter the limit: "));
let a = 0, b = 1, next;
console.log(a);
while (b <= fibLimit) {
    console.log(b);
    next = a + b;
    a = b;
    b = next;
}
// 8- Write a program that prints the reverse of the following numbers:
//5 , 10 , 15 , 20
// using a while loop.

let numbers = [5, 10, 15, 20];
let index = numbers.length - 1;
while (index >= 0) {
    console.log(numbers[index]);
    index--;
}


    
   






    

   

