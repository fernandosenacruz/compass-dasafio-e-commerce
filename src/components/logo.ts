export function createLogo(): HTMLElement {
  const logo = document.createElement('logo');
  logo.innerHTML = `
    <div class="logo">
      <img src="/public/assets/blue-teddy-bear-01.svg" alt="Logo" />
      <div class="logo-text">
        <spam>Teddy</spam>
        <spam>Shop</spam>
      </div>
    </div>
  `;
  return logo;
}
