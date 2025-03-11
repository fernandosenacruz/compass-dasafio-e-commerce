import { createSpecialOffer } from './components/specialOffer.js';
import { createHeader } from './components/header.js';
import { createBanner } from './components/banner.js';
import { createNovalty } from './components/novelty.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  if (app) {
    app.appendChild(createSpecialOffer());
    app.appendChild(createHeader());
    app.appendChild(createBanner());
    app.appendChild(createNovalty());
  }
});
