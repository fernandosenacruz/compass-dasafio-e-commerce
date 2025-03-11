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
  brands.innerHTML = brandCards
    .map((brand) => `${createBrandCard(brand).outerHTML}`)
    .join('');

  return brands;
}
