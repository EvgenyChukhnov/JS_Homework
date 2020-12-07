var arrNames = ['Vasya', 'Petya', 'Seryoja', 'Nasten\'ka', 'Natasha', 'Voldemar', 'Zveta', 'Zozona',];

console.log(objFromArr(arrNames));

function objFromArr(arr) {
  var objArr = [],
      obj = {};

  arr.map(function(item) {
    objArr.push(obj = {name: item});
  });

  return objArr;
};

var timeArr = ['00', '13', '24'];

console.log(timeTransform(timeArr));

function timeTransform(arr) {

  var result = arr.reduce(function(prev, current) {
    return prev.toString() + ' : ' + current.toString();
  });

  return 'Текущее время : ' + result;
};

var text = 'Волонтеры "Фауны города" до сих пор помнят тот день, когда привезли на передержку большого кота. Предыстория точно неизвестна, но кто-то явно обожал кормить своего питомца.'

console.log(vowelCount(text));

function vowelCount(str) {
  var result = 0,
      arr = str.toLowerCase().split('');

      arr.forEach(function(item) {
        if (item === 'а' ||
            item === 'о' ||
            item === 'у' ||
            item === 'и' ||
            item === 'е' ||
            item === 'э') result++;
      });

  return result;
};