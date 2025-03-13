import { createCustomStuffedAnimalCard } from './customStuffedAnimelCard.js';

export function createCustomStuffedAnimal(): HTMLElement {
  const customStuffedAnimal = document.createElement('section');
  customStuffedAnimal.className = 'custom-stuffed-animal';
  customStuffedAnimal.innerHTML = `
    <div class="custom-stuffed-animal-title">
      <img src="./public/assets/green-heart.svg" alt="Cuore verde">
      <h2>"Aggiungi un tocco speciale al tuo peluche"</h2>
    </div>
    <div class="custom-stuffed-animal-cards">
      ${
        createCustomStuffedAnimalCard({
          image: './public/assets/wall-paper-01.svg',
          alt: 'Orso rosa con cuore rosso',
          title: 'Regala un sorriso con la nostra Gift Card',
          description:
            'Vuoi fare un regalo ma non sai cosa scegliere? La nostra Gift Card è la soluzione perfetta!' +
            'Con essa, il destinatario potrà scegliere il peluche che preferisce tra la nostra vasta selezione.' +
            "Scegli l'importo, personalizza il biglietto d'auguri e rendi felice chi ami!",
          buttonText: 'Scopri di più  >',
          className: 'custom-stuffed-animal-main-card',
          classNameContent: 'custom-stuffed-animal-main-card-content',
        }).outerHTML
      }
      <div class="custom-stuffed-animal-secondary-cards">
        ${
          createCustomStuffedAnimalCard({
            image: './public/assets/wall-paper-02.svg',
            alt: 'Orso rosa con cuore rosso',
            title: 'Le offerte speciali della settimana',
            description:
              "Dai un'occhiata alle nostre offerte speciali!" +
              'Troverai sconti imperdibili su alcuni dei nostri peluche più popolari.' +
              'Ma affrettati, le offerte sono per tempo limitato!',
            buttonText: 'Scopri di più  >',
            className: 'custom-stuffed-animal-secondary-card',
            classNameContent: 'custom-stuffed-animal-secondary-card-content',
          }).outerHTML
        }
        ${
          createCustomStuffedAnimalCard({
            image: './public/assets/wall-paper-03.svg',
            alt: 'Orso rosa con cuore rosso',
            title: 'Personalizza il tuo peluche con noi',
            description:
              'Vuoi rendere il tuo peluche ancora più speciale? Personalizzalo con il nome o la data!' +
              'Offriamo un servizio di personalizzazione per molti dei nostri peluche, rendendoli unici e indimenticabili.',
            buttonText: 'Scopri di più  >',
            className: 'custom-stuffed-animal-secondary-card',
            classNameContent: 'custom-stuffed-animal-secondary-card-content',
          }).outerHTML
        }
      </div>
    </div>
  `;

  return customStuffedAnimal;
}
