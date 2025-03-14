export const mockNoveltyCards = [
  {
    id: 1,
    title: 'Fantasy Friends',
    description:
      'Collezione di peluche mitici e fantastici: Perfetti per sognare ad occhi aperti.',
    image: './public/assets/peluche_01.svg',
  },
  {
    id: 2,
    title: 'Vintage Treasures',
    description:
      'Collezione retrò, peluche tradizionali e storici, per un tocco di nostalgia.',
    image: './public/assets/peluche_02.svg',
  },
  {
    id: 3,
    title: 'Wild Adventures',
    description:
      'In Questa collezione troverai peluche di animali esotici per tutti tipi di avventure .',
    image: './public/assets/peluche_03.svg',
  },
];

export const mockBrandCards = [
  {
    id: 1,
    title: 'Teddy - 10.5 Orso',
    image: './public/assets/brown-teddy-bear.svg',
    rating: 3.5,
    price: 24,
  },
  {
    id: 2,
    title: 'Trixy - 8.5 Tricerapoto',
    image: './public/assets/blue-trixy.svg',
    rating: 3.5,
    price: 30,
  },
  {
    id: 3,
    title: 'Bunny - 10.5 Coniglio',
    image: './public/assets/yellow-bunny.svg',
    rating: 3.5,
    price: 25,
  },
  {
    id: 4,
    title: 'Gigi - 12.5 Girafa',
    image: './public/assets/yellow-giraph.svg',
    rating: 3.5,
    price: 30,
  },
  {
    id: 5,
    title: 'Aria - 11.5 Farfalla',
    image: './public/assets/pink-butterfly.svg',
    rating: 3.5,
    price: 35,
  },
  {
    id: 6,
    title: 'Blaze - 13.5 Drago',
    image: './public/assets/gray-dragon.svg',
    rating: 3.5,
    price: 25,
  },
  {
    id: 7,
    title: 'Clover - 10.5 Lepre',
    image: './public/assets/brown-bunny.svg',
    rating: 3.5,
    price: 25,
  },
  {
    id: 8,
    title: 'Jumbo - 10.5 Elefante',
    image: './public/assets/gray-elephant.svg',
    rating: 3.5,
    price: 30,
  },
];

export const mockGiftCards = [
  {
    id: 1,
    title: 'Spedizioni sicure',
    image: './public/assets/delivery-truck.svg',
    description:
      'Offriamo consegne rapide per garantirti che il tuo peluche arrivi a destinazione in perfette condizioni.',
  },
  {
    id: 2,
    title: 'Materiali di qualità',
    image: './public/assets/quality-seal.png',
    description:
      'Siamo impegnati a utilizzare materiali di qualità per i nostri peluche, per garantirti un prodotto che durerà nel tempo.',
  },
  {
    id: 3,
    title: 'Servizio eccellente',
    image: './public/assets/crown.svg',
    description:
      'La nostra assistenza clienti è a tua disposizione per rispondere a tutte le tue domande e risolvere qualsiasi problema.',
  },
  {
    id: 4,
    title: 'Spedizioni sicure',
    image: './public/assets/delivery-truck.svg',
    description:
      'Offriamo consegne rapide per garantirti che il tuo peluche arrivi a destinazione in perfette condizioni.',
  },
  {
    id: 5,
    title: 'Materiali di qualità',
    image: './public/assets/quality-seal.png',
    description:
      'Siamo impegnati a utilizzare materiali di qualità per i nostri peluche, per garantirti un prodotto che durerà nel tempo.',
  },
  {
    id: 6,
    title: 'Servizio eccellente',
    image: './public/assets/crown.svg',
    description:
      'La nostra assistenza clienti è a tua disposizione per rispondere a tutte le tue domande e risolvere qualsiasi problema.',
  },
];

