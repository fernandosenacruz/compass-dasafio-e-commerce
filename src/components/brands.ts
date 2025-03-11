import { createBrandCard } from './brandCard.js';

export interface BrandCard {
  id: number;
  title: string;
  rating: number;
  image: string;
  price: number;
}

interface BrandProps {
  brandCards: BrandCard[];
  id: string;
}

export function createBrands({ brandCards, id }: BrandProps): HTMLElement {
  const brands = document.createElement('section');
  brands.id = id;
  brands.className = 'brands';

  const cards = document.createElement('div');
  cards.className = 'brands-container';

  cards.innerHTML = brandCards
    .map((brand) => `${createBrandCard(brand).outerHTML}`)
    .join('');

  brands.innerHTML = `
    ${cards.outerHTML}
    <button id="${id}-explore-now-btn" class="explore-now-btn">Esplora adesso</button>
  `;

  return brands;
}
