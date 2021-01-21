export default class Card {
    constructor(data, {handleCardClick, handleLikeClick, handleDeleteClick},  template, curentUserId){
        this._image = data.link;
        this._mesto = data.name;
        this._id = data._id;
        this._likes = data.likes;
        this._cardId = data.owner._id;
        this._userId = curentUserId;
        this._template = template;
        this._handleCardClick = handleCardClick; 
        this._handleLikeClick = handleLikeClick;
        this._handleDeleteClick = handleDeleteClick;
    }

    _getTemplate(){
        return document.querySelector(this._template).content.querySelector('.gallery__card').cloneNode(true);
    }

    cardCreate(){ 
        this._element = this._getTemplate();
        this._galleryImg = this._element.querySelector('.gallery__image');
        this._delButton = this._element.querySelector('.gallery__delete-button');

        this._setEventListeners();
        this._galleryImg.src = this._image;
        this._galleryImg.alt = this._mesto;
        this._element.querySelector('.gallery__subtitle-text').textContent = this._mesto;

        if (this._cardId !== this._userId){
            this._delButton.classList.add('gallery__delete-button_hiden');
        }

        this.like(this._likes)
        return this._element;
    }

    delete(){
        this._element.remove();
        this._element = null
    }

    _setEventListeners(){
        this._element.querySelector('.gallery__like-button').addEventListener('click', () => {
            this._handleLikeClick(this._id, this._isLiked());
        });

        this._delButton.addEventListener('click', () => {
            this._handleDeleteClick(this._id);
        });

        this._element.querySelector('.gallery__image').addEventListener('click', () => {
            this._handleCardClick(this._image, this._mesto);
        });
    }

    _setLikes(data){
        this._element.querySelector('.gallery__like-number').textContent = data.length
    }

    _isLiked(){
        if(this._element.querySelector('.gallery__like-button').classList.contains('gallery__like-button_active')){            
            return true
        }        
        return false
    }

    like(data){
        const likeButton = this._element.querySelector('.gallery__like-button');
        this._likes = data;
        this._setLikes(data);
        for (let i = 0; i < data.length; i++){
            if (data[i]._id === this._userId){
                likeButton.classList.add('gallery__like-button_active');
            } else {
                likeButton.classList.remove('gallery__like-button_active');
            }
        }       
    }

    diactivateLike(){
        this._element.querySelector('.gallery__like-button').classList.remove('gallery__like-button_active')
    }
}
