export default class Card {
    constructor(data, {handleCardClick, handleLikeClick, handleDeleteClick},  template, id){
        this._image = data.link;
        this._mesto = data.name;
        this._id = id;
        this._template = template;
        this._handleCardClick = handleCardClick; 
       // this._handleLikeClick = handleLikeClick;
        //this._handleDeleteClick = handleDeleteClick;
    }

    _getTemplate(){
        return document.querySelector(this._template).content.querySelector('.gallery__card').cloneNode(true);
    }

    cardCreate(){ 
        this._element = this._getTemplate();
        this._galleryImg = this._element.querySelector('.gallery__image');

        this._setEventListeners();
        this._galleryImg.src = this._image;
        this._galleryImg.alt = this._mesto;
        this._element.querySelector('.gallery__subtitle-text').textContent = this._mesto;

        return this._element;
    }
    _delete(){
        this._element.remove();
        this._element = null
    }

    _like(){
        this._element.querySelector('.gallery__like-button').classList.toggle('gallery__like-button_active');
    }

    getId(){
        return this._id
    }

    _setEventListeners(){
        this._element.querySelector('.gallery__like-button').addEventListener('click', () => {
            //this._handleLikeClick();
            this._like();
        });

        this._element.querySelector('.gallery__delete-button').addEventListener('click', () => {
            //this._handleDeleteClick()
            this._delete();
        });

        this._element.querySelector('.gallery__image').addEventListener('click', () => {
            this._handleCardClick(this._image, this._mesto);
        })

        
    }
}
