import Popup from './Popup.js';

export default class PopupWithImage extends Popup{
    constructor(popupSelector){
        super(popupSelector);
        this._image = this._popup.querySelector('.popup__image');
    }

    open(link, name){
        this._image.src = link;
        this._image.alt = name;
        this._popup.querySelector('.popup__image-subtitle').textContent = name;
        super.open();
    }

    setEventListeners(){
        super.setEventListeners();
    }
}