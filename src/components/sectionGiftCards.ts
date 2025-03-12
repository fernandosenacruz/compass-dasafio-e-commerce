import { GiftCard } from './giftCards.js';
import { createGiftCardsSlider } from './slider.js';

export function createSectionGiftCards(
  cards: GiftCard[],
  cardsPerSlide: number
): HTMLElement {
  const container = document.createElement('section');
  container.id = 'carte_regalo';
  container.className = 'gift-cards-section';

  const header = document.createElement('div');
  header.className = 'gift-cards-title';
  header.innerHTML = `
    <img src="./public/assets/beige-flower.png" alt="beige-flower" />
    <h2>Ecco cosa possiamo fare per te</h2>
    <img src="./public/assets/beige-flower.png" alt="beige-flower" />
  `;
  container.appendChild(header);
  container.appendChild(createGiftCardsSlider(cards, cardsPerSlide));

  return container;
}
