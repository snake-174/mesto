let editButton= document.querySelector('.profile__edit-button');
let popup= document.querySelector('.popup');
let closeButton= popup.querySelector('.popup__close-button');
let form= popup.querySelector('.popup__form');
let inputName= popup.querySelector('.popup__input_type_name');
let inputProfession= popup.querySelector('.popup__input_type_profession');
let name= document.querySelector('.profile__user-name');
let profession = document.querySelector('.profile__user-profession');

function openPopup(){ 
    popup.classList.add('popup_open');
    inputName.value = name.textContent;
    inputProfession.value = profession.textContent;
}

function closePopup(){ 
    popup.classList.remove('popup_open');
}

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    name.textContent = inputName.value;
    profession.textContent = inputProfession.value;
    closePopup();
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
form.addEventListener('submit', formSubmitHandler);



