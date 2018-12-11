// // let word = "bottles";
// // let count = 99;
// // while (count > 0) {
// //     console.log(count + " " + word + " of beer on the wall");
// //     console.log(count + " " + word + " of beer,");
// //     console.log("Take one down, pass it around,");
// //     count = count === - 1;
// //     if (count < 0) {
// //         console.log(count + " " + word + " of beer on the wall.");
// //     } else {
// //         console.log("No more " + word + " of beer on the wall.");
// //     }
// // }

// const beersOnTheWall = (num =99){
//     if(typeof num !== 'number'){
//         return 'Thats not a number'
//     }
//     if (num ===0)
//     return 'congrats youre sober'
// }
// let currentNum = num;
// while(currentNum >= 0 ){
//     if (currentNum ===0 ){
// console.log(`No more bottles of beer on the wall. Take one down and pass it around, ${num}  bottles of beer on the wall.`)
//     }
//     else{
//         console.log(`${currentNum} bottles of beer on the wall,
//         Take one down and pass it around, ${currentNum - 1}  bottles of beer on the wall.`)
//     }
//     currentNum--;
// }
// -----------------------------------
// const nums = [1,2,3,4,5];

// let i = 6;
// while(i <= 100) {
//     nums.push(i);
//     i++;
// }
// console.log(nums);

// --------------------------------------

// const nums = [1,2,3,4,5,];

// for (let i = 0; i <= 100; i ++) {
// nums.push(i);
// }
// console.log(nums);

// ----------------------------
// const rangeOfNums = (start, end) =>{ 
// const arr = [];
// for (let i = start; i <= end; i++)
// {
//     arr.push(i);
// }
// return arr;
// }

// const arr1 = rangeOfNums(1,100) 
// console.log(arr1);
// const arr2 = rangeOfNums(40,50)
// console.log(arr2);
// const arr3 = rangeOfNums(-40,5)
// console.log(arr3);

// Matrix

// const matrix = [
//     [],
//     [],
//     []
// ];
// // Nesting Of Loops
// for (let i = 0; i < 100; i++){
//     for (let j = 0; j < 100; j++) {

//     }
// }
// RUN EVEN ONLY - Brute Force
// for (let i = 0; i <= 100; i++ ){
// if ( i % 2 === 0)
// console.log(i);
// }

// for (let i = 0; i <= 100; i= i + 2){
//     console.log(i);
// }


// const animals = ['cat', 'dog', ' Bird', 'Cow', 'Goat']

// animals.push('Wolf')

// // Print Each

// for (let i = 0; i < animals.length; i++){
//     console.log(animals[i])
// }
// // print each back 

// for (let i = animals.length - 1; i >=0;
//     i--){
//         console.log(animals[i]);
//     }

// for (let i = 0; i <= 100; i++ ){
// if ( i % 2 === 0)
// console.log(i);
// }

// for (let i = animals.length - 1; i >=0;
//     i--){
//         console.log(animals[i]);
//     }
// for (let i = 0; i <= 100; i++ ){
// if ( i % 2 === 0)
// console.log(i);
// }

// const evenBackwards = (num) => {
//     const arr = [];

//     for (let i = num; i >= 0; i -= 2){
//         arr.push(i);
//     }
//     return arr;
// }
// console.log(evenBackwards(100));

// passing array as parameter
// let arrOfNums = [1,2,3,4,5];

// const changeArr = (arr) => {
//     arrOfNums.push(100);
// }
// changeArr(arrOfNums);
// console.log(arrOfNums)

// let originalArr = [1,2,3,4,5];

// const changeArr = (arr) => {
//     const copyArr = arr.slice(0);
//     copyArr.push(100);
//     console.log('copyArr', copyArr);
// }
// changeArr(originalArr);
// console.log('originalArr', originalArr)

// Deep Copy

// const arrOriginal = [1,2,3,4,5];
// const deepCopy = [arrOriginal,6,8,10]; 
// // three dots before arrOriginal merged the two const
// deepCopy.push('lol')
// console.log('original:', arrOriginal);
// console.log('deepCopy:', deepCopy);



// let num = 1
// while (num <= 10) {
//   console.log('the number is: ' + num)
//   num += 1
// }

// ODD #S ONLY 

let num = 1
while (num < 10) {
  console.log('the number is: ' + num)
  num += 2
}