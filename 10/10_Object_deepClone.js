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
  console.log('Hello');
}
};

var clonedObj = deepClone(initialObj);

clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push(2);

console.log(initialObj);
console.log(clonedObj);


function deepClone(obj) {
  var objCloned = {};

  for (var key in obj) {
    if (obj[key] === null) {
      objCloned[key] = obj[key];
    } else if (Array.isArray(obj[key])) {
      objCloned[key] = deepCloneArr(obj[key]);
    } else if (typeof obj[key] === 'object') { 
      objCloned[key] = deepClone(obj[key]);
    } else {
      objCloned[key] = obj[key];
    }
  };
      return objCloned;

function deepCloneArr(arr) {
  var arrCloned = [];
  
  if (Array.isArray(arr)){
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === null) {
        arrCloned[i] = arr[i];
      } else if (Array.isArray(arr[i])) {
        arrCloned[i] = deepCloneArr(arr[i]);
      } else if (typeof arr[i] === 'object') { 
        arrCloned[i] = deepClone(arr[i]);
      } else {
        arrCloned[i] = arr[i];
      }
    };
  };
      return arrCloned;
}
};