import Card from "../components/Card.js";
import CardMini from "../components/CardMini.js";
import { champList, configCards } from "../constants/champList.js";

const cardMiniListElement = document.querySelector(".card-mini__list");
const cardListElement = document.querySelector(".cards__list");
const selectAllButton = document.querySelector(
  ".cards__button_type_select-all"
);
const cardList = document.querySelector(".cards__list");

function addCardMini(cardElement, cardData) {
  const image = cardElement.querySelector(".card__image");
  const header = cardElement.querySelector(".card__header");
  const info = cardElement.querySelector(".card__info");
  image.addEventListener("click", () => {
    renderCardMini(cardData);
  });
  header.addEventListener("click", () => {
    renderCardMini(cardData);
  });
  info.addEventListener("click", () => {
    renderCardMini(cardData);
  });
}

function renderCard(cardData) {
  const card = new Card(cardData, configCards.cardSelector);
  const cardElement = card.getView();
  addCardMini(cardElement, cardData);
  cardListElement.append(cardElement);
}

function renderCardMini(cardData) {
  const card = new CardMini(cardData, configCards.cardMiniSelector);
  const cardMiniElement = card.getView();
  cardMiniListElement.append(cardMiniElement);
}

champList.forEach((cardData) => {
  renderCard(cardData);
});

selectAllButton.addEventListener("click", () => {
  cardList.innerHTML = "";
  cardMiniListElement.innerHTML = "";
  // add all cards to champs picked section
  champList.forEach((cardData) => {
    renderCardMini(cardData);
  });
});
