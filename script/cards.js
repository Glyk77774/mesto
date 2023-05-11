import { openPicture } from "./index.js";

export class Card {
  constructor(title, link, templateSelector) {
    this._title = title;
    this._link = link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const elementTemplate = document.querySelector(this._templateSelector);
    const cardElement =
      elementTemplate.content.firstElementChild.cloneNode(true);
    return cardElement;
  }

  _deleteCard = () => {
    this._element.remove();
    this._element = null;
  };

  _likeActive(event) {
    event.target.classList.toggle("elements__heart_active");
  }

  _setEventListners() {
    this._element
      .querySelector(".elements__delete")
      .addEventListener("click", this._deleteCard);
    this._element
      .querySelector(".elements__heart")
      .addEventListener("click", this._likeActive);
    this._element
      .querySelector(".elements__image")
      .addEventListener("click", () => {
        openPicture(this._title, this._link);
      });
  }

  generateCard() {
    this._element = this._getTemplate();

    const cardElementImage = this._element.querySelector(".elements__image");
    const cardElementTitle = this._element.querySelector(".elements__title");
    cardElementImage.setAttribute("src", this._link);
    cardElementImage.setAttribute("alt", this._title);
    cardElementTitle.textContent = this._title;

    this._setEventListners();

    return this._element;
  }
}
