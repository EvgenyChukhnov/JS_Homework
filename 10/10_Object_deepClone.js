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
clonedObj.string = 'Seryoja';

console.log('initialObj:');
console.log(initialObj);
console.log('clonedObj:');
console.log(clonedObj);


function deepClone(obj) {
  var objCloned = new Object;

  for (var key in obj) {
    if (obj[key] === null) {
        objCloned[key] = obj[key];
    } else if (Array.isArray(obj[key])) {
      // var arr = [];
      objCloned[key] = deepClone(obj[key]);

    } else if (typeof obj[key] === 'object') { 
        objCloned[key] = deepClone(obj[key]);
    } else {
      objCloned[key] = obj[key];
    }
  };
    return objCloned;
};