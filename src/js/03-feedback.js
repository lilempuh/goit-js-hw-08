
import throttle from 'lodash.throttle';

const fieldDatas = document.querySelector('.feedback-form');


const localKey = 'feedback-form-state';
fieldDatas.addEventListener('input', throttle(handleInput, 500));


function checkingStorageForDatas() {
 
  const savedDatas = localStorage.getItem(localKey);
  if (savedDatas) {
    const parsedSavedDatas = JSON.parse(savedDatas);

    fieldDatas.email.value = parsedSavedDatas.email;
    fieldDatas.message.value = parsedSavedDatas.message;
    return parsedSavedDatas;
  } 
}
checkingStorageForDatas();

let formData = checkingStorageForDatas() ?? { email: '', message: '' };

function handleInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(localKey, JSON.stringify(formData));

}

fieldDatas.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    
    if (!formData.email) {
    alert('Email должен быть валидным');
    return;
  }

  if (!formData.message) {
    alert('Заполните пожалуйста поле message');
    return;
    }
    
  if (localStorage.length) {
    const getSavedDatas = localStorage.getItem(localKey);
    const parsedDaveddatas = JSON.parse(getSavedDatas);
    console.log(parsedDaveddatas);
    
  } else {
    return;
  }

  event.currentTarget.reset();
  localStorage.removeItem(localKey);
  formData.email = '';
  formData.message = '';

  