interface RatingProps {
  rating: number;
}

export function createRating({ rating }: RatingProps): HTMLElement {
  const container = document.createElement('div');
  container.className = 'rating';

  for (let i = 0; i < 5; i++) {
    const star = document.createElement('div');
    star.className = 'star';

    // Calcula o "excesso" de rating para esta estrela (limitado a 1 e mínimo 0)
    const fill = Math.min(1, Math.max(0, rating - i));

    switch (fill) {
      case 0:
        star.style.backgroundImage = 'url(../public/assets/star-empty.svg)';
        break;
      case 0.5:
        star.style.backgroundImage = 'url(../public/assets/star-half.svg)';
        break;
      default:
        star.style.backgroundImage = 'url(../public/assets/star-full.svg)';
    }

    container.appendChild(star);
  }
  return container;
}
