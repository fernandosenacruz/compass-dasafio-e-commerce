export interface GiftCard {
  id: number;
  title: string;
  image: string;
  description: string;
}

export function createGiftCards(cards: GiftCard[]): HTMLElement {
  const cardsContainer = document.createElement('div');
  cardsContainer.className = 'gift-cards-container';

  cards.forEach((card) => {
    const cardEl = document.createElement('div');
    cardEl.className = 'gift-card';
    cardEl.innerHTML = `
      <img src="${card.image}" alt="${card.title}" />
      <h3>${card.title}</h3>
      <p>${card.description}</p>
    `;
    cardsContainer.appendChild(cardEl);
  });

  return cardsContainer;
}
