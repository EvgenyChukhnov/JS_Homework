var recipientDiv = document.createElement('div'),
    element = document.createElement('div'),
    inputX = document.getElementById('xId'),
    inputY = document.getElementById('yId'),
    button = document.getElementsByTagName('BUTTON')[0],
    baseString = '<div class="element"></div>',
    baseStringClass = '<div class="element toggleColor"></div>',
    width = '';

recipientDiv.classList.add('recipient', 'hide');

element.className = 'element';

document.body.append(recipientDiv);
inputX.addEventListener('keyup', inputEnable);
inputY.addEventListener('keyup', inputEnable);
button.addEventListener('click', valueCheck);
recipientDiv.addEventListener('click', toggleBlackWhite);

var blackDivsCollection = recipientDiv.getElementsByClassName('element');

function toggleBlackWhite(e) {
  for (var i = 0; i < blackDivsCollection.length; i++) {
    blackDivsCollection[i].classList.toggle('toggleColor');
  };
};

function inputEnable(e){
  if(!inputX.value || !inputY.value || inputX.value === null) {
    button.setAttribute('disabled', 'disabled');
  } else if (!inputX.value) {
      button.setAttribute('disabled', 'disabled');
    } else if (!inputY.value) {
        button.setAttribute('disabled', 'disabled');
      } else {
        button.removeAttribute('disabled');
      };
      if (e.code === 'Enter') this.blur();
};

function valueCheck() {
  var insertString = '';

  recipientDiv.innerHTML = '';
      if (isNaN(parseInt(inputX.value)) || isNaN(inputX.value) || inputX.value < 1 || inputX.value > 10) {
        alert('insert number in field "X"');
        inputX.value = '';
        button.setAttribute('disabled', 'disabled');
      } else if (isNaN(parseInt(inputY.value)) || isNaN(inputY.value) || inputY.value < 1 || inputY.value > 10) {
          alert('insert number in field "Y"');
          inputY.value = '';
          button.setAttribute('disabled', 'disabled');
        } else {

            for (var i = 0; i < inputX.value * inputY.value; i++) {
              var temp = '';

              if (inputX.value % 2 !== 0) {
                if (i%2 !== 0) {
                  insertString += baseStringClass
                } else { insertString += baseString };
              } else {
                if (i % (inputX.value) === 0 ) { 
                  temp = baseString;
                  baseString = baseStringClass;
                  baseStringClass = temp;
                };
                
                if (i%2 !== 0) {
                  insertString += baseStringClass
                } else { insertString += baseString };
              };
            };

            width = ((inputX.value * 30).toString() + 'px');
            recipientDiv.insertAdjacentHTML('beforeend', insertString);
            recipientDiv.style.width = width;
            recipientDiv.classList.remove('hide');
            insertString = '';
          };
};