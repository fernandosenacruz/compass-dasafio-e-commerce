import { createGiftCardsSlider } from './slider.js';
import { mockGiftCards } from '../data.js';

export function createSectionGiftCards(): HTMLElement {
  const container = document.createElement('div');
  container.className = 'gift-cards-section';

  const header = document.createElement('div');
  header.className = 'gift-cards-title';
  header.innerHTML = `
    <img src="./public/assets/beige-flower.png" alt="beige-flower" />
    <h2>Ecco cosa possiamo fare per te</h2>
    <img src="./public/assets/beige-flower.png" alt="beige-flower" />
  `;
  container.appendChild(header);
  container.appendChild(createGiftCardsSlider(mockGiftCards, 3));

  return container;
}
