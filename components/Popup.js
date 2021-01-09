export default class Popup{
    constructor(popupSelector){
        this._popup = document.querySelector(popupSelector);
    }
    
    open(){
        this._popup.classList.add('popup_open');
    }

    close(){
        console.log('a'); //не забудь убрать
        this._popup.classList.remove('popup_open');
    }

    _handleEscClose(evt){
        if (evt.key === 'Escape'){
            this.close();
        }
    }

    setEventListeners(){
        this._popup.querySelector('.popup__close-button').addEventListener('click', () => this.close());
        this._popup.querySelector('.popup__overlay').addEventListener('mousedown', () => this.close());
        document.addEventListener('keydown', (evt) => this._handleEscClose(evt));
    }
}