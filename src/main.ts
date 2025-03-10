import { createSpecialOffer } from './components/specialOffer.js';
import { createHeader } from './components/header.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  if (app) {
    app.appendChild(createSpecialOffer());
    app.appendChild(createHeader());
    // TODO demais componentes
  }
});
