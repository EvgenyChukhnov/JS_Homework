var table = document.getElementsByTagName('table')[0],
    addRowCell = table.getElementsByClassName('addRow')[0];

    addRowCell.onclick = function(){
      table.insertAdjacentHTML('afterbegin', '<tr><td></td><td></td><td></td></tr>');
    };

  console.dir(addRowCell);
