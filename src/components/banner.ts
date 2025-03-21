export function createBanner(): HTMLElement {
  const banner = document.createElement('section');
  banner.id = 'home';
  banner.className = 'banner';
  banner.innerHTML = `
    <div class="banner-text-container">
      <span class="offer">Ecco l'offerta GUND:</span>
      <span class="discount">40% di sconto dal 20 aprile al 5 maggio!</span>
    </div>
  `;
  return banner;
}
