const gallery = document.querySelector('.gallery');
const editButton= document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popupEdit= document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const popupImg = document.querySelector('.popup_img');
const formEdit = popupEdit.querySelector('.popup__form_edit');
const formAdd = popupAdd.querySelector('.popup__form_add');
const inputName = popupEdit.querySelector('.popup__input_type_name');
const inputProfession= popupEdit.querySelector('.popup__input_type_profession');
const inputMesto= popupAdd.querySelector('.popup__input_type_mesto');
const inputImage= popupAdd.querySelector('.popup__input_type_image');
const name = document.querySelector('.profile__user-name');
const profession = document.querySelector('.profile__user-profession');

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

cardCreate = (imageValue, nameValue) => {
    const card = document.querySelector('#card').content;
    const cardElement = card.cloneNode(true);
    const galeryImg = cardElement.querySelector('.gallery__image');
    galeryImg.src = imageValue;
    cardElement.querySelector('.gallery__subtitle-text').textContent = nameValue;
    cardElement.querySelector('.gallery__like-button').addEventListener('click', evt => {
        evt.target.classList.toggle('gallery__like-button_active');
      });

    cardElement.querySelector('.gallery__delete-button').addEventListener('click', evt => {
        const cardDel = evt.target.closest('.gallery__card');
        cardDel.remove();
    });

    galeryImg.addEventListener('click', evt => {
        openPopup(popupImg);
        popupImg.querySelector('.popup__image').src = evt.target.src;
        popupImg.querySelector('.popup__image-subtitle').textContent = evt.target.nextSibling.nextSibling.querySelector('.gallery__subtitle-text').textContent;
    });
    return cardElement;
}

initialCards.forEach((arr) => {
    gallery.append(cardCreate(arr.link, arr.name));
});

addButton.addEventListener('click', () => {
    openPopup(popupAdd);
});

editButton.addEventListener('click', () => {
    openPopup(popupEdit);
    inputName.value = name.textContent;
    inputProfession.value = profession.textContent;
});

formEdit.addEventListener('submit', evt => {
    evt.preventDefault();
    name.textContent = inputName.value;
    profession.textContent = inputProfession.value;
    closePopup(popupEdit);
});

formAdd.addEventListener('submit', evt => {
    evt.preventDefault();
    gallery.prepend(cardCreate(inputImage.value, inputMesto.value));
    closePopup(popupAdd);
    formAdd.reset();
});

