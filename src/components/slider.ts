import { GiftCard, createGiftCard } from './giftCards.js';
import { ContentType } from './sectionGiftCards.js';

interface CardsSliderProps {
  className: string;
  contentType: ContentType;
  content: GiftCard[];
  contentPerSlide: number;
}

export function createCardsSlider({
  className,
  contentType,
  content,
  contentPerSlide,
}: CardsSliderProps): HTMLElement {
  const sliderContainer = document.createElement('div');
  sliderContainer.className = className;

  const slidesWrapper = document.createElement('div');
  slidesWrapper.className = 'slides-wrapper';
  slidesWrapper.style.display = 'flex';
  slidesWrapper.style.transition = 'transform 0.3s ease-in-out';

  const numSlides = Math.ceil(content.length / contentPerSlide);
  let currentSlide = 0;

  function goToSlide(slideIndex: number) {
    currentSlide = slideIndex;
    slidesWrapper.style.transform = `translateX(-${slideIndex * 100}%)`;
    updateMarkers();
  }

  for (let i = 0; i < numSlides; i++) {
    const slide = document.createElement('div');
    slide.className = 'slide';
    slide.style.flex = '0 0 100%';
    slide.style.display = 'flex';
    slide.style.justifyContent = 'space-around';

    const startIndex = i * contentPerSlide;
    const slidecontent = content.slice(
      startIndex,
      startIndex + contentPerSlide
    );

    slidecontent.forEach((content, index) => {
      const contentEl = createGiftCard(content);

      if (index === slidecontent.length - 1) {
        contentEl.style.cursor = 'pointer';
        contentEl.addEventListener('click', () => {
          if (currentSlide < numSlides - 1) {
            goToSlide(currentSlide + 1);
          } else {
            goToSlide(0);
          }
        });
      }

      slide.appendChild(contentEl);
    });

    slidesWrapper.appendChild(slide);
  }

  sliderContainer.appendChild(slidesWrapper);

  const markersContainer = document.createElement('div');
  markersContainer.className = 'slider-markers';

  for (let i = 0; i < numSlides; i++) {
    const marker = document.createElement('div');
    marker.className = 'slider-marker';
    markersContainer.appendChild(marker);
  }

  sliderContainer.appendChild(markersContainer);

  function updateMarkers() {
    const markers = markersContainer.querySelectorAll('.slider-marker');
    markers.forEach((marker, index) => {
      if (index === currentSlide) {
        marker.classList.add('active');
      } else {
        marker.classList.remove('active');
      }
    });
  }

  updateMarkers();
  return sliderContainer;
}
