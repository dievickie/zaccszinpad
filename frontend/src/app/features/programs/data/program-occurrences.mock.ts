import { ProgramOccurrence } from './program.model';

export const PROGRAM_OCCURRENCES: ProgramOccurrence[] = [
  {
    id: 'okulare-elet',
    seriesId: 'okulare',
    type: 'reading-night',
    title: {
      hu: 'Élet',
      en: 'Life',
      de: 'Leben'
    },
    shortDescription: {
      hu: 'Az Okuláré következő alkalma, három elhangzó drámával és közös felolvasással.',
      en: 'The next edition of Okuláré, featuring three presented dramas and a shared reading format.',
      de: 'Die nächste Ausgabe von Okuláré mit drei präsentierten Dramen und einem gemeinsamen Lesungsformat.'
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
          hu: 'Első dráma címe',
          en: 'Title of the first drama',
          de: 'Titel des ersten Dramas'
        }
      },
      {
        title: {
          hu: 'Második dráma címe',
          en: 'Title of the second drama',
          de: 'Titel des zweiten Dramas'
        }
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