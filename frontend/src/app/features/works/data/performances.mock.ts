import { Performance } from './performance.model';

export const PERFORMANCES: Performance[] = [
  {
    id: 'diotorocske',
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
        names: [
          { name: 'Név' }
        ],
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
    title: {
      hu: 'A berekben',
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
        names: [
          { name: 'Név' }
        ],
        separator: ', '
      },
      {
        label: {
          hu: 'Szereplők',
          en: 'Cast',
          de: 'Besetzung'
        },
        names: [
          { name: 'Név' },
          { name: 'Név' }
        ],
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
        names: [
          { name: 'Név' }
        ],
        separator: ', '
      },
      {
        label: {
          hu: 'Technika',
          en: 'Technical support',
          de: 'Technik'
        },
        names: [
          { name: 'Név' },
          { name: 'Név' }
        ],
        separator: ', '
      }
    ]
  }
];