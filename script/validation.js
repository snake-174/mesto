
  const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add('popup__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__input-error_active');
  };
  
  const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove('popup__input_type_error');
    errorElement.classList.remove('popup__input-error_active');
    errorElement.textContent = '';
  };
  
  const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  };
  const buttonDisable = buttonElement =>{
    buttonElement.classList.add('popup__save-button_error');
    buttonElement.disabled = true;
}

  const toggleButtonState = (isActive, buttonElement) => {
    if(!isActive){
      buttonDisable(buttonElement);
    } else{
      buttonElement.classList.remove('popup__save-button_error');
      buttonElement.disabled = false;
    }
  }
  
  const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    const buttonElement = formElement.querySelector('.popup__save-button');
  
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(formElement.checkValidity(), buttonElement);
      });
    });
  }; 
  
  const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    
    formList.forEach((formElement) => {
      const buttonElement = formElement.querySelector('.popup__save-button');
      setEventListeners(formElement);

      formElement.addEventListener('submit', evt => {
        evt.preventDefault();
        buttonDisable(buttonElement); 
      });
    toggleButtonState(formElement.checkValidity(), buttonElement);
    });
  };
  
  enableValidation();