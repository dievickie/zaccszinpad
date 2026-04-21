import { ProgramSeries } from './program.model';
import { OKULARE_FAQ } from './okulare-faq';

export const PROGRAM_SERIES: ProgramSeries[] = [
  {
    id: 'okulare',
    slug: 'okulare',
    title: {
      hu: 'Okuláré',
      en: 'Okuláré',
      de: 'Okuláré'
    },
    shortDescription: {
      hu: 'Felolvasóest-sorozat, évente több alkalommal, változó hívószavakkal és válogatással.',
      en: 'A recurring reading-night series held several times a year with changing themes and selections.',
      de: 'Eine mehrmals jährlich stattfindende Lesereihe mit wechselnden Leitmotiven und Auswahlprogrammen.'
    },
    description: [
      {
        hu: 'Az Okuláré a Zacc Színpad visszatérő felolvasóest-sorozata, amelynek minden alkalma saját hívószó köré szerveződik.',
        en: 'Okuláré is Zacc Színpad’s recurring reading-night series, with each edition organised around its own keyword or theme.',
        de: 'Okuláré ist die wiederkehrende Lesereihe des Zacc Színpad, deren einzelne Abende jeweils um ein eigenes Leitwort organisiert sind.'
      }
    ],
    faq: OKULARE_FAQ,
    contactBlock: {
      title: {
        hu: 'Kapcsolódás',
        en: 'Get in touch',
        de: 'Kontakt'
      },
      intro: {
        hu: 'Ha csatlakoznál az Okuláréhoz, kérdésed van, vagy együttműködésen gondolkodsz, írj nekünk:',
        en: 'If you would like to join Okulare, have a question, or are thinking about a collaboration, write to us:',
        de: 'Wenn du beim Okulare mitmachen möchtest, Fragen hast oder über eine Zusammenarbeit nachdenkst, schreib uns:'
      },
      email: 'zaccszinpad@gmail.com',
      facebookUrl: 'https://www.facebook.com/',
      collaborationLinks: [
        {
          label: 'Kollaborációs link 1',
          url: 'https://example.com/kollaboracio-1'
        },
        {
          label: 'Kollaborációs link 2',
          url: 'https://example.com/kollaboracio-2'
        }
      ]
    }
  },
  {
    id: 'zacc-fesztival',
    slug: 'zacc-fesztival',
    title: {
      hu: 'Zacc Fesztivál',
      en: 'Zacc Festival',
      de: 'Zacc Festival'
    },
    shortDescription: {
      hu: 'Saját szervezésű fesztivál, előadásokkal, találkozásokkal és közös programokkal.',
      en: 'A self-organised festival with performances, encounters, and shared programmes.',
      de: 'Ein selbst organisiertes Festival mit Aufführungen, Begegnungen und gemeinsamen Programmen.'
    },
    description: [
      {
        hu: 'A Zacc Fesztivál a társulat saját szervezésű eseménye, ahol előadások, találkozások és közös programok kapnak helyet.',
        en: 'The Zacc Festival is a self-organised event by the ensemble, bringing together performances, encounters and shared programmes.',
        de: 'Das Zacc Festival ist eine selbst organisierte Veranstaltung des Ensembles mit Aufführungen, Begegnungen und gemeinsamen Programmen.'
      }
    ]
  },
  {
    id: 'nyilt-probak',
    slug: 'nyilt-probak',
    title: {
      hu: 'Nyílt próbák',
      en: 'Open Rehearsals',
      de: 'Offene Proben'
    },
    shortDescription: {
      hu: 'Betekintés a munkafolyamatokba, nyitott alkalmak formájában.',
      en: 'Insights into the working process in the form of open sessions.',
      de: 'Einblicke in Arbeitsprozesse in Form offener Termine.'
    },
    description: [
      {
        hu: 'A nyílt próbák betekintést adnak a munkafolyamatokba, és lehetőséget teremtenek a közös jelenlétre.',
        en: 'Open rehearsals offer insight into the working process and create space for shared presence.',
        de: 'Offene Proben geben Einblick in Arbeitsprozesse und schaffen Raum für gemeinsame Präsenz.'
      }
    ]
  },
  {
    id: 'hetvegi-workshopok',
    slug: 'hetvegi-workshopok',
    title: {
      hu: 'Hétvégi workshopok',
      en: 'Weekend Workshops',
      de: 'Wochenend-Workshops'
    },
    shortDescription: {
      hu: 'Mozgásra, jelenlétre és közös alkotásra épülő workshop alkalmak.',
      en: 'Workshop sessions focusing on movement, presence, and collective creation.',
      de: 'Workshoptermine zu Bewegung, Präsenz und gemeinsamer künstlerischer Praxis.'
    },
    description: [
      {
        hu: 'A hétvégi workshopok a mozgás, a jelenlét és a közös alkotás gyakorlati tereiként működnek.',
        en: 'Weekend workshops function as practical spaces for movement, presence and collective creation.',
        de: 'Die Wochenend-Workshops sind praktische Räume für Bewegung, Präsenz und gemeinsames künstlerisches Arbeiten.'
      }
    ]
  }
];