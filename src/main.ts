import { createSpecialOffer } from './components/specialOffer.js';
import { createHeader } from './components/header.js';
import { createBanner } from './components/banner.js';
import { createNovalty } from './components/novelty.js';
import { createDivider } from './components/divider.js';
import { createBrands } from './components/brands.js';

import { mockBrandCards } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  if (app) {
    const brands = mockBrandCards.filter((brand) => brand.id <= 3);

    app.appendChild(createSpecialOffer());
    app.appendChild(createHeader());
    app.appendChild(createBanner());
    app.appendChild(createNovalty());

    const dividerNovelty = document.createElement('div');
    dividerNovelty.className = 'divider-novelty';
    dividerNovelty.appendChild(
      createDivider({
        image: './public/assets/green-flower.svg',
        text: 'Acquista per la primavera',
        className: 'divider-novelty-container',
      })
    );
    app.appendChild(dividerNovelty);
    app.appendChild(createBrands({ brandCards: brands, id: 'brands' }));
  }
});
