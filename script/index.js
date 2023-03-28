const infoButton = document.querySelector(".profile__edit-button");
const editProfile = document.querySelector(".popup_edit_profile");
const editProfileClose = editProfile.querySelector(".popup__close");
const userName = document.querySelector(".profile__info-name");
const jobName = document.querySelector(".profile__info-job")
const userNameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_job");
const popupEditForm = editProfile.querySelector(".popup__form");

function closePopup() {
  editProfile.classList.remove('popup_opened');
}

infoButton.addEventListener ('click', () => {
  editProfile.classList.add('popup_opened');
  userNameInput.value = userName.textContent;
  jobInput.value = jobName.textContent;
})

editProfileClose.addEventListener ('click', () => {
  closePopup();
})

function submitHandlerEdit(event) {
  event.preventDefault();
  userName.textContent = userNameInput.value;
  jobName.textContent = jobInput.value;
  closePopup();
};

popupEditForm.addEventListener("submit", submitHandlerEdit);