import { Member } from './member.model';

export const MEMBERS: Member[] = [
  {
    name: {
      hu: 'Cseter Viktória',
      en: 'Viktória Cseter',
      de: 'Viktória Cseter'
    },
    role: {
      hu: 'színész, alkotó',
      en: 'performer, creator',
      de: 'Schauspielerin, Mitgestalterin'
    },
    shortBio: {
      hu: 'Fizikai színház és improvizáció határán dolgozik.',
      en: 'She works at the intersection of physical theatre and improvisation.',
      de: 'Sie arbeitet an der Schnittstelle von physischem Theater und Improvisation.'
    },
    longBio: [
      {
        hu: 'Részletes szakmai bemutatkozás első bekezdés.',
        en: 'Detailed professional introduction, first paragraph.',
        de: 'Ausführliche berufliche Vorstellung, erster Absatz.'
      },
      {
        hu: 'Második bekezdés helye.',
        en: 'Place for the second paragraph.',
        de: 'Platz für den zweiten Absatz.'
      }
    ],
    profileType: 'full',
    category: 'core'
  },
  {
    name: {
      hu: 'Nagy Anna',
      en: 'Anna Nagy',
      de: 'Anna Nagy'
    },
    role: {
      hu: 'rendező',
      en: 'director',
      de: 'Regisseurin'
    },
    shortBio: {
      hu: 'Kortárs performatív formákkal dolgozik.',
      en: 'She works with contemporary performative forms.',
      de: 'Sie arbeitet mit zeitgenössischen performativen Formen.'
    },
    longBio: [
      {
        hu: 'Részletes bio.',
        en: 'Detailed biography.',
        de: 'Ausführliche Biografie.'
      }
    ],
    profileType: 'full',
    category: 'core'
  },
  {
    name: {
      hu: 'Kiss Péter',
      en: 'Péter Kiss',
      de: 'Péter Kiss'
    },
    role: {
      hu: 'színész',
      en: 'performer',
      de: 'Schauspieler'
    },
    shortBio: {
      hu: 'Mozgásszínházi háttérrel dolgozik.',
      en: 'He works with a movement theatre background.',
      de: 'Er arbeitet mit einem bewegungstheaterbezogenen Hintergrund.'
    },
    profileType: 'short',
    category: 'core'
  },
  {
    name: {
      hu: 'Tóth Júlia',
      en: 'Júlia Tóth',
      de: 'Júlia Tóth'
    },
    role: {
      hu: 'ének',
      en: 'vocals',
      de: 'Gesang'
    },
    profileType: 'minimal',
    category: 'guest'
  }
];