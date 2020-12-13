const inputs = document.querySelectorAll('.custom-field__input');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const passwordInputRepeat = document.querySelector('#password-repeat');
const name = document.querySelector('#name');
const togglePasswordButton = document.querySelector('#toggle-password');
const form = document.querySelector('.grid');

const successClass = 'custom-field--success';
const errorClass = 'custom-field--error';
const customField = '.custom-field';

// Show/hide password
function togglePassword() {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    togglePasswordButton.textContent = 'Hide password';
    togglePasswordButton.setAttribute('aria-label',
      'Сховати пароль');
  } else {
    passwordInput.type = 'password';
    togglePasswordButton.textContent = 'Show password';
    togglePasswordButton.setAttribute('aria-label',
      'Показати пароль '
      + 'Увага Ваш пароль буде показано на екрані');
  }
}

function showSuccess(input) {
  const formControl = input.closest(customField);
  formControl.classList.add(successClass);
  formControl.classList.remove(errorClass);
}

// Show input error message
// Добавляет клас ошибки валидации
function showError(input, message) {
  const formControl = input.closest(customField);
  formControl.classList.add(errorClass);
  formControl.classList.remove(successClass);
  // Получаем элемент с текстом ошибки с тегом small
  const small = formControl.querySelector('.custom-field__error');
  small.innerText = message;
}

// Check email is valid
// Проверяем валидацию почты
function checkEmail(input) {
  // Определяем регулярное выражение
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // Возвращаем значение проверки, приведя значение email к маленьким буквам
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}

// Check passwords match
// Проверяем на совпадение пароли
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Passwords do not match');
  }
}

function getFieldName(input) {
  // Возвращает первую большую букву и склеивает с остальным текстом ID поля ввода
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Check required fields
// Проверяем пустые поля
function checkRequired(inputArr) {
  inputArr.forEach((input) => {
    if (input.value.trim() === '') {
      // Выводит текст поля с первой большой буквы если поле пустое
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Check input length
// Выводит уведомление об ошибке если value инпута меньше или больше указанных значений
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} must be less than ${max} characters`);
  } else {
    showSuccess(input);
  }
}

function inputEmpty() {
  const parent = this.closest(customField);
  if (!this.value) {
    parent.classList.remove('custom-field--open');
  }
}

function inputFull() {
  const parent = this.closest(customField);
  parent.classList.add('custom-field--open');
}

togglePasswordButton.addEventListener('click', togglePassword);

inputs.forEach((input) => {
  input.addEventListener('focus', inputFull);
  input.addEventListener('blur', inputEmpty);
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  checkEmail(emailInput);
  checkPasswordsMatch(passwordInput, passwordInputRepeat);
  checkLength(name, 5, 10);
});
