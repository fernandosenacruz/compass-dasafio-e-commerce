import { createSpecialOffer } from './components/specialOffer.js';
import { createHeader } from './components/header.js';
import { createBanner } from './components/banner.js';
import { createNovalty } from './components/novelty.js';
import { createDivider } from './components/divider.js';
import { createBrands } from './components/brands.js';
import { createSectionGiftCards } from './components/sectionGiftCards.js';
import { createCustomStuffedAnimal } from './components/customStuffedAnimal.js';

import { getGiftCardsPerSlide } from './utils/getGiftCardsPerSlide.js';
import { mockBrandCards, mockGiftCards } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  if (app) {
    const brands = mockBrandCards.filter((brand) => brand.id <= 4);
    const brands2 = mockBrandCards.filter((brand) => brand.id > 4);

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
        className: 'divider-container',
      })
    );
    app.appendChild(dividerNovelty);
    app.appendChild(createBrands({ brandCards: brands, id: 'marchi' }));

    const giftCardsPerSlide = getGiftCardsPerSlide();
    app.appendChild(createSectionGiftCards(mockGiftCards, giftCardsPerSlide));

    window.addEventListener('resize', () => {
      const giftCardsSection = app.querySelector('#carte_regalo');
      if (giftCardsSection) {
        const newCardsPerSlide = getGiftCardsPerSlide();
        const newGiftCardsSection = createSectionGiftCards(
          mockGiftCards,
          newCardsPerSlide
        );
        app.replaceChild(newGiftCardsSection, giftCardsSection);
      }
    });

    const divider = document.createElement('div');
    divider.className = 'divider-gift-cads-container';
    divider.appendChild(
      createDivider({
        image: './public/assets/blue-teddy-bear-01.svg',
        text: 'I Peluche più ricercati',
        className: 'divider-container',
      })
    );
    app.appendChild(divider);
    app.appendChild(createBrands({ brandCards: brands2, id: 'marchi-02' }));

    app.appendChild(createCustomStuffedAnimal());

    const divider2 = document.createElement('div');
    divider2.className = 'divider-custom-stuffed-animal-cads-container';
    divider2.appendChild(
      createDivider({
        image: './public/assets/green-heart.svg',
        text: 'Opinioni dei nostri clienti',
        className: 'divider-container',
      })
    );
    app.appendChild(divider2);
  }
});
