import { Work } from './work.model';

export const works: Work[] = [
  {
    id: 'diotorocske',
    cardImage: '/assets/images/works/diotorocske.png',
    posterImage: '/assets/images/works/diotorocske.jpg',
    title: {
      hu: 'Diótörőcske',
      en: 'Little Nutcracker',
      de: 'Der kleine Nussknacker'
    },
    shortDescription: {
      hu: 'Rövid leírás a produkcióról.',
      en: 'Short description of the production.',
      de: 'Kurze Beschreibung der Produktion.'
    },
    longDescription: [
      {
        hu: 'Ez a hosszabb bemutatkozó szöveg első bekezdése.',
        en: 'This is the first paragraph of the longer introduction text.',
        de: 'Dies ist der erste Absatz des längeren Einführungstextes.'
      }
    ],
    creditGroups: [
      {
        label: {
          hu: 'Rendezés',
          en: 'Direction',
          de: 'Regie'
        },
        names: [{ name: 'Név' }],
        separator: ', '
      },
      {
        label: {
          hu: 'Kormoránok',
          en: 'Cormorants',
          de: 'Kormorane'
        },
        names: [
          { name: 'Viktória Cseter', memberSlug: 'cseter-viktoria' },
          { name: 'Gabriella Keresztes', memberSlug: 'keresztes-gabriella' }
        ],
        separator: ', '
      },
      {
        label: {
          hu: 'Bölömbika',
          en: 'Bittern',
          de: 'Rohrdommel'
        },
        names: [
          { name: 'Viktória Cseter', memberSlug: 'cseter-viktoria' },
          { name: 'Rózsa' }
        ],
        separator: ' / '
      }
    ],
    creditsNote: {
      hu: 'A szereposztás előadásalkalmanként változhat.',
      en: 'The cast may vary depending on the performance date.',
      de: 'Die Besetzung kann je nach Aufführungstermin variieren.'
    }
  },
  {
    id: 'a-berekben',
    cardImage: '/assets/images/works/berekben.png',
    posterImage: '/assets/images/works/berekben.jpg',
    title: {
      hu: 'Berekben',
      en: 'In the Marsh',
      de: 'Im Schilf'
    },
    shortDescription: {
      hu: 'Rövid leírás az előadásról.',
      en: 'Short description of the performance.',
      de: 'Kurze Beschreibung der Aufführung.'
    },
    longDescription: [
      {
        hu: 'A berekben hosszabb bemutatkozó szövege.',
        en: 'Longer introductory text for In the Marsh.',
        de: 'Längerer Einführungstext zu Im Schilf.'
      }
    ],
    creditGroups: [
      {
        label: {
          hu: 'Rendezés',
          en: 'Direction',
          de: 'Regie'
        },
        names: [{ name: 'Név' }],
        separator: ', '
      },
      {
        label: {
          hu: 'Szereplők',
          en: 'Cast',
          de: 'Besetzung'
        },
        names: [{ name: 'Név' }, { name: 'Név' }],
        separator: ', '
      }
    ],
    creditsNote: {
      hu: 'A szereposztás előadásalkalmanként változhat.',
      en: 'The cast may vary depending on the performance date.',
      de: 'Die Besetzung kann je nach Aufführungstermin variieren.'
    }
  },
  {
    id: 'pomade',
    cardImage: '/assets/images/works/pomade.png',
    posterImage: '/assets/images/works/pomade.jpg',
    title: {
      hu: 'Pomádé',
      en: 'Pomade',
      de: 'Pomade'
    },
    shortDescription: {
      hu: 'Rövid leírás a produkcióról.',
      en: 'Short description of the production.',
      de: 'Kurze Beschreibung der Produktion.'
    },
    longDescription: [
      {
        hu: 'Pomádé hosszabb leírása.',
        en: 'Longer description of Pomade.',
        de: 'Längere Beschreibung von Pomade.'
      }
    ],
    creditGroups: [
      {
        label: {
          hu: 'Zene',
          en: 'Music',
          de: 'Musik'
        },
        names: [{ name: 'Név' }],
        separator: ', '
      },
      {
        label: {
          hu: 'Technika',
          en: 'Technical support',
          de: 'Technik'
        },
        names: [{ name: 'Név' }, { name: 'Név' }],
        separator: ', '
      }
    ]
  },
  {
    id: 'isleri-idok-pilvax',
    cardImage: '/assets/images/works/isleri-idok.png',
    posterImage: '/assets/images/works/isleri-idok.jpg',
    title: {
      hu: 'Isleri idök - látogatás a Pilvax büfében',
      en: 'Isleri idök - Visit to the Pilvax Buffet',
      de: 'Isleri idök - Besuch im Pilvax-Buffet'
    }
  },
  {
    id: 'latetrip-2',
    cardImage: '/assets/images/works/latetrip.png',
    posterImage: '/assets/images/works/latetrip.jpg',
    title: {
      hu: 'latetrip2.0',
      en: 'latetrip2.0',
      de: 'latetrip2.0'
    }
  },
  {
    id: 'galagonya',
    cardImage: '/assets/images/works/galagonya.png',
    title: {
      hu: 'Galagonya',
      en: 'Galagonya',
      de: 'Galagonya'
    }
  },
  {
    id: 'jozsef-attila-est',
    cardImage: '/assets/images/works/jozsef-attila-est.png',
    posterImage: '/assets/images/works/jozsef-attila-est.jpg',
    title: {
      hu: 'József Attila est',
      en: 'József Attila evening',
      de: 'József-Attila-Abend'
    }
  }
];