export const mockCustomerComments = [
  {
    id: 1,
    name: 'Maria Cipollari',
    position: 'Casalinga, mamma',
    comment:
      '"Questo peluche è fantastico! La qualità del materiale è eccezionale e la sua morbidezza lo rende perfetto per abbracciare"',
  },
  {
    id: 2,
    name: 'Claudio Boldi',
    position: 'Operaio, genitore',
    comment:
      '"Non sono soddisfatto di questo peluche. Il materiale sembra economico e la cucitura è piuttosto approssimativa"',
  },
  {
    id: 3,
    name: 'Jessica Merla',
    position: 'Pensionata, nonna',
    comment:
      '“Il peluche stesso è di alta qualità, con dettagli ben curati e una consistenza morbida e soffice. Consiglio vivamente questo negozio!"',
  },
  {
    id: 4,
    name: 'Ximira Pinto',
    position: 'Casalinga, mamma',
    comment:
      '"Questo peluche è fantastico! La qualità del materiale è eccezionale e la sua morbidezza lo rende perfetto per abbracciare"',
  },
  {
    id: 5,
    name: 'Xablau Boldi',
    position: 'Operaio, genitore',
    comment:
      '"Non sono soddisfatto di questo peluche. Il materiale sembra economico e la cucitura è piuttosto approssimativa"',
  },
  {
    id: 6,
    name: 'Xirunda Merla',
    position: 'Pensionata, nonna',
    comment:
      '“Il peluche stesso è di alta qualità, con dettagli ben curati e una consistenza morbida e soffice. Consiglio vivamente questo negozio!"',
  },
];

export enum SectionLinks {
  PER_AIUTARE = 'Per aiutare',
  CHI_SIAMO = 'Chi siamo',
  COMMERCIO = 'Commercio',
  SUPPORTO = 'Supporto',
  SOCIAL = 'Social',
}

export const mockLinks = {
  help: [
    {
      id: 1,
      name: 'Consegna',
      section: SectionLinks.PER_AIUTARE,
    },
    {
      id: 2,
      name: 'Ritorno',
      section: SectionLinks.PER_AIUTARE,
    },
    {
      id: 3,
      name: 'Domande frequenti',
      section: SectionLinks.PER_AIUTARE,
    },
    {
      id: 4,
      name: 'Pagamento sicuro',
      section: SectionLinks.PER_AIUTARE,
    },
    {
      id: 5,
      name: 'Privacy e sicurezza',
      section: SectionLinks.PER_AIUTARE,
    },
  ],
  about: [
    {
      id: 6,
      name: 'La nostra storia',
      section: SectionLinks.CHI_SIAMO,
    },
    {
      id: 7,
      name: 'Sicurezza e idonetà',
      section: SectionLinks.CHI_SIAMO,
    },
    {
      id: 8,
      name: 'Generali T $ C',
      section: SectionLinks.CHI_SIAMO,
    },
    {
      id: 9,
      name: 'Commercio equo',
      section: SectionLinks.CHI_SIAMO,
    },
    {
      id: 10,
      name: 'Mappa del sito',
      section: SectionLinks.CHI_SIAMO,
    },
  ],
  commerce: [
    {
      id: 11,
      name: 'Rivenditori esterni',
      section: SectionLinks.COMMERCIO,
    },
    {
      id: 12,
      name: 'Diventa un rivenditoore',
      section: SectionLinks.COMMERCIO,
    },
    {
      id: 13,
      name: 'Fiere e Convegni',
      section: SectionLinks.COMMERCIO,
    },
    {
      id: 14,
      name: 'Termini e condizioni',
      section: SectionLinks.COMMERCIO,
    },
    {
      id: 15,
      name: 'Pubbliche relazioni',
      section: SectionLinks.COMMERCIO,
    },
  ],
  support: [
    {
      id: 16,
      name: 'Il mio conto',
      section: SectionLinks.SUPPORTO,
    },
    {
      id: 17,
      name: 'Contattaci',
      section: SectionLinks.SUPPORTO,
    },
    {
      id: 18,
      name: 'Spedizione',
      section: SectionLinks.SUPPORTO,
    },
    {
      id: 19,
      name: 'Spedizione estiva',
      section: SectionLinks.SUPPORTO,
    },
    {
      id: 20,
      name: 'Richiamare',
      section: SectionLinks.SUPPORTO,
    },
  ],
  social: [
    {
      id: 21,
      name: 'Facebook',
      section: SectionLinks.SOCIAL,
    },
    {
      id: 22,
      name: 'Instagram',
      section: SectionLinks.SOCIAL,
    },
    {
      id: 23,
      name: 'Twitter',
      section: SectionLinks.SOCIAL,
    },
    {
      id: 24,
      name: 'YouTube',
      section: SectionLinks.SOCIAL,
    },
    {
      id: 25,
      name: 'Pinterest',
      section: SectionLinks.SOCIAL,
    },
  ],
};
