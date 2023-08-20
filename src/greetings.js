const loginForm = document.querySelector('.login-form');
const loginInput = document.querySelector('.login-form input');
const greeting = document.querySelector('.greeting');
const logoutComponents = document.querySelectorAll('.logout-component');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  logoutComponents.forEach((component) =>
    component.classList.add(HIDDEN_CLASSNAME)
  );
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  // show the greetings
  loginForm.classList.add(HIDDEN_CLASSNAME);
  logoutComponents.forEach((component) =>
    component.classList.remove(HIDDEN_CLASSNAME)
  );
  showGreeting(savedUserName);
}

function onLoginSubmit(event) {
  event.preventDefault();

  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);

  loginForm.classList.add(HIDDEN_CLASSNAME);
  logoutComponents.forEach((component) =>
    component.classList.remove(HIDDEN_CLASSNAME)
  );
  showGreeting(userName);
}

function showGreeting(userName) {
  greeting.innerText = `Hello ${userName}`;
}
