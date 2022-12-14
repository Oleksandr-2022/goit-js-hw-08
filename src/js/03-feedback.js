import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
let formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

populateForm();


function onFormInput(evt) {
  const { name, value } = evt.target;
  formData[name] = value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}


function populateForm() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedMessage) {
    const { email, message } = refs.form.elements;
    email.value = savedMessage.email;
    message.value = savedMessage.message;
    formData = savedMessage;
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();

  console.log(formData);
  evt.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}
