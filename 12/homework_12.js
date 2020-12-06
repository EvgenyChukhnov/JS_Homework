var arrNames = ['Vasya', 'Petya', 'Seryoja', 'Nasten\'ka', 'Natasha', 'Voldemar', 'Zveta', 'Zozona',];

console.log(objFromArr(arrNames));

function objFromArr(arr) {
  var objArr = [],
      obj = {};

  arr.forEach(function(item) {
    objArr.push(obj = {name: item});
  });

  return objArr;
};