interface CustomStuffedAnimalCardProps {
  image: string;
  alt: string;
  title: string;
  description: string;
  buttonText: string;
  className: string;
  classNameContent: string;
}

export function createCustomStuffedAnimalCard({
  image,
  alt,
  title,
  description,
  buttonText,
  className,
  classNameContent,
}: CustomStuffedAnimalCardProps): HTMLElement {
  const customStuffedAnimalCard = document.createElement('div');
  customStuffedAnimalCard.className = className;
  customStuffedAnimalCard.innerHTML = `
    <img src="${image}" alt="${alt}">
    <div class="${classNameContent}">
      <h3>${title}</h3>
      <p>${description}</p>
      <button>${buttonText}</button>
    </div>
  `;

  return customStuffedAnimalCard;
}
