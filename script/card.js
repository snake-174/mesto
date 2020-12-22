export class Card {
    constructor(data, template, openImagePopup){
        this._image = data.link;
        this._name = data.name;
        this._template = template;
        this._openImagePopup = openImagePopup;
    }

    _getTemplate(){
        const cardElement = document.querySelector(this._template).content.querySelector('.gallery__card').cloneNode(true);

        return cardElement;
    }

    cardCreate(){
        this._element = this._getTemplate();

        this._setEventListeners();
        this._element.querySelector('.gallery__image').src = this._image;
        this._element.querySelector('.gallery__subtitle-text').textContent = this._name;

        return this._element;
    }
    _delete(){
        this._element.remove();
    }

    _like(){
        this._element.querySelector('.gallery__like-button').classList.add('gallery__like-button_active');
    }

    _setEventListeners(){
        this._element.querySelector('.gallery__like-button').addEventListener('click', () => {
            this._like();
        });

        this._element.querySelector('.gallery__delete-button').addEventListener('click', ()=>{
            this._delete();
        });

        this._element.querySelector('.gallery__image').addEventListener('click', ()=>{
            this._openImagePopup(this._name, this._image);
        });
    }
}
