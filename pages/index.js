import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import Popup from '../components/Popup.js';
import {initialCards,
        gallery,
        editButton,
        addButton,
        popups,
        popupEdit,
        popupAdd,
        formEdit,
        formAdd,
        inputName,
        inputProfession,
        userName,
        profession,
        formConfig
} from '../utils/constants.js';


const popup = new Popup('.popup_edit');
const addValidation = new FormValidator(formAdd, formConfig);
const profileValidation = new FormValidator(formEdit, formConfig);

addValidation.enableValidation();
profileValidation.enableValidation();

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

const card = (data, template, openImagePopup) => {
    const item = new Card(data, template, openImagePopup)
    return item.cardCreate()
}

const defaultCardList = new Section({
    items: initialCards,
    renderer: (item) => {
      defaultCardList.setItem(card(item, '#card', openImagePopup));
    }
  }, gallery);

addButton.addEventListener('click', () => {
    openPopup(popupAdd);
    addValidation.resetValidation();
});

editButton.addEventListener('click', () => {
    //openPopup(popupEdit);
    popup.open(); //закончить
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
popup.log();
defaultCardList.renderItems();