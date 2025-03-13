export interface GiftCard {
  id: number;
  title: string;
  image: string;
  description: string;
}

export function createGiftCard(card: GiftCard): HTMLElement {
  const cardEl = document.createElement('div');
  cardEl.className = 'gift-card';
  cardEl.innerHTML = `
    <img src="${card.image}" alt="${card.title}" />
    <h3>${card.title}</h3>
    <p>${card.description}</p>
  `;
  return cardEl;
}
