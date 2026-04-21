import { Performance } from './performance.model';

export const PERFORMANCES: Performance[] = [
  {
    id: 'okulare',
    title: {
      hu: 'Okuláré',
      en: 'Okuláré',
      de: 'Okuláré'
    },
    shortDescription: {
      hu: 'Kiemelt produkció rövid leírása.',
      en: 'Short description of a featured production.',
      de: 'Kurze Beschreibung einer ausgewählten Produktion.'
    },
    longDescription: [
      {
        hu: 'Az Okuláré részletesebb leírásának első bekezdése.',
        en: 'First paragraph of the more detailed description of Okuláré.',
        de: 'Erster Absatz der ausführlicheren Beschreibung von Okuláré.'
      }
    ],
    memberSlugs: ['cseter-viktoria', 'nagy-anna']
  },
  {
    id: 'xyz',
    title: {
      hu: 'XYZ',
      en: 'XYZ',
      de: 'XYZ'
    },
    shortDescription: {
      hu: 'Másik produkció rövid leírása.',
      en: 'Short description of another production.',
      de: 'Kurze Beschreibung einer weiteren Produktion.'
    },
    longDescription: [
      {
        hu: 'Az XYZ részletesebb leírása.',
        en: 'Detailed description of XYZ.',
        de: 'Ausführlichere Beschreibung von XYZ.'
      }
    ],
    memberSlugs: ['cseter-viktoria']
  }
];