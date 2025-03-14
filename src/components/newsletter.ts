import { createLinks } from './links.js';
import { createNewsletterForm } from './newsletterForm.js';

import { SectionLinks, mockLinks } from '../data.js';

export function createNewsLetter(): HTMLElement {
  const newsletter = document.createElement('section');
  newsletter.id = 'chi_siamo';
  newsletter.className = 'newsletter-section';
  const headerElement = document.createElement('div');
  headerElement.className = 'newsletter-header';
  headerElement.innerHTML = `
    <div class="newsletter-title">
      <h2>TeddyShop Newsletter</h2>
      <p>Resta aggiornato sulle ultime novità, promozioni e offerte speciali.</p>
    </div>
    ${createNewsletterForm().outerHTML}
  `;

  const linksContainer = document.createElement('div');
  linksContainer.className = 'links-container';
  linksContainer.appendChild(
    createLinks({ title: SectionLinks.PER_AIUTARE, links: mockLinks.help })
  );
  linksContainer.appendChild(
    createLinks({ title: SectionLinks.CHI_SIAMO, links: mockLinks.about })
  );
  linksContainer.appendChild(
    createLinks({ title: SectionLinks.COMMERCIO, links: mockLinks.commerce })
  );
  linksContainer.appendChild(
    createLinks({ title: SectionLinks.SUPPORTO, links: mockLinks.support })
  );
  linksContainer.appendChild(
    createLinks({ title: SectionLinks.SOCIAL, links: mockLinks.social })
  );

  newsletter.innerHTML = `
    ${headerElement.outerHTML}
    <div class="newsletter-diviser"></div>
    ${linksContainer.outerHTML}
  `;

  return newsletter;
}
