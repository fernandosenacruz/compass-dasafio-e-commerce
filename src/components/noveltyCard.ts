import { mockNoveltyCards } from '../data.js';

export function createNovaltyCard(): HTMLElement {
  const noveltyCards = document.createElement('div');
  noveltyCards.className = 'novelty-cards';
  noveltyCards.innerHTML = mockNoveltyCards
    .map(
      (card) => `
      <div id="${card.id}" class="novelty-card">
        <img src="${card.image}" alt="${card.title}" />
        <div class="novelty-card-text">
          <h3>${card.title}</h3>
          <p>${card.description}</p>
        </div>
      </div>
    `
    )
    .join('');
  return noveltyCards;
}
