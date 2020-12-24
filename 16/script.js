var button = document.getElementById('addUsers'),
    userTabs = document.getElementsByClassName('users-tabs')[0],     
    infoBlock = document.getElementsByClassName('info-block')[0],
    usersBlocksString = '',
    avatar = '',
    firstName = '',
    lastName = '',
    key = '',
    localStorageKey = 'localStorageKey';
    result = '';

button.addEventListener('click', addUserFunc);
userTabs.addEventListener('click', updateUserBlock);

function addUserFunc() {
  if (localStorage.getItem('localStorageKey')) {
    key = localStorage.getItem('localStorageKey');
  setTabs();
  setBlock();
  } else {
  var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://reqres.in/api/users?page=1', true);
    xhr.send();
    xhr.onload = function () {
  try {
      key = JSON.parse(xhr.response).page;
      localStorage.setItem(key, xhr.response);
      localStorage.setItem('localStorageKey', key);
    } catch (e) {
      infoBlock.innerHTML = '<div class="error">Unable to load requested page...</div>';
    };
    setTabs();
    setBlock();
    };

    xhr.onerror = function () {
      var statusType = +String(this.status)[0];
        try {
          if (statusType === 0) { 
            throw { 
            name: 'url', message: 'error - wrong URL' 
            };
          } else if (statusType === 4) { 
            throw { 
            name: 'client', message: 'something happened - client-side error' 
            };
          } else if (statusType === 5) {
            throw {
              name: 'server', message: 'something happened - server-side error'
            };
          } else {throw ('unknown error...')}
        } catch (e) {
            infoBlock.innerHTML = '<div class="error">' + e.message + '</div>';
            localStorage.clear();
        };
    };
  };
};

function updateUserBlock (event) { 
  var target = event.target;
  if (target.className === 'inner-user-tab' || target.className === 'inner-user-tab white-tab') {
    var n = (target.textContent).indexOf(' ');
    var numTab = target.textContent.slice(n);
    try {
      avatar = JSON.parse(localStorage.getItem(key)).data[numTab-1].avatar;
      firstName = 'first name: ' + JSON.parse(localStorage.getItem(key)).data[numTab-1].first_name;
      lastName = 'last name: ' + JSON.parse(localStorage.getItem(key)).data[numTab-1].last_name;
      infoBlock.innerHTML = '';
      infoBlock.innerHTML = '<div class="avatar"><img src="'
      + avatar + '"></div><div class="names-info"><div class="first-name-info">'
      + firstName + '</div><div class="last-name-info">'
      + lastName + '</div></div></div>';
    } catch {
      infoBlock.innerHTML = '<div class="error"><span>failed to load DATA from Local Storage</span><span>please contact administrator</span></div>';
      localStorage.clear();
    };
      for (var i = 0; i < userTabs.childElementCount; i++) {
        if (userTabs.children[i].classList.contains('white-tab')) {
          userTabs.children[i].classList.remove('white-tab');
        };
      };
      target.classList.add('white-tab');
  };
};

function setTabs() {
  userTabs.innerHTML = '';
  for (var i = 1; i <= JSON.parse(localStorage.getItem(key)).per_page; i++) {
    userTabs.innerHTML += '<div class="inner-user-tab">User ' + i + '</div>';
  };
};

function setBlock() {
  try {
    avatar = JSON.parse(localStorage.getItem(key)).data[0].avatar;
    if (!avatar) throw ('unknown error');
    firstName = 'first name: ' + JSON.parse(localStorage.getItem(key)).data[0].first_name;
    lastName = 'last name: ' + JSON.parse(localStorage.getItem(key)).data[0].last_name;
    infoBlock.innerHTML = '';
    infoBlock.innerHTML = '<div class="avatar"><img src="'
      + avatar + '"></div><div class="names-info"><div class="first-name-info">'
      + firstName + '</div><div class="last-name-info">' 
      + lastName + '</div></div></div>';
    userTabs.firstElementChild.classList.add('white-tab');
  } catch (e) { 
      infoBlock.innerHTML = '<div class="error"><span>Unable to load data</span><span>please contact administrator</span></div>';
      localStorage.clear();
  };
};

window.onload = function() {
  addUserFunc();
};