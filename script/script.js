const editButton= document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupEdit= document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const closeButtonAdd = popupAdd.querySelector('.popup__close-button_add');
const closeButtonEdit = popupEdit.querySelector('.popup__close-button_edit');
const form = popup.querySelector('.popup__form');
const inputName = popup.querySelector('.popup__input_type_name');
const inputProfession= popup.querySelector('.popup__input_type_profession');
const name = document.querySelector('.profile__user-name');
const profession = document.querySelector('.profile__user-profession');
const addButton = document.querySelector('.profile__add-button');
const gallery = document.querySelector('.gallery');

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
    const card = document.querySelector('#card').content;
    const cardElement = card.cloneNode(true);
    cardElement.querySelector('.gallery__image').src = arr.link;
    cardElement.querySelector('.gallery__subtitle-text').textContent = arr.name;
    gallery.append(cardElement);
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

form.addEventListener('submit', function formSubmitHandler (evt) {
    evt.preventDefault(); 
    name.textContent = inputName.value;
    profession.textContent = inputProfession.value;
    closePopup(popupEdit);
});



