var table = document.getElementsByTagName('table')[0];
var text = '';

table.addEventListener('click', tableClick);
table.addEventListener('blur', tableClickBlur, true);

function tableClick(event) {
  var target = event.target;
  var myInput = document.createElement('input');

  if (target.className === 'addRow' ) {
    table.firstElementChild.insertAdjacentHTML('afterbegin', '<tr><td></td><td></td><td></td></tr>');
    return;
  };
  
  if (target.tagName === 'TD') {

    if (target.textContent) {
      text = target.textContent;
    };
    target.textContent = '';

    if (target.firstElementChild) {
      target.firstElementChild.focus();
    } else { 
      target.appendChild(myInput).focus(); 
      target.firstElementChild.value = text;
    };                      
    text = '';                             
  };
};

function tableClickBlur (event) {
  var target = event.target;
  var tableCellBlur = target.parentElement;

  tableCellBlur.textContent = target.value;
  target.value = '';
};
