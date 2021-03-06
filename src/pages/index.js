import './index.css';
import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import DeletePopup from '../components/DeletePopup.js'
import Api from '../components/Api.js';
import {gallery,
        editButton,
        addButton,
        profileAvatarOverlay,
        profileAvatar,
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
let curentUserId = '';
const imgPopup = new PopupWithImage('.popup_img');
const addValidation = new FormValidator(formAdd, formConfig);
const profileValidation = new FormValidator(formEdit, formConfig);
const profilePicValidation = new FormValidator(formProfilePic, formConfig);
const api = new Api ({
    address: 'https://mesto.nomoreparties.co/v1/cohort-19',
    token: '58338ed9-892f-4dd7-97da-f7f2f7277b20'
});

Promise.all([
    api.getUserInfo(),
    api.getInitialCards()
])
    .then(res => { 
        const [userData, initialCards] = res;
        curentUserId = userData._id;
        defaultCardList.renderItems(initialCards);
        userInfo.setUserInfo(userData);
        userInfo.setUserAvatar(userData);
    })
    .catch(err => console.log(`Ошибка ${err}`));

const card = (obj, template) => {
    const card = new Card(obj, {
        handleCardClick: (image, name) => {
            imgPopup.open(image, name);
        },
        handleLikeClick: (id, isLiked) => {
            if (isLiked){
                api.removeLike(id)
                    .then((res) => {
                        card.like(res.likes);
                        card.diactivateLike();
                    })
                    .catch(err => console.log(err))
            }else{
                api.setLike(id)
                    .then((res) => {
                        card.like(res.likes);
                    })
                    .catch(err => console.log(err))
                }
        },
        handleDeleteClick: (id) =>{
            const deletePopup = new DeletePopup({
                popupSelector: '.popup_delete',
                submitForm: (id) => {
                    api.removeCard(id)
                        .then(() => card.delete())
                        .catch(err => console.log(`ошибка ${err}`))
                        .finally(() => deletePopup.close());
                }
            })
            deletePopup.setEventListeners(id)
            deletePopup.open()
        }
    }, template, curentUserId);

    return card.cardCreate();
}
const userInfo = new UserInfo(userName, profession, profileAvatar);

const addPopup = new PopupWithForm({popupSelector: '.popup_add',
    submmitForm: (inputs, saveButton) => { 
        saveButton.textContent = 'Сохранение...';
        api.addCard(inputs)
            .then(res => {
                defaultCardList.setItem(card(res, '#card'), false);
            })
            .catch(err => console.log(err))
            .finally(() => {
                saveButton.textContent = 'Сохранить';
                addPopup.close();
            });        
    }
});

const editPopup = new PopupWithForm({popupSelector: '.popup_edit',
    submmitForm: (inputs, saveButton) => { 
        saveButton.textContent = 'Сохранение...';
        api.changeUserInfo(inputs)
            .then(res => {
                userInfo.setUserInfo(res);
            })
            .catch(err => console.log(err))
            .finally(() => {
                saveButton.textContent = 'Сохранить';
                editPopup.close();
            })        
     }
});

const profileAvatarPopup = new PopupWithForm({
    popupSelector: '.popup_profile-pic',
    submmitForm: (inputs, saveButton) => {
        saveButton.textContent = 'Сохранение...';
        api.changeUserAvatar(inputs)
            .then(res => {
                userInfo.setUserAvatar(res)
            })
            .catch(err => console.log(err))
            .finally(() => {
                saveButton.textContent = 'Сохранить';
                profileAvatarPopup.close();
            });
    }})

const defaultCardList = new Section({
    renderer: (item) => {
        defaultCardList.setItem(card(item, '#card'), true);
    }
}, gallery);

addButton.addEventListener('click', () => {
    addPopup.open();
    addValidation.resetValidation();
});

editButton.addEventListener('click', () => {
    editPopup.open();
    const userData = userInfo.getUserInfo();
    inputName.value = userData.name;
    inputProfession.value =  userData.about;
    profileValidation.resetValidation();
});

profileAvatarOverlay.addEventListener('click', () => {
    profileAvatarPopup.open();
    profilePicValidation.resetValidation();
});

editPopup.setEventListeners();
addPopup.setEventListeners();
imgPopup.setEventListeners();
profileAvatarPopup.setEventListeners();
addValidation.enableValidation();
profileValidation.enableValidation();
profilePicValidation.enableValidation();