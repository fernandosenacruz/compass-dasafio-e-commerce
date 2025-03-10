export function createSpecialOffer(): HTMLElement {
  const spacialOffer = document.createElement('spacial-offer');
  spacialOffer.innerHTML = `
    <div class="spacial-offer">
      <p>Hai bisogno di aiuto?</p>
      <p>Ottieni Subito Uno Sconto Del 10%:Iscriviti Alla Newsletter</p>
      <p>Informazioni Di Consegna</p>
    </div>
  `;
  return spacialOffer;
}
