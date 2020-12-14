var container = document.getElementById('container');

var firstPar = document.createElement('p'),
    secondPar = document.createElement('p');

firstPar.innerHTML = 'Hello, here are <a href="https://www.facebook.com">Link 1</a> and <a href="https://twitter.com">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 3</a> and <a href="https://vk.com">Link 4</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);

var button = document.getElementsByTagName('button')[0],
    linksFirstPar = firstPar.children;

    secondPar.onclick = function (event) {
      event.preventDefault();
      console.dir(event.target);
      if (event.target.tagName == 'P' ) {
        alert('you clicked on the second paragraph!')
      } else { alert(event.target) };
    };

button.addEventListener('click', addClick);


function addClick () {

  for (var i = 0; i < linksFirstPar.length; i++){
    linksFirstPar[i].classList.toggle('red');
  }
};
