export function getContentCardsPerSlide(): number {
  const width = window.innerWidth;
  if (width <= 768) {
    return 1;
  } else if (width <= 1278) {
    return 2;
  } else {
    return 3;
  }
}
