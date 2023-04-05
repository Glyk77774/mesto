
const infoButton = document.querySelector(".profile__edit-button");
const editProfile = document.querySelector(".popup_edit_profile");
const editProfileClose = document.querySelector(".popup__close");
const userName = document.querySelector(".profile__info-name");
const jobName = document.querySelector(".profile__info-job")
const userNameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_job");
const popupEditForm = editProfile.querySelector(".popup__form");

const likeElementsHeart = document.querySelector(".elements__heart");

const editFoto = document.querySelector(".popup_add_foto");
const AddFotoButton = document.querySelector(".profile__user-button");
const editFotoClose = document.querySelector(".popup__close_card");
const InputPlaceTitle = document.querySelector(".popup__input_type_title");
const InputPlaceLink = document.querySelector(".popup__input_type_link");
const editForms = document.querySelector('.popup__forms');

const popupPhotoCard = document.querySelector('.popup_foto_card');
const popupImageCard = document.querySelector('.popup__image-card');
const popupTitleCard = document.querySelector('.popup__title-card');
const popupButtonClosePhoto = document.querySelector(".popup__close_foto");

const elementsTemplate = document.querySelector("#elements-add").content.querySelector(".elements__item");
const elementsList = document.querySelector(".elements__list");

const openPopup = (popupName) => {
  popupName.classList.add('popup_opened');
};

const closePopup = (popupName) => {
  popupName.classList.remove('popup_opened');
};

function submitHandlerEdit(event) {
  event.preventDefault();
  userName.textContent = userNameInput.value;
  jobName.textContent = jobInput.value;
  closePopup(editProfile);
};

infoButton.addEventListener ('click', () => {
  openPopup(editProfile);
  userNameInput.value = userName.textContent;
  jobInput.value = jobName.textContent;
});

AddFotoButton.addEventListener ('click', () => {
  openPopup(editFoto);
});

editProfileClose.addEventListener('click', () => {
  closePopup(editProfile);
});

editFotoClose.addEventListener('click', () => {
  closePopup(editFoto);
});

function closePopupViewPhoto() {
  closePopup(popupPhotoCard);
};

const likeHeart = (event) => {
  event.target.classList.toggle('elements__heart_active');
};

const handleDeleteCard = (event) => {
  event.target.closest(".elements__item").remove();
};

const generateElementList = (cardData) => {
const templateElements = elementsTemplate.cloneNode(true);
const titleNewElements = templateElements.querySelector(".elements__title");
const likeElementsHeart = templateElements.querySelector(".elements__heart");
const elementsDelete = templateElements.querySelector(".elements__delete");
const elementsImgCard = templateElements.querySelector(".elements__image");
const titleElements = templateElements.querySelector(".elements__title");

elementsImgCard.src = cardData.link;
titleNewElements.textContent = cardData.name;

function handleElementsCard() {
  popupImageCard.src = elementsImgCard.src;
  popupImageCard.alt = titleElements.textContent;
  popupTitleCard.textContent = titleElements.textContent;
  openPopup(popupPhotoCard);
}

elementsImgCard.addEventListener("click", handleElementsCard);
elementsDelete.addEventListener("click", handleDeleteCard);
likeElementsHeart.addEventListener("click", likeHeart);

return templateElements;
}

const renderElements = (cardData) => {
  elementsList.prepend(generateElementList(cardData));
};

initialCards.forEach((cardData) => {
  renderElements(cardData);
});

const submitAddFoto = (event) => {
  event.preventDefault();
  renderElements({
    name: InputPlaceTitle.value,
    link: InputPlaceLink.value,
   });
  event.target.reset();
  closePopup(editFoto);
};

editForms.addEventListener('submit', submitAddFoto);
popupEditForm.addEventListener('submit', submitHandlerEdit);
popupButtonClosePhoto.addEventListener("click", closePopupViewPhoto);