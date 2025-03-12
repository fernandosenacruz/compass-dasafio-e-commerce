import { GiftCard } from './giftCards.js';

export function createGiftCardsSlider(
  cards: GiftCard[],
  cardsPerSlide: number
): HTMLElement {
  const sliderContainer = document.createElement('div');
  sliderContainer.className = 'gift-cards-slider';

  const slidesWrapper = document.createElement('div');
  slidesWrapper.className = 'slides-wrapper';
  slidesWrapper.style.display = 'flex';
  slidesWrapper.style.transition = 'transform 0.3s ease-in-out';

  const numSlides = Math.ceil(cards.length / cardsPerSlide);
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

    const startIndex = i * cardsPerSlide;
    const slideCards = cards.slice(startIndex, startIndex + cardsPerSlide);

    slideCards.forEach((card, index) => {
      const cardEl = document.createElement('div');
      cardEl.className = 'gift-card';
      cardEl.innerHTML = `
        <img src="${card.image}" alt="${card.title}" />
        <h3>${card.title}</h3>
        <p>${card.description}</p>
      `;

      if (index === slideCards.length - 1) {
        cardEl.style.cursor = 'pointer';
        cardEl.addEventListener('click', () => {
          if (currentSlide < numSlides - 1) {
            goToSlide(currentSlide + 1);
          } else {
            goToSlide(0);
          }
        });
      }

      slide.appendChild(cardEl);
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
