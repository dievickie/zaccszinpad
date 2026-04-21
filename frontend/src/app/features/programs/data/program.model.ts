import { LocalizedText } from '../../ensemble/data/member.model';

export type ProgramSeriesType =
  | 'reading-series'
  | 'festival'
  | 'workshop-series'
  | 'open-rehearsal-series'
  | 'other';

export type ProgramOccurrenceType =
  | 'reading-night'
  | 'festival'
  | 'workshop'
  | 'open-rehearsal'
  | 'other';

export interface ProgramOccurrenceItem {
  title: LocalizedText;
  subtitle?: LocalizedText;
  performanceId?: string;
}

export interface ProgramOccurrenceCredits {
  summary?: LocalizedText;
  note?: LocalizedText;
}

export type FaqItem = {
  question: {
    hu: string;
    en: string;
    de: string;
  };
  answer: {
    hu: string[];
    en: string[];
    de: string[];
  };
};

export interface ProgramOccurrence {
  id: string;
  slug?: string;
  seriesId: string;
  type: ProgramOccurrenceType;
  title: LocalizedText;
  shortDescription?: LocalizedText;
  longDescription?: LocalizedText[];
  imageUrl?: string;

  startDate?: string;
  endDate?: string;
  city?: LocalizedText;
  venue?: LocalizedText;

  isHighlighted?: boolean;
  isPublic?: boolean;

  items?: ProgramOccurrenceItem[];
  credits?: ProgramOccurrenceCredits;
  faq?: FaqItem[];
}

export interface ProgramSeries {
  id: string;
  slug?: string;
  type: ProgramSeriesType;
  title: LocalizedText;
  shortDescription?: LocalizedText;
  longDescription?: LocalizedText[];
  imageUrl?: string;

  occurrenceIds?: string[];
}