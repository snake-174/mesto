import Popup from './Popup.js';

export default class PopupWithForm extends Popup{
    constructor({popupSelector, submmitForm}){
        super(popupSelector);
        this._saveButton = this._popup.querySelector('.popup__save-button');
        this._submitForm = submmitForm;
    }

    open(){
        super.open();
    }

    close(){
        super.close();
        this._popup.querySelector('.popup__form').reset();
    }

    _getInputValues(){
        this._inputList = this._popup.querySelectorAll('.popup__input');
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues  
    }

    setEventListeners(){
        super.setEventListeners();
        this._popup.addEventListener('submit', () => {
            this._submitForm(this._getInputValues(), this._saveButton);
        });
    }
}