console.log(filterNumbersArr([-1, 0, 2, 34, -2]));

function filterNumbersArr(numbers) {

   var newArr = numbers.filter(function(el) { 
    return el > 0;
  });    
    return newArr;
};

var arrNum = [-1, -3, -436, 4, -16, 26, 38, 456, 23, 11, -654, 876, 6, 789, 9, 2];

console.log(findPosNum(arrNum));

function findPosNum(arr) {
  return arr.find(function(item) { return item > 0 });
};

console.log(isPalindrome('шалаШ')); // true
console.log(isPalindrome('привет')); // false
console.log(isPalindrome('аРгентиНамаНИтНегра'));

function isPalindrome(word) {

  if (word.toLowerCase() === word.toLowerCase().split('').reverse().join('')) return true;
    return false;
};


console.log(areAnagrams('кот', 'отк')); // true
console.log(areAnagrams('кот', 'атк')); // false
console.log(areAnagrams('кот', 'отко')); // false
console.log(areAnagrams('asamala', 'amlasaa'));

function areAnagrams(word1, word2) {
  if (word1.toLowerCase().split('').sort().join('') === word2.toLowerCase().split('').sort().join('')) return true;
  return false;
};

console.log(divideArr([1, 2, 3, 4], 2)); // [[1, 2], [3, 4]]
console.log(divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3)); // [[1, 2, 3], [4, 5, 6], [7, 8]]

function divideArr(arr, n) {
  var newArr = [];
  
  do {
    newArr.push(arr.splice(0, n));
  } while (arr.length);

  return newArr;
};