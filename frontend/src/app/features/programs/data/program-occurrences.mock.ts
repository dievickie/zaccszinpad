import { Program } from './program.model';

export const PROGRAMS: Program[] = [
  {
    slug: 'okulare',
    title: 'Okuláré Projekt',
    shortDescription:
      'Felolvasószínházi estek, kortárs drámaszövegek és közösségi találkozások.',
    description: [
      'Az Okuláré Projekt felolvasószínházi estjein új kortárs szövegek, változó alkotói együttállások és közösségi találkozások kerülnek fókuszba.',
      'Az egyes alkalmak saját résztvevőkkel, saját hangsúlyokkal és külön részletekkel jelennek meg.'
    ],
    contactBlock: {
      title: 'Kapcsolódás',
      intro:
        'Ha csatlakoznál az Okuláréhoz, kérdésed van, vagy együttműködésen gondolkodsz, írj nekünk:',
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
    },
    faq: [
      {
        question: 'Milyen nyelvűek az események?',
        answer:
          'Az egyes alkalmak nyelve és formátuma eltérhet. A konkrét események részleteinél mindig jelezzük az aktuális információkat.'
      },
      {
        question: 'Lehet késni?',
        answer:
          'Kérünk, hogy lehetőség szerint pontosan érkezz. Ha mégis késnél, nézd meg az adott alkalom részleteit, mert helyszínenként eltérhet, hogyan tudsz becsatlakozni.'
      },
      {
        question: 'Lesznek italok a helyszínen?',
        answer:
          'Igen, az alkalmakon rendszerint elérhetők italok. A helyszíni hozzájárulásokkal a közös eseményeinket támogatod.'
      }
    ],
    occurrences: [
      {
        slug: 'el-berlin',
        title: 'ÉL – felolvasószínházi est',
        city: 'Berlin',
        venue: 'aktuális helyszín',
        dateLabel: '2026. május 14.',
        timeLabel: '19:00',
        teaser:
          'Három új szöveg, közös meghallgatás, szavazás és találkozás egy este alatt.',
        description: [
          'Éljen a kortárs dráma! Az évad egyik legelevenebb témájával érkezik az Okuláré következő alkalma.',
          'Hallgass meg három vadonatúj szöveget, és szavazz a kedvencedre.'
        ],
        artists: [
          'Résztvevő művész 1',
          'Résztvevő művész 2',
          'Résztvevő művész 3',
          'Berlini rendező 1'
        ]
      },
      {
        slug: 'masodik-alkalom-berlin',
        title: 'Második Okuláré alkalom',
        city: 'Berlin',
        venue: 'aktuális helyszín',
        dateLabel: '2026. június 6.',
        timeLabel: '20:00',
        teaser:
          'Új felolvasások, új alkotók, új közös fókusz ugyanazon a platformon.',
        description: [
          'Az Okuláré minden alkalma egyedi összetételben valósul meg.',
          'A részleteknél megtalálod az adott esthez kapcsolódó alkotókat és információkat.'
        ],
        artists: [
          'Résztvevő művész A',
          'Résztvevő művész B',
          'Résztvevő művész C',
          'Berlini rendező 2'
        ]
      }
    ]
  }
];