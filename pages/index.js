import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js'
import {initialCards,
        gallery,
        editButton,
        addButton,
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
const imgPopup = new PopupWithImage('.popup_img');
const addValidation = new FormValidator(formAdd, formConfig);
const profileValidation = new FormValidator(formEdit, formConfig);

addValidation.enableValidation();
profileValidation.enableValidation();

const card = (obj, {handleCardClick}, template) => {
    const item = new Card(obj, {handleCardClick}, template)
    return item.cardCreate()
}

const defaultCardList = new Section({
    items: initialCards,
    renderer: (item) => {
      defaultCardList.setItem(card(item, {handleCardClick: (image, name)=>{
            imgPopup.open(image, name);
            imgPopup.setEventListeners();
        }}, '#card'));
}}, gallery);

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
    gallery.prepend(cardCreate(inputs, '#card'));
    close();
    formAdd.reset();
});

defaultCardList.renderItems();