import Card from "./Card.js";

export default class CardMini extends Card {
  constructor(cardData, cardSelector) {
    super(cardData);
    this._image = cardData.imageMini;
    this._cardSelector = cardSelector;
  }

  _deleteCard() {
    super._deleteCard();
  }

  _setEventListeners() {
    this._cardElement.addEventListener("click", this._deleteCard);
  }

  _getCardTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card-mini")
      .cloneNode(true);
  }

  getView() {
    this._cardElement = this._getCardTemplate();
    this._cardImage = this._cardElement.querySelector(".card-mini__image");
    this._cardImage.style.backgroundImage = `url(${this._image})`;
    this._cardImage.alt = super._name;
    this._setEventListeners();
    return this._cardElement;
  }
}
