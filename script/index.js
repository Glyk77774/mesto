const infoButton = document.querySelector(".profile__edit-button");
const editProfile = document.querySelector(".popup__edit");
const editProfileClose =editProfile.querySelector(".popup__close");
const userName = document.querySelector(".profile__info-name");
const jobName = document.querySelector(".profile__info-job")
const userNameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_job");
const popupEditForm = editProfile.querySelector(".popup__form");

infoButton.addEventListener ('click', () => {
  editProfile.classList.add('popup_opened');
})

editProfileClose.addEventListener ('click', () => {
  editProfile.classList.remove('popup_opened');
})

function submitHandlerEdit(event) {
  event.preventDefault();
  userName.textContent = userNameInput.value;
  jobName.textContent = jobInput.value;
  editProfile.classList.remove('popup_opened');
};

popupEditForm.addEventListener("submit", submitHandlerEdit);