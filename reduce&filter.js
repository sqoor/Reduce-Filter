console.log('Here is : ', 'Reduce & Filter')

//Using Reduce 1 -5
var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
];



/*
1
Using the varabile persons
Create a function called avgAge
that accept an array
and return average age of this array

Ex: avgAge(persons) => 41.2
*/
// return arr.reduce((acc, element) => acc + element.age, 0) / arr.length;
// 


/*
function avgAge(arr) {
  var callback = (acc, element) => {
    return  acc + element.age

  }
  var sum = arr.reduce(callback, 0);

  return sum / arr.length;
}

*/



function avgAge(arr) {
  return arr.reduce((acc, element) =>  acc + element.age, 0) / arr.length;
}




/*
2
Using the varabile persons
Create a function called longestName
that accept an array
and return the longerst full name

Ex: longestName(persons) => 'Soso Al-Amora'
*/

/*
function longestName(arr) {
  var maxLength = 0;
  var biggerName = '';

  arr.filter((element) => {
    var fullName = element.name.first + ' ' + element.name.last;
    var nameLenth = fullName.length;

    if(maxLength < nameLenth) {
      maxLength = nameLenth;
      biggerName = fullName;
    }
  }, 0);

  return biggerName;
}
*/

var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
];


/*
function longestName(arr) {
  var fullName =  arr[0].name.first + ' ' + arr[0].name.last;
  var initialValue = { name: fullName, length: fullName.length }

  var longestName = arr.reduce((max, element) => {
    var tempName = element.name.first + ' ' + element.name.last;

    if(max.length < tempName.length) {
      max.name = tempName;
      max.length = tempName.length;
    }

  }, initialValue);

  return longestName;
}
*/



function longestName(arr) {
  return arr.reduce((maxName, element) => {
    var tempName = element.name.first + ' ' + element.name.last;

    if(maxName.length < tempName.length)
     return tempName;

    return maxName;
  }, arr[0].name.first + ' ' + arr[0].name.last);
}



/*
3
Create a function called maxNumber
that accept an array
and return max number

Ex: maxNumber([1,2,4,9]) => 9
*/

function maxNumber(arr) {
  return arr.reduce((max, element) => {
    if(max < element)
      return element 
    
    return max;
  });
}

/*
4
Create a function called repeatChar
that accept a string and char
and return number times that this char repeat inside the string

Ex: repeatChar("hello world",w) => 1
*/

function repeatChar(str, keyChar) {
  str = str.split('');
  
  return str.reduce((charRepetition, tempChar) => {
    if(keyChar === tempChar)
      return charRepetition + 1;
    
    return charRepetition;
  }, 0);
}


/*
5
Create a function called usAndNumberBeetweenUs
that accept two numbers
and return array of these two numbers and the numbers between them

Ex: usAndNumberBeetweenUs(2,5) => [2,3,4,5]
*/

function usAndNumberBeetweenUs(numberA, numberB) {
  // This question is deleted
  // arr = [];
  // while(numberA <= numberB) {


  //   numberA++;
  // }
  // arr.reduce((acc, element) => {
  //   arr.push(acc + 1)
  //   return acc + element;
  // })
}





//Filter 6 - 11
/*
6
Create a function called evenOnly
that accept an array
and return an array of even number only

Ex: evenOnly([1,8,6,4]) => [8,6,4]
*/

function evenOnly(arr) {
  return arr.filter(number => number % 2 === 0);
}

/*
7
Create a function called multiFour
that accept an array
and return an array of these number that is a mutiply by 4

Ex: multiFour([1,8,6,4]) => [8,4]
*/

function multiFour(arr) {
  return arr.filter(number => number % 4 === 0);
}


/*
8
**this question not that easy mybe you will need to use two function inside each other

Create a function called containChar
that accept an array of string
and return an array of these string that contain this char

Ex: containChar(["hello","world"],w) => ["world"]
Ex: containChar(["hello","world"],l) => ["hello","world"]
*/

function containChar(arr, char) {
  return arr.filter(str => str.indexOf(char) !== -1)
}


/*
9
Create a function called evenIndexOddLength
that accept an array of strings
and return an array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]
*/

function evenIndexOddLength(arr) {
  return arr.filter((str, index) => index % 2 === 0 && str.length % 2 !== 0);
}


/*
10
Using the varabile persons
Create a function called olderThan
that accept an array and number
and return the person that have age older than this number

Ex: olderThan(persons,56) => [{ name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }]
*/

function olderThan(arr, number) {
  return persons.filter(obj => obj.age > number);
}

/*
11
Create a function called shorterThan
that accept an array of strings and a number
and return the shorter string than the number

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterThan(strings,5) => ["alex","emad","hala"]
*/


function shorterThan(arr, number) {
  return arr.filter(str => str.length < number);
}


// if you finish the exercises review the material of the week and help your classmate
