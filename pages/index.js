import Card from "../components/Card.js";
import { champList, configCards } from "../constants/champList.js";

const cardListElement = document.querySelector(".cards__list");

function renderCard(cardData) {
  const card = new Card(cardData, configCards.cardSelector);
  const cardElement = card.getView();
  cardListElement.append(cardElement);
}

champList.forEach((cardData) => {
  renderCard(cardData);
});
