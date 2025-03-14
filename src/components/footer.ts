import { createLogo } from './logo.js';

export function createFooter(): HTMLElement {
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = `
    ${createLogo().outerHTML}
    <p>© 2023 TeddyShop. Tutti i diritti riservati.</p>
  `;
  return footer;
}
