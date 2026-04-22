import { ProgramOccurrence } from './program.model';

export const PROGRAM_OCCURRENCES: ProgramOccurrence[] = [
  {
    id: 'okulare-el-berlin',
    seriesId: 'okulare',
    slug: 'el-berlin',
    title: {
      hu: 'ÉL – felolvasószínházi est',
      en: 'LIVE – staged reading evening',
      de: 'LEBEN – szenische Lesung'
    },
    city: {
      hu: 'Berlin',
      en: 'Berlin',
      de: 'Berlin'
    },
    venue: {
      hu: 'aktuális helyszín',
      en: 'current venue',
      de: 'aktueller Ort'
    },
    startDate: '2026-05-14T19:00:00',
    timeLabel: {
      hu: '19:00',
      en: '7:00 PM',
      de: '19:00'
    },
    teaser: {
      hu: 'Három új szöveg, közös meghallgatás, szavazás és találkozás egy este alatt.',
      en: 'Three new texts, shared listening, voting and encounters in one evening.',
      de: 'Drei neue Texte, gemeinsames Zuhören, Abstimmen und Begegnung an einem Abend.'
    },
    description: [
      {
        hu: 'Éljen a kortárs dráma! Az évad egyik legelevenebb témájával érkezik az Okuláré következő alkalma.',
        en: 'Long live contemporary drama! The next Okulare edition arrives with one of the most vivid themes of the season.',
        de: 'Es lebe das zeitgenössische Drama! Die nächste Okulare-Ausgabe kommt mit einem der lebendigsten Themen der Saison.'
      },
      {
        hu: 'Hallgass meg három vadonatúj szöveget, és szavazz a kedvencedre.',
        en: 'Listen to three brand new texts and vote for your favorite.',
        de: 'Höre drei brandneue Texte und stimme für deinen Favoriten ab.'
      }
    ],
    artists: [
      { name: 'Viktória Cseter', memberSlug: 'cseter-viktoria' },
      { name: 'Gabriella Keresztes' },
      { name: 'Rózsa', memberSlug: 'resztvevo-muvesz-3' },
      { name: 'Berlini rendező 1' }
    ],
    isHighlighted: true,
    isPublic: true
  },
  {
    id: 'okulare-masodik-berlin',
    seriesId: 'okulare',
    slug: 'masodik-alkalom-berlin',
    title: {
      hu: 'Második Okuláré alkalom',
      en: 'Second Okulare event',
      de: 'Zweite Okulare-Ausgabe'
    },
    city: {
      hu: 'Berlin',
      en: 'Berlin',
      de: 'Berlin'
    },
    venue: {
      hu: 'aktuális helyszín',
      en: 'current venue',
      de: 'aktueller Ort'
    },
    startDate: '2026-06-06T20:00:00',
    timeLabel: {
      hu: '20:00',
      en: '8:00 PM',
      de: '20:00'
    },
    teaser: {
      hu: 'Új felolvasások, új alkotók, új közös fókusz ugyanazon a platformon.',
      en: 'New readings, new artists and a new shared focus on the same platform.',
      de: 'Neue Lesungen, neue Künstler:innen und ein neuer gemeinsamer Fokus auf derselben Plattform.'
    },
    description: [
      {
        hu: 'Az Okuláré minden alkalma egyedi összetételben valósul meg.',
        en: 'Each Okulare edition takes shape in a unique constellation.',
        de: 'Jede Okulare-Ausgabe entsteht in einer eigenen Konstellation.'
      },
      {
        hu: 'A részleteknél megtalálod az adott esthez kapcsolódó alkotókat és információkat.',
        en: 'In the details you can find the artists and information connected to the evening.',
        de: 'In den Details findest du die beteiligten Künstler:innen und Informationen zum jeweiligen Abend.'
      }
    ],
    artists: [
      { name: 'Résztvevő művész A', memberSlug: 'resztvevo-muvesz-a' },
      { name: 'Résztvevő művész B' },
      { name: 'Résztvevő művész C', memberSlug: 'resztvevo-muvesz-c' },
      { name: 'Berlini rendező 2' }
    ],
    isHighlighted: false,
    isPublic: true
  }
];