import { ProgramOccurrence } from './program.model';
import { OKULARE_FAQ } from './okulare-faq';

export const PROGRAM_OCCURRENCES: ProgramOccurrence[] = [
  {
    id: 'okulare-el',
    slug: 'el',
    seriesId: 'okulare',
    type: 'reading-night',
    title: {
      hu: 'Él',
      en: 'Live',
      de: 'Lebt'
    },
    shortDescription: {
      hu: 'Az #él hívószóra épülő Okuláré-est három új szöveggel, közönségszavazással és alkotói beszélgetéssel.',
      en: 'An Okuláré evening built around the keyword #live, with three new texts, audience voting and a conversation with the creators.',
      de: 'Ein Okuláré-Abend zum Leitwort #lebt mit drei neuen Texten, Publikumsabstimmung und Gespräch mit den Beteiligten.'
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
          hu: 'Jámbor Aliz – Hajszál, ősz, tél',
          en: 'Aliz Jámbor – Hair, Autumn, Winter',
          de: 'Aliz Jámbor – Haar, Herbst, Winter'
        }
      },
      {
        title: {
          hu: 'Mazán Barna – Elválás',
          en: 'Barna Mazán – Separation',
          de: 'Barna Mazán – Trennung'
        }
      },
      {
        title: {
          hu: 'Nagy-Szakmáry Attila – Kínai szoba',
          en: 'Attila Nagy-Szakmáry – Chinese Room',
          de: 'Attila Nagy-Szakmáry – Chinesisches Zimmer'
        }
      }
    ],
    credits: {
      summary: {
        hu: 'A Zacc Színpad társulati tagjai és meghívott közreműködők.',
        en: 'Members of Zacc Színpad and invited contributors.',
        de: 'Mitglieder des Zacc Színpad und eingeladene Mitwirkende.'
      }
    },
    faq: OKULARE_FAQ
  },
  {
    id: 'okulare-tores',
    slug: 'tores',
    seriesId: 'okulare',
    type: 'reading-night',
    title: {
      hu: 'Törés',
      en: 'Break',
      de: 'Bruch'
    },
    shortDescription: {
      hu: 'Évadnyitó Okuláré-est a #törés hívószóra építve, három új szöveggel és közönségszavazással.',
      en: 'Season-opening Okuláré evening built around the keyword #break, featuring three new texts and audience voting.',
      de: 'Saisoneröffnender Okuláré-Abend zum Leitwort #bruch mit drei neuen Texten und Publikumsabstimmung.'
    },
    longDescription: [
      {
        hu: 'Szeretettel meghívunk az évadkezdő előadásunkra.',
        en: 'We warmly invite you to our season-opening event.',
        de: 'Wir laden euch herzlich zu unserer Saisoneröffnung ein.'
      },
      {
        hu: 'Az Okuláré színházi és irodalmi projekt új évada egy izgalmas hívószóval indul: legújabb dramatizált felolvasóestünk a #törés hívószó körül forog.',
        en: 'The new season of the Okuláré theatre and literary project begins with an exciting keyword: our latest dramatized reading revolves around #break.',
        de: 'Die neue Saison des Theater- und Literaturprojekts Okuláré beginnt mit einem spannenden Leitwort: Unsere neueste szenische Lesung kreist um #bruch.'
      },
      {
        hu: 'Az este folyamán három szerző vadonatúj szövegét mutatjuk be, amelyekről a közönség is szavazhat az este végén, és élményeit megoszthatja az alkotókkal egy vezetett beszélgetés keretében.',
        en: 'During the evening we present three brand-new texts by three authors, and the audience can vote for their favorite and share their impressions in a moderated discussion.',
        de: 'Im Laufe des Abends präsentieren wir drei brandneue Texte von drei Autor:innen; das Publikum kann abstimmen und seine Eindrücke in einem moderierten Gespräch teilen.'
      }
    ],
    startDate: '2025-10-17',
    city: {
      hu: 'Berlin',
      en: 'Berlin',
      de: 'Berlin'
    },
    venue: {
      hu: 'Galerie Kollaborativ',
      en: 'Galerie Kollaborativ',
      de: 'Galerie Kollaborativ'
    },
    isHighlighted: false,
    isPublic: true,
    items: [
      {
        title: {
          hu: 'Kelemen Tamás – Ejtettek',
          en: 'Tamás Kelemen – The Dropped',
          de: 'Tamás Kelemen – Fallen Gelassen'
        }
      },
      {
        title: {
          hu: 'Székely-Balogh Szilvi – Arpeggio',
          en: 'Szilvi Székely-Balogh – Arpeggio',
          de: 'Szilvi Székely-Balogh – Arpeggio'
        }
      },
      {
        title: {
          hu: 'Sztojka Sebestyén – Aki nem áll fel, azt könnyebb műteni',
          en: 'Sebestyén Sztojka – The One Who Does Not Stand Up Is Easier to Operate On',
          de: 'Sebestyén Sztojka – Wer nicht aufsteht, ist leichter zu operieren'
        }
      }
    ],
    credits: {
      summary: {
        hu: 'A Zacc Színpad társulati tagjai és meghívott közreműködők.',
        en: 'Members of Zacc Színpad and invited contributors.',
        de: 'Mitglieder des Zacc Színpad und eingeladene Mitwirkende.'
      }
    },
    faq: OKULARE_FAQ
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
    isHighlighted: false,
    isPublic: true
  }
];