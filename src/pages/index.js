import './index.css';
import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import {initialCards,
        gallery,
        editButton,
        addButton,
        formEdit,
        formAdd,
        inputName,
        inputProfession,
        userName,
        profession,
        formConfig
} from '../utils/constants.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
const imgPopup = new PopupWithImage('.popup_img');
const addValidation = new FormValidator(formAdd, formConfig);
const profileValidation = new FormValidator(formEdit, formConfig);

const card = (obj, {handleCardClick}, template) => {
    const item = new Card(obj, {handleCardClick}, template)
    return item.cardCreate()
}
const userInfo = new UserInfo(userName, profession);

const addPopup = new PopupWithForm({popupSelector: '.popup_add',
    submmitForm: (inputs) => { 
        defaultCardList.setItem(card(inputs, {handleCardClick: (image, name)=>{
            imgPopup.open(image, name);
        }}, '#card'), false);
    }
});

const editPopup = new PopupWithForm({popupSelector: '.popup_edit',
    submmitForm: (inputs) => { 
        userInfo.setUserInfo(inputs);
     }
});

const defaultCardList = new Section({
    items: initialCards,
    renderer: (item) => {
      defaultCardList.setItem(card(item, {handleCardClick: (image, name) => {
            imgPopup.open(image, name);  
        }}, '#card'), true);
}}, gallery);

addButton.addEventListener('click', () => {
    addPopup.open();
    addValidation.resetValidation();
});

editButton.addEventListener('click', () => {
    editPopup.open();
    const userData = userInfo.getUserInfo();
    inputName.value = userData.name;
    inputProfession.value =  userData.profession;
    profileValidation.resetValidation();
});

editPopup.setEventListeners();
addPopup.setEventListeners();
imgPopup.setEventListeners();
defaultCardList.renderItems();
addValidation.enableValidation();
profileValidation.enableValidation();