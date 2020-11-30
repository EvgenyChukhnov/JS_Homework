var initialObj = {
  string: 'Vasya',
  number: 30,
  boolean: true,
  undefined: undefined,
  null: null,
  array: [1, 2, 3],
  object: {
      string2: 'Petrov',
      object2: {
          array2: [{}, {}]
      },
      object3: {}
  },
  method: function() {
      alert('Hello');
  }
};

console.log('initialObj:');
console.log(initialObj);
var clonedObj = deepClone(initialObj);

clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push(2);

console.log(initialObj);
console.log(clonedObj);

function deepClone(obj) {
  var objCloned = {};

  for (var key in obj) {
    if (obj[key] != Object || !obj[key].isArray) {
      objCloned[key] = obj[key];
    } else objCloned[key] = cloneObj(obj[key]);
  };

  return objCloned;
};