const infoButton = document.querySelector(".profile__edit-button");
const profileEdit = document.querySelector(".popup_edit_profile");
const profileEditClose = document.querySelector(".popup__close");
const userName = document.querySelector(".profile__info-name");
const jobName = document.querySelector(".profile__info-job");
const userNameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_job");
const popupEditForm = profileEdit.querySelector(".popup__form");

const likeElementsHeart = document.querySelector(".elements__heart");

const fotoEdit = document.querySelector(".popup_add_foto");
const fotoButtonAdd = document.querySelector(".profile__user-button");
const fotoEditClose = document.querySelector(".popup__close_card");
const inputPlaceTitle = document.querySelector(".popup__input_type_title");
const inputPlaceLink = document.querySelector(".popup__input_type_link");
const formFotoEdit = document.querySelector(".popup__form_foto");

const popupPhotoCard = document.querySelector(".popup_foto_card");
const popupImageCard = document.querySelector(".popup__image-card");
const popupTitleCard = document.querySelector(".popup__title-card");
const popupButtonClosePhoto = document.querySelector(".popup__close_foto");

const elementsTemplate = document.querySelector("#elements-add").content;
const elementsList = document.querySelector(".elements__list");

const popup = document.querySelectorAll(".popup");

const openPopup = (popupName) => {
  popupName.classList.add("popup_opened");
  document.addEventListener("keydown", handleButtonEsc);
};

const closePopup = (popupName) => {
  popupName.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleButtonEsc);
};

function handleButtonEsc(evt) {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector(".popup_opened");
    closePopup(popupOpened);
  }
}

popup.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup")) {
      closePopup(popup);
    }
  });
});

const likeHeart = (event) => {
  event.target.classList.toggle("elements__heart_active");
};

const handleDeleteCard = (event) => {
  event.target.closest(".elements__item").remove();
};

const generateElement = (cardData) => {
  const templateElement = elementsTemplate.cloneNode(true);
  const titleNewElement = templateElement.querySelector(".elements__title");
  const likeElementsHeart = templateElement.querySelector(".elements__heart");
  const elementsDelete = templateElement.querySelector(".elements__delete");
  const elementsImgCard = templateElement.querySelector(".elements__image");

  elementsImgCard.src = cardData.link;
  elementsImgCard.alt = cardData.name;
  titleNewElement.textContent = cardData.name;

  function handleElementsCard() {
    popupImageCard.src = elementsImgCard.src;
    popupImageCard.alt = titleNewElement.textContent;
    popupTitleCard.textContent = titleNewElement.textContent;
    openPopup(popupPhotoCard);
  }

  elementsImgCard.addEventListener("click", handleElementsCard);
  elementsDelete.addEventListener("click", handleDeleteCard);
  likeElementsHeart.addEventListener("click", likeHeart);

  return templateElement;
};

const renderElements = (cardData) => {
  elementsList.prepend(generateElement(cardData));
};

initialCards.forEach((cardData) => {
  renderElements(cardData);
});

const submitAddFoto = (event) => {
  event.preventDefault();
  renderElements({
    name: inputPlaceTitle.value,
    link: inputPlaceLink.value,
  });
  event.target.reset();
  closePopup(fotoEdit);
};

function submitHandlerEdit(event) {
  event.preventDefault();
  userName.textContent = userNameInput.value;
  jobName.textContent = jobInput.value;
  closePopup(profileEdit);
}

infoButton.addEventListener("click", () => {
  openPopup(profileEdit);
  userNameInput.value = userName.textContent;
  jobInput.value = jobName.textContent;
});

fotoButtonAdd.addEventListener("click", () => {
  openPopup(fotoEdit);
});

profileEditClose.addEventListener("click", () => {
  closePopup(profileEdit);
});

fotoEditClose.addEventListener("click", () => {
  closePopup(fotoEdit);
});

popupButtonClosePhoto.addEventListener("click", () => {
  closePopup(popupPhotoCard);
});

formFotoEdit.addEventListener("submit", submitAddFoto);
popupEditForm.addEventListener("submit", submitHandlerEdit);
