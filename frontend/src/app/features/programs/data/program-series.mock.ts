import { ProgramSeries } from './program.model';

export const PROGRAM_SERIES: ProgramSeries[] = [
  {
    id: 'okulare',
    title: {
      hu: 'Okuláré',
      en: 'Okuláré',
      de: 'Okuláré'
    },
    type: 'reading-series',
    shortDescription: {
      hu: 'Felolvasóest-sorozat, évente több alkalommal, változó hívószavakkal és válogatással.',
      en: 'A recurring reading-night series held several times a year with changing themes and selections.',
      de: 'Eine mehrmals jährlich stattfindende Lesereihe mit wechselnden Leitmotiven und Auswahlprogrammen.'
    },
    longDescription: [
      {
        hu: 'Az Okuláré a Zacc Színpad visszatérő felolvasóest-sorozata, amelynek minden alkalma saját hívószó köré szerveződik.',
        en: 'Okuláré is Zacc Színpad’s recurring reading-night series, with each edition organised around its own keyword or theme.',
        de: 'Okuláré ist die wiederkehrende Lesereihe des Zacc Színpad, deren einzelne Abende jeweils um ein eigenes Leitwort organisiert sind.'
      }
    ],
    occurrenceIds: ['okulare-februar', 'okulare-el']  },
  {
    id: 'zacc-fesztival',
    title: {
      hu: 'Zacc Fesztivál',
      en: 'Zacc Festival',
      de: 'Zacc Festival'
    },
    type: 'festival',
    shortDescription: {
      hu: 'Saját szervezésű fesztivál, előadásokkal, találkozásokkal és közös programokkal.',
      en: 'A self-organised festival with performances, encounters, and shared programmes.',
      de: 'Ein selbst organisiertes Festival mit Aufführungen, Begegnungen und gemeinsamen Programmen.'
    },
    occurrenceIds: ['zacc-fesztival-2026']
  },
  {
    id: 'nyilt-probak',
    title: {
      hu: 'Nyílt próbák',
      en: 'Open Rehearsals',
      de: 'Offene Proben'
    },
    type: 'open-rehearsal-series',
    shortDescription: {
      hu: 'Betekintés a munkafolyamatokba, nyitott alkalmak formájában.',
      en: 'Insights into the working process in the form of open sessions.',
      de: 'Einblicke in Arbeitsprozesse in Form offener Termine.'
    }
  },
  {
    id: 'hetvegi-workshopok',
    title: {
      hu: 'Hétvégi workshopok',
      en: 'Weekend Workshops',
      de: 'Wochenend-Workshops'
    },
    type: 'workshop-series',
    shortDescription: {
      hu: 'Mozgásra, jelenlétre és közös alkotásra épülő workshop alkalmak.',
      en: 'Workshop sessions focusing on movement, presence, and collective creation.',
      de: 'Workshoptermine zu Bewegung, Präsenz und gemeinsamer künstlerischer Praxis.'
    }
  }
];