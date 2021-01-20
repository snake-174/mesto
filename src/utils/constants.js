export const initialCards = [
    {
        mesto: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        mesto: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        mesto: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        mesto: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        mesto: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        mesto: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

export const gallery = '.gallery';
export const esc = 'Escape';
export const editButton= document.querySelector('.profile__edit-button');
export const addButton = document.querySelector('.profile__add-button');
export const profilePic = document.querySelector('.profile__img-overlay')
export const popupEdit= document.querySelector('.popup_edit');
export const popupAdd = document.querySelector('.popup_add');
export const popupProfilePic = document.querySelector('.popup_profile-pic')
export const formEdit = popupEdit.querySelector('.popup__form_edit');
export const formAdd = popupAdd.querySelector('.popup__form_add');
export const formProfilePic = popupProfilePic.querySelector('.popup__form_profile-pic')
export const inputName = popupEdit.querySelector('.popup__input_type_name');
export const inputProfession = popupEdit.querySelector('.popup__input_type_profession');
export const userName = document.querySelector('.profile__user-name');
export const profession = document.querySelector('.profile__user-profession');
export const formConfig = {
    button: '.popup__save-button',
    buttonDisabled: 'popup__save-button_error',
    input: '.popup__input',
    inputInvalid: 'popup__input_type_error'
}
