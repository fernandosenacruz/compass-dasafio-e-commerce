import { createNovaltyCard } from './noveltyCard.js';

export function createNovalty(): HTMLElement {
  const novelty = document.createElement('section');
  novelty.id = 'novita';
  novelty.className = 'novelty';
  novelty.innerHTML = `
    <h2 class="novelty-title">Esplora e trova il tuo preferito su TeddyShop</h2>
    <p class="novelty-paragraph">
      Siamo felici di presentare la nostra varietà di nuovi personaggi di peluche! 
      Scopri la collezione, pronta per essere amata, regalata o diventare il tuo nuovo migliore amico
    </p>
    ${createNovaltyCard().outerHTML}
  `;
  return novelty;
}
