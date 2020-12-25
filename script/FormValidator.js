export default class FormValidator{
    constructor(form, config){
        this._form = form;
        this._buttonActive = config.buttonActive;
        this._buttonDisabled= config.buttonDisabled;
        this._input = config.input;
        this._inputList = this._form.querySelectorAll(this._input);
        this._inputInvalid = config.inputInvalid;
    };
  
    _showInputError(inputElement, errorMessage){
        const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._inputInvalid);
        errorElement.textContent = errorMessage;
    };
  
    _hideInputError(inputElement){
        const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._inputInvalid);
        errorElement.textContent = '';
    };
  
    _checkInputValidity(inputElement){
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    };

    _buttonDisable(buttonElement){
        buttonElement.classList.add(this._buttonDisabled);
        buttonElement.disabled = true; 
    };

    _toggleButtonState(isActive, buttonElement){
        if(!isActive){
            this._buttonDisable(buttonElement);
        } else{
            buttonElement.classList.remove(this._buttonDisabled);
            buttonElement.disabled = false;
        }
    };
  
    _setEventListeners(){
        const buttonElement = this._form.querySelector(this._buttonActive);
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () =>{
                this._checkInputValidity(inputElement);
                this._toggleButtonState(this._form.checkValidity(), buttonElement);
            });
        });
    }; 

    resetValidation(){
        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement);
        });
    };

    enableValidation(){
        const buttonElement = this._form.querySelector(this._buttonActive);
        this._setEventListeners(this._form);
        this._form.addEventListener('submit', evt => {
            evt.preventDefault();
            this._buttonDisable(buttonElement); 
        });
        this._toggleButtonState(this._form.checkValidity(), buttonElement); 
    
    };
}
 