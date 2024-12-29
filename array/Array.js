// // مجموع العناصر في المصفوفة 
// let arra=[1,103,6,8,0,9];
// //  arra.push(7) اضافة عنصر 
// // arra.unshift(9) اضافة عنصر في البداية 
// // arra.pop();حذف اخر عنصر 
// // arra.shift();حذف اول عنصر 
// let sum =0;
// for (let i =0 ; i<arra.length;i++){
// sum += arra[i];

// }
// console.log("sum",sum)
// let re= Math.round(7.25)  
// console.log(re)
// let userAgent = navigator.userAgent;
// console.log(userAgent);
// console.log(Math.max(1, 5, 33)); //33.
// function sayhallo(user,age){
// console.log(`Hi ${user} yor age is ${age} `);
// if (age<11){ 
//   console.log(`this app not for you `); 
// } else{
//     console.log(`ok`)
// }
// }
// sayhallo("ahmad",10);
// function generateyears(start ,end,exclude){
//     for (let i =start ;i<=end;i++){
//         if (i=== exclude){
//             continue;
//         }
//         console.log(i);
//     }}
// generateyears(1982,2021,2020);






// 1-Write a function to find the largest element in an array.
// sol1:
// function findMaxNumber(arr) {
//     return Math.max(...arr); 
// }

// let numbers = [10, 20, 5, 8, 100];
// console.log(findMaxNumber(numbers));

// sol2:

// function findMaxNumber(arr) {
//     let maxNumber = arr[0]; 

//     for (let i = 1; i < arr.length; i++) { 
//         if (arr[i] > maxNumber) { 
//             maxNumber = arr[i];  
//         }
//     }

//     return maxNumber; 
// }

// let numbers = [10, 20, 5, 8, 30];
// console.log(findMaxNumber(numbers)); 




// 2-Write a function to find the smallest element in an array.




// function findMinNumber(arr) {
//     return Math.min(...arr); // 
// }

// let numbers = [10, 20, 5, 8, 30];
// console.log(findMinNumber(numbers)); // الناتج: 5



// function findMinNumber(arr) {
//     let minNumber = arr[0]; 

//     for (let i = 1; i < arr.length; i++) { 
//         if (arr[i] < minNumber) { 
//             minNumber = arr[i]; 
//         }
//     }

//     return minNumber; 
// }
// let numbers = [10, 20, 5, 8, 30];
// console.log(findMinNumber(numbers)); // 5





// 3-Write a function to find the sum of all elements in an array.

// function findSum(arr) {
//     let sum = 0;
//     for (let num of arr) { 
//         sum += num;
//     }
//     return sum;
// }
// let numbers = [10, 20, 5, 8, 30];
// console.log(findSum(numbers)); 


// 4-Write a function to find the average of all elements in an array.
// function findAverage(arr) {
//     let sum = 0;
//     for (let num of arr) {
//         sum += num; 
//     }
//     return sum / arr.length; 

// let numbers = [10, 20, 5, 8, 30];
// console.log(findAverage(numbers)); 

// 5-Write a function to find the median of all elements in an array.
// function findMedian(arr) {

//     arr.sort((a, b) => a - b);

//     let length = arr.length;

//     if (length % 2 === 0) {
//         return (arr[length / 2 - 1] + arr[length / 2]) / 2;
//     } else {
//         return arr[Math.floor(length / 2)];
//     }
// }

// let numbers1 = [10, 20, 30, 40, 50];
// console.log(findMedian(numbers1));

// let numbers2 = [10, 20, 30, 40];
// console.log(findMedian(numbers2)); 


// 6-Write a function to remove all duplicates from an array.
// function removeDuplicates(arr) {
//     let unique = []; 
//     for (let i = 0; i < arr.length; i++) {
//         if (!unique.includes(arr[i])) { 
//             unique.push(arr[i]); 
//         }
//     }
//     return unique; 
// }

// let numbers = [10, 20, 10, 30, 20, 40, 50, 50];
// console.log(removeDuplicates(numbers)); // الناتج: [10, 20, 30, 40, 50]

// 7-Write a function to sort an array in ascending order.
// function sortAscending(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] > arr[j]) {
//                 let temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr;
// }

// let numbers = [30, 10, 50, 20, 40];
// console.log(sortAscending(numbers)); // الناتج: [10, 20, 30, 40, 50]



// function sortAscending(arr) {
//     return arr.sort((a, b) => a - b); // ترتيب تصاعدي
// }

// let numbers = [30, 10, 50, 20, 40];
// console.log(sortAscending(numbers)); // الناتج: [10, 20, 30, 40, 50]
// function sortDescending(arr) {
//     return arr.sort((a, b) => b - a); // ترتيب تنازلي
// }

// let numbers = [30, 10, 50, 20, 40];
// console.log(sortDescending(numbers)); // الناتج: [50, 40, 30, 20, 10]
// function shuffleArray(arr) {
//     for (let i = arr.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));

//         [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//     return arr;
// }

// let numbers = [10, 20, 30, 40, 50];
// console.log(shuffleArray(numbers));  
















