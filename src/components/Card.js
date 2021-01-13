export default class Card {
    constructor(data, {handleCardClick},  template){
        this._image = data.link;
        this._mesto = data.mesto;
        this._template = template;
        this._handleCardClick = handleCardClick; 
    }

    _getTemplate(){
        return document.querySelector(this._template).content.querySelector('.gallery__card').cloneNode(true);
    }

    cardCreate(){
        this._element = this._getTemplate();

        this._setEventListeners();
        this._element.querySelector('.gallery__image').src = this._image;
        this._element.querySelector('.gallery__image').alt = this._mesto;
        this._element.querySelector('.gallery__subtitle-text').textContent = this._mesto;

        return this._element;
    }
    _delete(){
        this._element.remove();
        this.card = null
    }

    _like(){
        this._element.querySelector('.gallery__like-button').classList.toggle('gallery__like-button_active');
    }

    _setEventListeners(){
        this._element.querySelector('.gallery__like-button').addEventListener('click', () => {
            this._like();
        });

        this._element.querySelector('.gallery__delete-button').addEventListener('click', () => {
            this._delete();
        });

        this._element.querySelector('.gallery__image').addEventListener('click', () => {
            this._handleCardClick(this._image, this._mesto);
        })
    }
}
