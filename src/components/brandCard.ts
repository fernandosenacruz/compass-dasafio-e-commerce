import { BrandCard } from './brands.js';
import { createRating } from './rating.js';

export function createBrandCard({
  id,
  image,
  title,
  rating,
  price,
}: BrandCard): HTMLElement {
  const brandCard = document.createElement('div');
  brandCard.id = id.toString();
  brandCard.className = 'brand-card';
  brandCard.innerHTML = `
    <img src="${image}" alt="${title}" />
    <div class="brand-card-text">
      <h3>${title}</h3>
      ${createRating({ rating: rating }).outerHTML}
      <span>$${price}</span>
    </div>
  `;
  return brandCard;
}
