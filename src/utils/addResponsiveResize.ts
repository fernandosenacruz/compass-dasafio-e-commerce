import { CommentCard } from '../components/commentCard.js';
import { GiftCard } from '../components/giftCards.js';
import {
  ContentType,
  createSectionContentSlides,
} from '../components/sectionContentCards.js';
import { getContentCardsPerSlide } from './getContentCardsPerSlide.js';

export interface SectionData<T> {
  id: string;
  className: string;
  hasTitle: boolean;
  contentType: ContentType;
  content: T;
}

export function addResponsiveResize<T>(
  app: HTMLElement,
  sections: SectionData<T>[]
) {
  window.addEventListener('resize', () => {
    const newCardsPerSlide = getContentCardsPerSlide();
    sections.forEach((section) => {
      const oldSection = app.querySelector(`#${section.id}`);
      if (oldSection) {
        const newSection = createSectionContentSlides({
          id: section.id,
          className: section.className,
          hasTitle: section.hasTitle,
          contentType: section.contentType,
          content:
            section.contentType === ContentType.GIFT_CARDS
              ? (section.content as GiftCard[])
              : (section.content as CommentCard[]),
          contentPerSlide: newCardsPerSlide,
        });
        app.replaceChild(newSection, oldSection);
      }
    });
  });
}
