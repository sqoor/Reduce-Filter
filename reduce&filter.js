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
  arr = [];
  while(numberA <= numberB) {
    arr.push(numberA)
    numberA++;
  }

  return arr;
  
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












/*
Advanced Part {for your benefits}
Dont solve any question here if you didnt finish all the question above with your pair
This part you can try it
You should solve this part solo not with your pair
This part is extra (and there is no help from the trainer) it is good to try it
*/

//Using filter 12 -15

/*
12
Using Filter
Create a function called longerThan
that accept an array of strings
and return the longer string than the number
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: longerThan(strings,4) => ["mercer","madrasa","rashed2"]
*/

function longerThan(arr, number) {
  return arr.filter(str =>  str.length > number);
}

/*
13
Using Filter
Create a function called onlyOneWord
that accept an array of strings
and return only those strings with a single word (no spaces)
var strings= [ 'return', 'phrases', 'with one word' ];
Ex: onlyOneWord(strings) => [ 'return', 'phrases' ]
*/

function onlyOneWord(arr) {
  return arr.filter(str => str.indexOf(' ') < 1 && str.indexOf(' ') < str.length - 1);
}


/*
14
Using Filter
Create a function called positiveRowsOnly
that accept an array of array of numbers(matrix)
and return only the rows in the matrix that have all positive integers
var numbers= [[ 1, 10, -100 ], [ 2, -20, 200 ],[ 3, 30,  300 ]];
Ex: positiveRowsOnly(numbers) => [ 3, 30,  300 ]
*/
var numbers= [[ 1, 10, -100 ], [ 2, -20, 200 ],[ 3, 30,  300 ]];


function positiveRowsOnly(arrayOfArray) {
  return arrayOfArray.filter(arr => {
    var isElementNegative = false;

    arr.forEach(element => {
      if(element < 0) {
        isElementNegative = true;
      }
    });

    if(!isElementNegative)
      return arr;
  });
}


function positiveRowsOnly2(arrayOfArray) {
  var positiveArrays = arr => {
    var isElementNegative = false;
    
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] < 0 ) {
        isElementNegative = true;
        break;
      }
    }

    if(!isElementNegative)
      return arr;
  };

  return arrayOfArray.filter(positiveArrays)
}




/*
15
Using Filter
Create a function called allSameVowels
that accept an array of strings
return only those words where all the vowels are the same
var strings= [ 'racecar', 'amalgam', 'oligopoly', 'zoom' ];
Ex: allSameVowels(strings) =>  [ 'amalgam', 'zoom' ]
*/

var strings= [ 'amalgam', 'racecar', 'oligopoly', 'zoom'];


function allSamevowels(arr) {

  function findVowls(strArray) {
    var vowels = 'auioe';
    var charsArray = strArray.split('');
    var vowelChars = [];

    for(var i = 0; i < charsArray.length; i++) {
      var charIsAVowel = vowels.indexOf(charsArray[i]) !== - 1;

      if(charIsAVowel) {
        vowelChars.push(charsArray[i]);
      }
    }

    return vowelChars;
  }


  function hasSimilarVowelsOnly(arr) {
    var vowelsObj = {};
    var vowelsObjNotEmpty;
    var notExistedVowel;

    for(var i = 0; i < arr.length; i++) {
      vowelsObjNotEmpty = Object.keys(vowelsObj).length;
      notExistedVowel = vowelsObj[arr[i]] === undefined;

      if(notExistedVowel && vowelsObjNotEmpty)
          return false;

      if(vowelsObj[arr[i]])
        vowelsObj[arr[i]] += 1;
      else
        vowelsObj[arr[i]] = 1;
    }

    return true;
  }

  var arrayOfStringsWithSimilarVowels =  arr.filter(str => {
    var vowelChars  = findVowls(str);
    var strHasSimilarVowelsOnly = hasSimilarVowelsOnly(vowelChars);

    if(strHasSimilarVowelsOnly)
      return str;
  });

  return arrayOfStringsWithSimilarVowels;
}






//Using Reduce 16 -

/*
16
Using Reduce
Create a function called objectify
that accept an array of pairs array
and turns an array of arrays into an object
var array= [[ 'Thundercats', '80s' ],[ 'The Powerpuff Girls', '90s' ],[ 'Sealab 2021', '00s' ]]
Ex: objectify(array) =>  { 'Thundercats': '80s', 'The Powerpuff Girls': '90s', 'Sealab 2021': '00s' };
*/


function objectify(arr) {
  return arr.reduce((obj, element) => {
    obj[element[0]+''] = element[1];
    return obj;
  }, {})
}



/*
17
Using Reduce
Create a function called luckyNumbers
that accept an array of number
and turns an array of arrays into an object
var array= [ 30, 48, 11, 5, 32 ]
Ex: luckyNumbers(array) => 'Your lucky numbers are: 30, 48, 11, 5, and 32';
*/

var array= [ 30, 48, 11, 5, 32 ]


function luckyNumbers(numbers) {
  return numbers.reduce((str, number, index, arr) => {
    if(index === arr.length - 1) {
      str += 'and ' + number;
    } else {
      str += number + ', ';
    }
    return str;
  }, 'Your lucky numbers are: ')
}






// if you finish the exercises review the material of the week and help your classmate