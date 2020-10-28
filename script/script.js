let editButton= document.querySelector('.profile__edit-button');
let popup= document.querySelector('.popup');
let closeButton= popup.querySelector('.popup__close-button');
let saveButton= popup.querySelector('.popup__save-button');
let inputName= popup.querySelector('.popup__input_type_name');
let inputProfession= popup.querySelector('.popup__input_type_profession');
let name= document.querySelector('.profile__user-name');
let profession = document.querySelector('.profile__user-profession');

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    name.textContent = inputName.value;
    profession.textContent = inputProfession.value;
    popup.classList.remove('popup_open');
}

function open(){ 
    popup.classList.add('popup_open');
    inputName.value = name.textContent;
    inputProfession.value = profession.textContent;
}

function close(){ 
    popup.classList.remove('popup_open');
}

editButton.addEventListener('click', open);
closeButton.addEventListener('click', close);
saveButton.addEventListener('click', formSubmitHandler) 


