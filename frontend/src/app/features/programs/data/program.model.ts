export type LocalizedText = {
  [key: string]: string;
};

export interface ProgramLink {
  label: string;
  url: string;
}

export interface ProgramFaqItem {
  question: LocalizedText;
  answer: LocalizedText;
}

export interface ProgramContactBlock {
  title: LocalizedText;
  intro: LocalizedText;
  email: string;
  facebookUrl?: string;
  collaborationLinks?: ProgramLink[];
}

export interface ProgramSeries {
  id: string;
  slug: string;
  title: LocalizedText;
  shortDescription?: LocalizedText;
  description?: LocalizedText[];
  imageUrl?: string;
  faq?: ProgramFaqItem[];
  contactBlock?: ProgramContactBlock;
}

export interface ProgramOccurrence {
  id: string;
  seriesId: string;
  slug: string;
  title: LocalizedText;
  city: LocalizedText;
  venue?: LocalizedText;
  startDate?: string;
  timeLabel?: LocalizedText;
  teaser?: LocalizedText;
  description?: LocalizedText[];
  artists?: string[];
  isHighlighted?: boolean;
  isPublic?: boolean;
}