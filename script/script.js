import {Card} from './card.js';
import {initialCards} from './initialCards.js'
const gallery = document.querySelector('.gallery');
const editButton= document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popupEdit= document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const formEdit = popupEdit.querySelector('.popup__form_edit');
const formAdd = popupAdd.querySelector('.popup__form_add');
const inputName = popupEdit.querySelector('.popup__input_type_name');
const inputProfession = popupEdit.querySelector('.popup__input_type_profession');
const userName = document.querySelector('.profile__user-name');
const profession = document.querySelector('.profile__user-profession');

const closeButton = popupType => {
    const popupButton = popupType.querySelector('.popup__close-button');
    popupButton.addEventListener('click', () => {
        closePopup(popupType)
    }); 
}

const closeOverlay = popupType =>{
    popupType.addEventListener('mousedown', (evt) => {
        closePopup(evt.target);
    });
}

const escPressed = evt =>{
    if(evt.key === 'Escape'){
        closePopup(document.querySelector('.popup_open'));
    }
}

const closePopup = popupType => {
    popupType.classList.remove('popup_open');
    document.removeEventListener('keydown', escPressed);
}

const openPopup = popupType => {
    popupType.classList.add('popup_open');
    document.addEventListener('keydown', escPressed);
    closeButton(popupType);
    closeOverlay(popupType);
}
const openImagePopup = (name, link) =>{
    const popupImg = document.querySelector('.popup_img');
    openPopup(popupImg);
    popupImg.querySelector('.popup__image').src = link;
    popupImg.querySelector('.popup__image-subtitle').textContent = name;
}

initialCards.forEach((item) => {
    const card = new Card(item, '#card', openImagePopup).cardCreate();
    gallery.append(card);
})

addButton.addEventListener('click', () => {
    openPopup(popupAdd);
});

editButton.addEventListener('click', () => {
    openPopup(popupEdit);
    inputName.value = userName.textContent;
    inputProfession.value = profession.textContent;
});

formEdit.addEventListener('submit', evt => {
    evt.preventDefault();
    userName.textContent = inputName.value;
    profession.textContent = inputProfession.value;
    closePopup(popupEdit);
});

formAdd.addEventListener('submit', evt => {
    evt.preventDefault();

    const inputs = 
    {link: popupAdd.querySelector('.popup__input_type_image').value, 
     name: popupAdd.querySelector('.popup__input_type_mesto').value};

    gallery.prepend(new Card(inputs, '#card', openImagePopup).cardCreate());
    closePopup(popupAdd);
    formAdd.reset();
});

