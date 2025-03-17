export function createNewsletterForm(): HTMLElement {
  const newsletterForm = document.createElement('form');
  newsletterForm.className = 'newsletter-form';
  newsletterForm.setAttribute('action', 'javascript:void(0);');

  const subscribeContainer = document.createElement('div');
  subscribeContainer.className = 'newsletter-subscribe';

  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.name = 'email';
  emailInput.placeholder = 'Inserisci la tua email';
  emailInput.required = true;

  const subscribeBtn = document.createElement('button');
  subscribeBtn.id = 'newsletter-form-btn';
  subscribeBtn.type = 'submit';
  subscribeBtn.textContent = 'Iscriviti adesso';

  subscribeContainer.appendChild(emailInput);
  subscribeContainer.appendChild(subscribeBtn);
  newsletterForm.appendChild(subscribeContainer);

  const privacyP = document.createElement('p');
  privacyP.textContent = 'Iscrivendoti accetti la nostra Privacy Policy';
  newsletterForm.appendChild(privacyP);

  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.style.display = 'none';
  modal.innerHTML = `
    <div class="modal-content">
      <p class="modal-message"></p>
      <button class="modal-close">Chiudi</button>
    </div>
  `;
  document.body.appendChild(modal);

  function showModal(message: string) {
    const messageEl = modal.querySelector('.modal-message') as HTMLElement;
    messageEl.textContent = message;
    modal.style.display = 'flex';
  }

  function hideModal() {
    modal.style.display = 'none';
  }

  const closeBtn = modal.querySelector('.modal-close') as HTMLButtonElement;
  closeBtn.addEventListener('click', hideModal);

  newsletterForm.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    const email = emailInput.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showModal("Per favore, inserisci un'email valida.");
    } else {
      showModal(
        `Grazie per esserti iscritto alla newsletter con l'email: ${email}`
      );
      emailInput.value = '';
    }
  });

  return newsletterForm;
}
