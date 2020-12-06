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

