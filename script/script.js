import FormValidator from './FormValidator.js';
import Card from './Card.js';
import {initialCards} from './initialCards.js';
const gallery = document.querySelector('.gallery');
const editButton= document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popups = document.querySelectorAll('.popup');
const popupEdit= document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const formEdit = popupEdit.querySelector('.popup__form_edit');
const formAdd = popupAdd.querySelector('.popup__form_add');
const inputName = popupEdit.querySelector('.popup__input_type_name');
const inputProfession = popupEdit.querySelector('.popup__input_type_profession');
const userName = document.querySelector('.profile__user-name');
const profession = document.querySelector('.profile__user-profession');
const formConfig = {
    button: '.popup__save-button',
    buttonDisabled: 'popup__save-button_error',
    input: '.popup__input',
    inputInvalid: 'popup__input_type_error'
}
const addValidation = new FormValidator(formAdd, formConfig);
const profileValidation = new FormValidator(formEdit, formConfig);

profileValidation.enableValidation();
addValidation.enableValidation();

const removeEventListeners = () => {
    document.removeEventListener('keydown', escPressed);
    popups.forEach((item) =>{
        item.querySelector('.popup__close-button').removeEventListener('click', close);
        item.querySelector('.popup__overlay').removeEventListener('mousedown', close);
    });
}

const close = () => {
    popups.forEach((item) => {
        if (item.classList.contains('popup_open')) {
            item.classList.remove('popup_open');
            removeEventListeners();
        }
    });
}

const escPressed = evt => {
    if (evt.key === 'Escape') {
        close();
    }
}

const openPopup = popupType => {
    popupType.classList.add('popup_open');
    document.addEventListener('keydown', escPressed);
    popupType.querySelector('.popup__close-button').addEventListener('click', close);
    popupType.querySelector('.popup__overlay').addEventListener('mousedown', close);
}

const openImagePopup = (name, link) => {
    const popupImg = document.querySelector('.popup_img');
    openPopup(popupImg);
    popupImg.querySelector('.popup__image').src = link;
    popupImg.querySelector('.popup__image').alt = name;
    popupImg.querySelector('.popup__image-subtitle').textContent = name;
}

const cardCreate = (data, template, openImagePopup) => {
     const card = new Card(data, template, openImagePopup)
     return card.cardCreate()
}

initialCards.forEach((item) => {
    gallery.append(cardCreate(item, '#card', openImagePopup));
});

addButton.addEventListener('click', () => {
    openPopup(popupAdd);
    addValidation.resetValidation();
});

editButton.addEventListener('click', () => {
    openPopup(popupEdit);
    inputName.value = userName.textContent;
    inputProfession.value = profession.textContent;
    profileValidation.resetValidation();
});

formEdit.addEventListener('submit', () => {
    userName.textContent = inputName.value;
    profession.textContent = inputProfession.value;
    close();
});

formAdd.addEventListener('submit', () => {
    const inputs = {
        link: popupAdd.querySelector('.popup__input_type_image').value, 
        name: popupAdd.querySelector('.popup__input_type_mesto').value
    };
    gallery.prepend(cardCreate(inputs, '#card', openImagePopup));
    close();
    formAdd.reset();
});

