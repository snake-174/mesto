export default class Popup{
    constructor(popupSelector){
        this._popup = document.querySelector(popupSelector);
    }
    
    open(){
        this._popup.classList.add('popup_open');
        this.setEventListeners();
        console.log(this._popup);
    }

    close(){
        this._popup.classList.remove('popup_open');
        /*this._popup.querySelector('.popup__close-button').removeEventListener('click', this.open);
        this._popup.querySelector('.popup__overlay').removeEventListener('mousedown', this.close);
        document.removeEventListener('keydown', this._handleEscClose);*/
    }

    _handleEscClose(){
        if (evt.key === 'Escape'){
            this.close();
        }
    }

    setEventListeners(){
        this._popup.querySelector('.popup__close-button').addEventListener('click', this.close);
        this._popup.querySelector('.popup__overlay').addEventListener('mousedown', this.close);
        document.addEventListener('keydown', this._handleEscClose);
    }
}