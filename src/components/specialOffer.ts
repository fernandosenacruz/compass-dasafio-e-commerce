export function createSpecialOffer(): HTMLElement {
  const spacialOffer = document.createElement('div');
  spacialOffer.className = 'spacial-offer';
  spacialOffer.innerHTML = `
    <p>Hai bisogno di aiuto?</p>
    <p>Ottieni Subito Uno Sconto Del 10%:Iscriviti Alla Newsletter</p>
    <p>Informazioni Di Consegna</p>
  `;
  return spacialOffer;
}
