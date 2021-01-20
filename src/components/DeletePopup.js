import Popup from './Popup.js'
export default class DeletePopup extends Popup{
    constructor({popupSelector, submitForm}){
        super(popupSelector);
        this._submitForm = submitForm;
    }

    setEventListeners(id){
        super.setEventListeners();
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitForm(id);
        });
    }
}