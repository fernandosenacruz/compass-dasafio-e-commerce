import { createLogo } from './logo.js';

export function createHeader(): HTMLElement {
  const header = document.createElement('header');
  header.className = 'header';
  header.innerHTML = `
    ${createLogo().outerHTML}
    <nav class="nav-header">
      <a href="#home">Home</a>
      <a href="#categorie">Categorie</a>
      <a href="#novita">Novità</a>
      <a href="#marchi">Marchi</a>
      <a href="#carte_regalo">Carte regalo</a>
      <a href="#chi_siamo">Chi siamo</a>
    </nav>
    <div class="header-icons">
      <a href="#search" class="search-icon">
        <img src="/public/assets/search-icon.svg" alt="Search" />
      </a>
      <a href="#user" class="user-icon">
        <img src="/public/assets/user-icon.svg" alt="User" />
      </a>
      <a href="#heart" class="heart-icon">
        <img src="/public/assets/heart-icon.svg" alt="Heart" />
      </a>
      <a href="#bag" class="bag-icon">
        <img src="/public/assets/shopping-bag.svg" alt="Bag" />
      </a>
    </div>
    <button class="header-btn" id="buy-btn">Acquista ora</button>
  `;
  return header;
}
