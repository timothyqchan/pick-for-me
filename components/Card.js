import { configCards } from "../constants/champList.js";

export default class Card {
  constructor(cardData, cardSelector) {
    this._name = cardData.name;
    this._description = cardData.description;
    this._position = cardData.position;
    this._class = cardData.class;
    this._image = cardData.image;
    this._cardSelector = cardSelector;
  }

  _setEventListeners() {
    // Toggle card\
    this._toggleCard();
    // Details Button
    this._cardDetailsButton.addEventListener(
      "click",
      this._handleOpenDetailsModal
    );
  }

  _toggleCard() {
    this._cardImage.addEventListener("click", this._deleteCard.bind(this));
    this._cardHeader.addEventListener("click", this._deleteCard.bind(this));
    this._cardInfo.addEventListener("click", this._deleteCard.bind(this));
  }

  _deleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _handleOpenDetailsModal() {
    console.log("test");
  }

  _getCardTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  getView() {
    this._cardElement = this._getCardTemplate();
    this._cardImage = this._cardElement.querySelector(".card__image");
    this._cardHeader = this._cardElement.querySelector(".card__header");
    this._cardName = this._cardElement.querySelector(".card__name");
    this._cardDescription =
      this._cardElement.querySelector(".card__description");
    this._cardDetailsButton = this._cardElement.querySelector(".card__button");
    this._cardInfo = this._cardElement.querySelector(".card__info");

    this._cardPosition = this._cardElement.querySelector(
      ".card__position-span"
    );
    this._cardClass = this._cardElement.querySelector(".card__class-span");

    this._cardImage.style.backgroundImage = `url(${this._image})`;
    this._cardImage.alt = this._name;
    this._cardName.textContent = this._name;
    this._cardDescription.textContent = this._description;
    this._cardPosition.textContent = this._position;
    this._cardClass.textContent = this._class;

    this._setEventListeners();
    return this._cardElement;
  }
}
