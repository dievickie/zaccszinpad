import { ProgramOccurrence } from './program.model';

export const PROGRAM_OCCURRENCES: ProgramOccurrence[] = [
  {
    id: 'okulare-februar',
    seriesId: 'okulare',
    type: 'reading-night',
    title: {
      hu: 'Február',
      en: 'February',
      de: 'Februar'
    },
    shortDescription: {
      hu: 'Az Okuláré korábbi alkalma, három elhangzó drámával és közös felolvasással.',
      en: 'An earlier edition of Okuláré with three presented dramas and a shared reading format.',
      de: 'Eine frühere Ausgabe von Okuláré mit drei präsentierten Dramen und einem gemeinsamen Lesungsformat.'
    },
    startDate: '2026-02-17',
    city: {
      hu: 'Berlin',
      en: 'Berlin',
      de: 'Berlin'
    },
    venue: {
      hu: 'Helyszín később',
      en: 'Venue to be announced',
      de: 'Ort wird noch bekannt gegeben'
    },
    isHighlighted: false,
    isPublic: true,
    items: [
      {
        title: {
          hu: 'Első februári dráma',
          en: 'First February drama',
          de: 'Erstes Februardrama'
        }
      },
      {
        title: {
          hu: 'Második februári dráma',
          en: 'Second February drama',
          de: 'Zweites Februardrama'
        }
      },
      {
        title: {
          hu: 'Harmadik februári dráma',
          en: 'Third February drama',
          de: 'Drittes Februardrama'
        }
      }
    ],
    credits: {
      summary: {
        hu: 'A Zacc Színpad társulati tagjai és meghívott közreműködők.',
        en: 'Members of Zacc Színpad and invited contributors.',
        de: 'Mitglieder des Zacc Színpad und eingeladene Mitwirkende.'
      }
    }
  },
  {
    id: 'okulare-el',
    seriesId: 'okulare',
    type: 'reading-night',
    title: {
      hu: 'Él',
      en: 'Lives',
      de: 'Lebt'
    },
    shortDescription: {
      hu: 'Az Okuláré legújabb alkalma, három elhangzó drámával és közös felolvasással.',
      en: 'The latest edition of Okuláré, featuring three presented dramas and a shared reading format.',
      de: 'Die neueste Ausgabe von Okuláré mit drei präsentierten Dramen und einem gemeinsamen Lesungsformat.'
    },
    startDate: '2026-04-24',
    city: {
      hu: 'Berlin',
      en: 'Berlin',
      de: 'Berlin'
    },
    venue: {
      hu: 'Helyszín később',
      en: 'Venue to be announced',
      de: 'Ort wird noch bekannt gegeben'
    },
    isHighlighted: true,
    isPublic: true,
    items: [
        {
            title: {
            hu: 'Diótörőcske',
            en: 'Little Nutcracker',
            de: 'Der kleine Nussknacker'
            },
            performanceId: 'diotorocske'
        },
        {
            title: {
            hu: 'A berekben',
            en: 'In the Marsh',
            de: 'Im Schilf'
            },
            performanceId: 'a-berekben'
        },
        {
            title: {
            hu: 'Harmadik dráma címe',
            en: 'Title of the third drama',
            de: 'Titel des dritten Dramas'
            }
        }
        ],
    credits: {
      summary: {
        hu: 'A Zacc Színpad társulati tagjai és meghívott közreműködők.',
        en: 'Members of Zacc Színpad and invited contributors.',
        de: 'Mitglieder des Zacc Színpad und eingeladene Mitwirkende.'
      }
    }
  },
  {
    id: 'zacc-fesztival-2026',
    seriesId: 'zacc-fesztival',
    type: 'festival',
    title: {
      hu: 'Zacc Fesztivál 2026',
      en: 'Zacc Festival 2026',
      de: 'Zacc Festival 2026'
    },
    shortDescription: {
      hu: 'Nyári fesztivál előadásokkal, közösségi programokkal és találkozásokkal.',
      en: 'A summer festival with performances, shared events, and encounters.',
      de: 'Ein Sommerfestival mit Aufführungen, gemeinschaftlichen Programmen und Begegnungen.'
    },
    startDate: '2026-07-10',
    endDate: '2026-07-12',
    city: {
      hu: 'Budapest',
      en: 'Budapest',
      de: 'Budapest'
    },
    isHighlighted: true,
    isPublic: true
  }
];