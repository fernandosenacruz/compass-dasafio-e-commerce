export function createAvatarLetter(name: string): HTMLElement {
  const firstLetter = name.charAt(0).toUpperCase();
  const circle = document.createElement('div');
  circle.className = 'letter-circle';
  circle.textContent = firstLetter;
  return circle;
}
