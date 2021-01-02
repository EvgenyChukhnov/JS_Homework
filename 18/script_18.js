/^[a-z]{3,10}_[a-z]{3,10}-\d{4}@((\.|\-)?[a-z\d]){2,20}(\.com)$/.test('name_surname-1234@gmail.com');

console.log(phoneNumberTest('+375-25-777-77-77'));
console.log(phoneNumberTest('375299999999'));
console.log(phoneNumberTest('8-044-444-44-44'));
console.log(phoneNumberTest('8033-6666666'));

function phoneNumberTest(phoneNumber) {

  if (/^(\+?375|8\-?0)?\-?(25|29|33|44|17)\-?([1-9]{1}\d{2})\-?\d{2}\-?\d{2}/.test(phoneNumber)) return true;
    return false;

};


var text = 'Волонтеры "Фауны города" до сих пор помнят тот Адень, когда привезли на передержку большого кота. Предыстория точно неизвестна, но кто-то явно обожал кормить своего питомца.'
var noVowels = 'Влнтр "Фн грд" дсхпр пмнт тт днь, кгд првзл н прдржк бльшг кт. Прдстр тчн нзвстн, н кт-т вн бжл крмть свг птмц.'

console.log(countVowel(text));
console.log(countVowel(noVowels));

function countVowel(str) {
  var vowelOnly = str.split('').filter(function(el) {
    return /[аоуиеэюяыё]/i.test(el);
  });
    return vowelOnly.length;
};
    
    
console.log(countVowelSameKind(text));
console.log(countVowelSameKind(noVowels));

function countVowelSameKind (str) {
  var vowelArr = ['а', 'о', 'у', 'и', 'е', 'э', 'ю', 'я', 'ы', 'ё'],
      baseArr = [],
      re,
      counter = 0,
      lettersArr = [];

  for (var i = 0; i < vowelArr.length; i++) {
    re = new RegExp(vowelArr[i],'gi');
    lettersArr = str.match(re);
    if(lettersArr) {
      baseArr.push('Количество букв ' + vowelArr[i] + ': ' + lettersArr.length);
      counter += lettersArr.length;
    };
  };

  if (counter === 0) {
    return 'в этом тексте гласных нет';
  };

  baseArr.push('Итого гласных в тексте: ' + counter);
    return baseArr;
};