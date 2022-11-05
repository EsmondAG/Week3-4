//1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
//1.a Programmatically subtract the value of the first element in the array from the value in the last element of the array

//1.b Add a new age to your array and repeat the step above to ensure it is dynamic.
//1.c Use a loop to iterate through the array and calculate the average age.
const ages = [3,9,23,64,2,8,28,93]

console.log(ages[ages.length - 1] -ages[0]);

let length = ages.push(17);

console.log(ages[ages.length - 1] -ages[0]);




//2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’

//2a. Use a loop to iterate through the array and calculate the average number of letters per name. 

//2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

console.log("Use a loop to iterate through the array and calculate the average number of letters per name.");

let sum = 0
for(let i = 0; i <= names.length; i++) {
    sum += names[i];
}
let totalLetters = 23

console.log('Average letters: ' + totalLetters / names.length);

console.log("Use a loop to iterate through the array again and concatenate all the names together, separated by spaces."); 

for (let i = 0; i <=names.length; i++) {
    
} console.log(names);

//Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

for(let i = 0; i <= names.length; i++)

namesLength = [3,5,3,5,4,3]

const sum2 = namesLength.reduce


