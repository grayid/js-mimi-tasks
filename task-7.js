const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');
const passwordInput = document.getElementById('password');
const passwordError = document.getElementById('password-error');
const checkbox = document.getElementById('agree-checkbox');
const checkboxError = document.getElementById('checkbox-error');
const loginButton = document.getElementById('login-form');

emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);
checkbox.addEventListener('change', validateCheckbox);
loginButton.addEventListener('submit', checkAndSubmit);

function validateEmail(event) {
  const email = event.target.value;
  const emailRe = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!email) {
    setError(emailInput, emailError, 'Поле обязательно для заполнения');
  } else if (!emailRe.test(email)) {
    setError(emailInput, emailError, 'Email невалидный');
  } else {
    setSuccess(emailInput, emailError);
  }
}

function validatePassword(event) {
  const password = event.target.value;

  if (!password) {
    setError(passwordInput, passwordError, 'Поле обязательно для заполнения');
  } else if (password.length < 8) {
    setError(passwordInput, passwordError, 'Пароль должен содержать как минимум 8 символов');
  } else {
    setSuccess(passwordInput, passwordError);
  }
}

function validateCheckbox() {
  if (!checkbox.checked) {
    setError(checkbox, checkboxError, 'Поле обязательно для заполнения');
  } else {
    setSuccess(checkbox, checkboxError);
  }
}

function checkAndSubmit(event) {
  event.preventDefault();

  validateCheckbox();

  if (emailInput.classList.contains('error') || passwordInput.classList.contains('error') || !checkbox.checked) {
    return;
  }

  console.log({
    email: emailInput.value,
    password: passwordInput.value,
  });
}

function setError(inputElement, errorElement, message) {
  inputElement.classList.add('error');

  if (errorElement) {
    errorElement.innerText = message;
    errorElement.classList.add('active');
    errorElement.classList.add('error-message');
    errorElement.innerHTML = message.replace(/\s/g, '&nbsp;');
  }
}

function setSuccess(inputElement, errorElement) {
  inputElement.classList.remove('error');

  if (errorElement) {
    errorElement.classList.remove('active');
    errorElement.innerText = '';
  }
}