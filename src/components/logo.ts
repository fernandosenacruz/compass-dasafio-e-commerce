export function createLogo(): HTMLElement {
  const logo = document.createElement('div');
  logo.className = 'logo';
  logo.innerHTML = `
    <img src="/public/assets/blue-teddy-bear-01.svg" alt="Logo" />
    <div class="logo-text">
      <spam>Teddy</spam>
      <spam>Shop</spam>
    </div>
  `;
  return logo;
}
