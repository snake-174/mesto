import './index.css';
import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Api from '../components/Api.js';
import {gallery,
        editButton,
        addButton,
        profilePic,
        formEdit,
        formAdd,
        formProfilePic,
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
const profilePicValidation = new FormValidator(formProfilePic, formConfig);
const api = new Api ({
    address: 'https://mesto.nomoreparties.co/v1/cohort-19',
    token: '58338ed9-892f-4dd7-97da-f7f2f7277b20'
});
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

const profilePicPopup = new PopupWithForm({popupSelector: '.popup_profile-pic',
    submmitForm: (inputs) => {
        profilePic.src = inputs.pic;
    }})

const defaultCardList = new Section({
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

profilePic.addEventListener('click', () => {
    profilePicPopup.open();
    profilePicValidation.resetValidation();
});

Promise.all([
    api.getUserInfo(),
    api.getInitialCards()
])
    .then(res => {
        defaultCardList.renderItems(res[1]);
        userInfo.setUserInfo(res[0]);
        console.log(res[0]);
    })
    .catch(err => console.log(`Ошибка ${err.status}`));

editPopup.setEventListeners();
addPopup.setEventListeners();
imgPopup.setEventListeners();
profilePicPopup.setEventListeners();
addValidation.enableValidation();
profileValidation.enableValidation();
profilePicValidation.enableValidation();