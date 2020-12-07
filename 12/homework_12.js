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