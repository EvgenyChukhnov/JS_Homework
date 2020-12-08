    // task 1:

var arrNames = ['Vasya', 'Petya', 'Seryoja', 'Nasten\'ka', 'Natasha', 'Voldemar', 'Zveta', 'Zozona',];

console.log(objFromArr(arrNames));

function objFromArr(arr) {

  return arr.map(function(item) {
    return { name: item };
  });
};

    // task 2:

var timeArr = ['00', '13', '24'];

console.log(timeTransform(timeArr));

function timeTransform(arr) {

  return arr.reduce(function(prev, current) {
    return prev + ' : ' + current;
  }, 'Текущее время : ');
};

    // task 3:

var text = 'Волонтеры "Фауны города" до сих пор помнят тот день, когда привезли на передержку большого кота. Предыстория точно неизвестна, но кто-то явно обожал кормить своего питомца.'

console.log(vowelCount(text));

function vowelCount(str) {
  var result = 0,
      vowels = ['а', 'о', 'у', 'и', 'е', 'э'],
      arr = str.toLowerCase().split('');
  arr.some(function(item) {
    if (vowels.includes(item)) result++;
  });

  return result;
};

    // task 4:

countSentencesLetters('Привет, студент! Студент... Как дела, студент?');

function countSentencesLetters(text) {
  var result = [],
      charCounterArr = [],
      str = text.split(/[!?.]/).filter(function(item) {
    return item.length > 1;
  });

  charCounterArr = str.map(function(item) {
    return item.split(/[' ',]/).filter(function(item) {
      return item.length > 1;
    }).join('').length;
  });
  
  str.forEach(function(item, i) {
    result += item + ': Letters quantity is: ' + charCounterArr[i] + '\n';
  });

  return console.log(result);
};

    // task 5:

var text = 'Волонтеры хозяин кот "Фауны города" хозяин до сих кот пор помнят хозяин тот день, когда  кот хозяин кот привезли на передержку хозяин большого кот а. Предыстория кот точно неизвестна кот хозяин кот, но кто-то явно обожал кормить своего питомца кот а.';

wordCounter(text);

function wordCounter(str) {
  var wordCheckArr = [],
    strResult = str.toLowerCase().split(/[,' '."]/).filter(function(item) {
      return item.length > 1;
  });
    wordCheckArr = strResult.filter(function(item, i){
      return strResult.indexOf(item) === i;
  });

return wordCountComparison(wordCheckArr, strResult);
  
  function wordCountComparison(arr1, arr2) {
    var counterArr = [],
        subCountArr = [];
        
    for (var i = 0; i < arr1.length; i++) {
      subCountArr.length = 0;
      for (var j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
          subCountArr.push(arr1[i]);
        };
      };

      if (subCountArr.length > counterArr.length) {
        counterArr.length = 0;

        for (var k = 0; k < subCountArr.length; k++) {
          counterArr.push(arr1[i]);
        };
      };
    };

    return console.log( 'Максимальное число повторений у слова ' + '"' + counterArr[0] + '"' + ': ' + counterArr.length);
  };
};