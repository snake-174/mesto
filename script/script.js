const editButton= document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupEdit= document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const popupImg = document.querySelector('.popup_img');
const closeButtonAdd = popupAdd.querySelector('.popup__close-button_add');
const closeButtonEdit = popupEdit.querySelector('.popup__close-button_edit');
const closeButtonImg = popupImg.querySelector('.popup__close-button_img');
const formEdit = popupEdit.querySelector('.popup__form_edit');
const formAdd = popupAdd.querySelector('.popup__form_add');
const inputName = popupEdit.querySelector('.popup__input_type_name');
const inputProfession= popupEdit.querySelector('.popup__input_type_profession');
const inputMesto= popupAdd.querySelector('.popup__input_type_mesto');
const inputImage= popupAdd.querySelector('.popup__input_type_image');
const name = document.querySelector('.profile__user-name');
const profession = document.querySelector('.profile__user-profession');
const addButton = document.querySelector('.profile__add-button');

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

openPopup = popupType => { 
    popupType.classList.add('popup_open');   
}

closePopup = popupType => { 
    popupType.classList.remove('popup_open');
}

cardCreate = (imageValue, nameValue) => {
    const card = document.querySelector('#card').content;
    const cardElement = card.cloneNode(true);
    cardElement.querySelector('.gallery__image').src = imageValue;
    cardElement.querySelector('.gallery__subtitle-text').textContent = nameValue;
    cardElement.querySelector('.gallery__like-button').addEventListener('click', evt => {
        evt.target.classList.toggle('gallery__like-button_active');
      });

    cardElement.querySelector('.gallery__delete-button').addEventListener('click', evt => {
        const cardDel = evt.target.closest('.gallery__card');
        cardDel.remove();
    });

    cardElement.querySelector('.gallery__image').addEventListener('click', evt => {
        openPopup(popupImg);
        popupImg.querySelector('.popup__image').src = evt.target.src;
        popupImg.querySelector('.popup__image-subtitle').textContent = evt.target.nextSibling.nextSibling.querySelector('.gallery__subtitle-text').textContent;
    });

    document.querySelector('.gallery').prepend(cardElement);
    return
}

initialCards.forEach(function cardLoad(arr){
    cardCreate(arr.link, arr.name);
});



addButton.addEventListener('click', () => {
    openPopup(popupAdd);
})

editButton.addEventListener('click', () => {
    openPopup(popupEdit);
    inputName.value = name.textContent;
    inputProfession.value = profession.textContent;
});

closeButtonEdit.addEventListener('click', () => {
    closePopup(popupEdit);
});

closeButtonAdd.addEventListener('click', () => {
    closePopup(popupAdd);
});

closeButtonImg.addEventListener('click', () => {
    closePopup(popupImg);
});

formEdit.addEventListener('submit', evt => {
    evt.preventDefault(); 
    name.textContent = inputName.value;
    profession.textContent = inputProfession.value;
    closePopup(popupEdit);
});
 
formAdd.addEventListener('submit', evt =>{
    evt.preventDefault();
    cardCreate(inputImage.value, inputMesto.value);
    closePopup(popupAdd);
    formAdd.reset();
});

