import { configCards } from "../constants/champList.js";

export default class Card {
  constructor(cardData, cardSelector) {
    this._name = cardData.name;
    this._description = cardData.description;
    this._position = cardData.position;
    this._role = cardData.role;
    this._image = cardData.image;
    this._cardSelector = cardSelector;
  }

  _handleCardHover() {}

  _handleToggleCard() {}

  _handleOpenDetailsModal() {
    console.log("test");
  }

  _setEventListeners() {
    this._cardElement.addEventListener("mouseover", this._handleCardHover);
    this._cardElement.addEventListener("click", this._handleToggleCard);
    this._cardDetailsButton.addEventListener(
      "click",
      this._handleOpenDetailsModal
    );
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
    this._cardName = this._cardElement.querySelector(".card__name");
    this._cardDescription =
      this._cardElement.querySelector(".card__description");
    this._cardDetailsButton = this._cardElement.querySelector(".card__button");

    this._cardImage.style.backgroundImage = `url(${this._image})`;
    this._cardImage.alt = this._name;
    this._cardName.textContent = this._name;
    this._cardDescription.textContent = this._description;
    this._setEventListeners();
    return this._cardElement;
  }
}
