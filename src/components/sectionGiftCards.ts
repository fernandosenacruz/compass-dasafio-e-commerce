import { GiftCard } from './giftCards.js';
import { createCardsSlider } from './slider.js';

export enum ContentType {
  GIFT_CARDS = 'gift-cards',
  COMMENT_CARDS = 'comment-cards',
}

interface GiftCardsProps {
  id: string;
  className: string;
  hasTitle: boolean;
  contentType: ContentType;
  content: GiftCard[];
  contentPerSlide: number;
}

export function createSectionContentSlides({
  id,
  className,
  hasTitle,
  contentType,
  content,
  contentPerSlide,
}: GiftCardsProps): HTMLElement {
  const container = document.createElement('section');
  container.id = id;
  container.className = className;

  if (hasTitle) {
    const header = document.createElement('div');
    header.className = 'gift-cards-title';
    header.innerHTML = `
      <img src="./public/assets/beige-flower.png" alt="beige-flower" />
      <h2>Ecco cosa possiamo fare per te</h2>
      <img src="./public/assets/beige-flower.png" alt="beige-flower" />
    `;
    container.appendChild(header);
  }

  switch (contentType) {
    case ContentType.GIFT_CARDS:
      container.appendChild(
        createCardsSlider({
          className: 'gift-cards-slider',
          contentType,
          content,
          contentPerSlide,
        })
      );
      break;
    case ContentType.COMMENT_CARDS:
      break;
  }
  return container;
}
