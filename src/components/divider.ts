interface DividerProps {
  image: string;
  text: string;
  className: string;
}

export function createDivider({
  image,
  text,
  className,
}: DividerProps): HTMLElement {
  const divider = document.createElement('div');
  divider.classList.add(className);

  const imgEl = document.createElement('img');
  imgEl.src = image;
  imgEl.alt = text;
  imgEl.className = `${className}-img`;

  const textEl = document.createElement('p');
  textEl.textContent = text;
  textEl.className = `${className}-text`;

  divider.appendChild(imgEl);
  divider.appendChild(textEl);

  return divider;
}
