import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { initialCards } from "./initialCards.js";

const infoButton = document.querySelector(".profile__edit-button");
const profileEdit = document.querySelector(".popup_edit_profile");
const fotoEdit = document.querySelector(".popup_add_foto");
const popupPhotoCard = document.querySelector(".popup_foto_card");
const profileEditClose = document.querySelector(".popup__close");
const fotoEditClose = document.querySelector(".popup__close_card");
const popupButtonClosePhoto = document.querySelector(".popup__close_foto");
const formElementEdit = document.querySelector(".popup__form_profile");
const formFotoEdit = document.querySelector(".popup__form_foto");
const userNameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_job");

const userName = document.querySelector(".profile__info-name");
const jobName = document.querySelector(".profile__info-job");
const fotoButtonAdd = document.querySelector(".profile__user-button");
const elementsList = document.querySelector(".elements__list");
const inputPlaceTitle = document.querySelector(".popup__input_type_title");
const inputPlaceLink = document.querySelector(".popup__input_type_link");
const popupImageCard = document.querySelector(".popup__image-card");
const popupTitleCard = document.querySelector(".popup__title-card");

const selectors = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupClickEsc);
  popup.addEventListener("mousedown", closePopupClickOverlay);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupClickEsc);
  popup.removeEventListener("mousedown", closePopupClickOverlay);
}

function closePopupClickOverlay(event) {
  if (event.target === event.currentTarget) {
    closePopup(event.currentTarget);
  }
}

function closePopupClickEsc(event) {
  if (event.key === "Escape") {
    const popupOpened = document.querySelector(".popup_opened");
    closePopup(popupOpened);
  }
}

function handleProfileFormSubmit(event) {
  event.preventDefault();
  userName.textContent = userNameInput.value;
  jobName.textContent = jobInput.value;
  closePopup(profileEdit);
}
formElementEdit.addEventListener("submit", handleProfileFormSubmit);

function openPicture(title, link) {
  popupTitleCard.textContent = title;
  popupImageCard.alt = title;
  popupImageCard.src = link;
  openPopup(popupPhotoCard);
}

function handleCardFormSubmit(event) {
  event.preventDefault();
  const myNewCard = {
    title: inputPlaceTitle.value,
    link: inputPlaceLink.value,
  };
  addNewCard(myNewCard);
  closePopup(fotoEdit);
  formFotoEdit.reset();
}

formFotoEdit.addEventListener("submit", handleCardFormSubmit);

function createCard(title, link) {
  return new Card(title, link, "#elements-add").generateCard();
}

function addNewCard(card) {
  elementsList.prepend(createCard(card.title, card.link));
}
initialCards.forEach((card) => {
  addNewCard(card);
});

infoButton.addEventListener("click", () => {
  openPopup(profileEdit);
  userNameInput.value = userName.textContent;
  jobInput.value = jobName.textContent;
});

profileEditClose.addEventListener("click", () => closePopup(profileEdit));
fotoButtonAdd.addEventListener("click", () => {
  openPopup(fotoEdit), formFotoEdit.reset();
});

fotoEditClose.addEventListener("click", () => closePopup(fotoEdit));
popupButtonClosePhoto.addEventListener("click", () =>
  closePopup(popupPhotoCard)
);

const formEditProfile = document.querySelector(".popup_edit_profile");
const formEditProfileValidator = new FormValidator(selectors, formEditProfile);
formEditProfileValidator.enableValidation();

const formAddCard = document.querySelector(".popup_add_foto");
const formAddCardValidator = new FormValidator(selectors, formAddCard);
formAddCardValidator.enableValidation();

export { openPicture };
