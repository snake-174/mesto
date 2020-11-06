const editButton= document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupEdit= document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const closeButtonAdd = popupAdd.querySelector('.popup__close-button_add');
const closeButtonEdit = popupEdit.querySelector('.popup__close-button_edit');
const formEdit = popupEdit.querySelector('.popup__form_edit');
const formAdd = popupAdd.querySelector('.popup__form_add');
const inputName = popupEdit.querySelector('.popup__input_type_name');
const inputProfession= popupEdit.querySelector('.popup__input_type_profession');
const inputMesto= popupAdd.querySelector('.popup__input_type_mesto');
const inputImage= popupAdd.querySelector('.popup__input_type_image');
const name = document.querySelector('.profile__user-name');
const profession = document.querySelector('.profile__user-profession');
const addButton = document.querySelector('.profile__add-button');
//const gallery = document.querySelector('.gallery');


const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
]; 


initialCards.forEach(function cardLoad(arr){
    const cardElement = document.querySelector('#card').content.cloneNode(true);
    cardElement.querySelector('.gallery__image').src = arr.link;
    cardElement.querySelector('.gallery__subtitle-text').textContent = arr.name;
    document.querySelector('.gallery').append(cardElement);
})

function openPopup(item){ 
    item.classList.add('popup_open');   
}

function closePopup(item){ 
    item.classList.remove('popup_open');
}

addButton.addEventListener('click', openPopupAdd = () => {
    openPopup(popupAdd);
})

editButton.addEventListener('click', openPopupEdit = () => {
    openPopup(popupEdit);
    inputName.value = name.textContent;
    inputProfession.value = profession.textContent;
});

closeButtonEdit.addEventListener('click', closePopupEdit = () => {
    closePopup(popupEdit);
});

closeButtonAdd.addEventListener('click', closePopupAdd = () => {
    closePopup(popupAdd);
});

formEdit.addEventListener('submit', formSubmitHandler = evt => {
    evt.preventDefault(); 
    name.textContent = inputName.value;
    profession.textContent = inputProfession.value;
    closePopup(popupEdit);
});

formAdd.addEventListener('submit', formSubmitHandler = evt => {
    const cardElement = document.querySelector('#card').content.cloneNode(true);
    evt.preventDefault(); 
    cardElement.querySelector('.gallery__image').src = inputImage.value;
    cardElement.querySelector('.gallery__subtitle-text').textContent = inputMesto.value;
    document.querySelector('.gallery').prepend(cardElement);
    closePopup(popupAdd)
    formAdd.reset();
})

document.querySelector('.gallery__like-button').addEventListener('click', like = () => {
    gallery.querySelector('.gallery__like-button').classList.toggle('gallery__like-button_active');
});


