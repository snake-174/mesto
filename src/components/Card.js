export default class Card {
    constructor(data, {handleCardClick, handleLikeClick, handleDeleteClick},  template){
        this._image = data.link;
        this._mesto = data.name;
        this._id = data._id;
        this._likes = data.likes;
        this._userId = data.owner._id;
        this._template = template;
        this._handleCardClick = handleCardClick; 
        this._handleLikeClick = handleLikeClick;
        this._handleDeleteClick = handleDeleteClick;
    }

    _getTemplate(){
        return document.querySelector(this._template).content.querySelector('.gallery__card').cloneNode(true);
    }

    cardCreate(userId){ 
        this._element = this._getTemplate();
        this._galleryImg = this._element.querySelector('.gallery__image');
        this._delButton = this._element.querySelector('.gallery__delete-button');

        this._setEventListeners();
        this._galleryImg.src = this._image;
        this._galleryImg.alt = this._mesto;
        this._element.querySelector('.gallery__subtitle-text').textContent = this._mesto;
        if (this._userId !== userId){
            this._delButton.classList.add('gallery__delete-button_hiden');
        }
        this._setLikes();
        //console.log(this._userId, userId)
        return this._element;
    }
    delete(){
        this._element.remove();
        this._element = null
    }

    _like(){
        this._element.querySelector('.gallery__like-button').classList.toggle('gallery__like-button_active');
    }

    _setEventListeners(){
        this._element.querySelector('.gallery__like-button').addEventListener('click', () => {
            this._handleLikeClick(this._id, isLiked);
            //this._like();
        });

        this._delButton.addEventListener('click', () => {
            this._handleDeleteClick(this._id);
            //this._delete();
        });

        this._element.querySelector('.gallery__image').addEventListener('click', () => {
            this._handleCardClick(this._image, this._mesto);
        });
    }

    _setLikes(){
        this._element.querySelector('.gallery__like-number').textContent = this._likes.length
    }
}
