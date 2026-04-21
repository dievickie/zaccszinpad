export interface ProgramLink {
  label: string;
  url: string;
}

export interface ProgramFaqItem {
  question: string;
  answer: string;
}

export interface ProgramOccurrence {
  slug: string;
  title: string;
  city: string;
  venue?: string;
  dateLabel: string;
  timeLabel?: string;
  teaser?: string;
  description?: string[];
  artists?: string[];
}

export interface ProgramContactBlock {
  title: string;
  intro: string;
  email: string;
  facebookUrl?: string;
  collaborationLinks?: ProgramLink[];
}

export interface Program {
  slug: string;
  title: string;
  shortDescription?: string;
  description?: string[];
  faq?: ProgramFaqItem[];
  contactBlock?: ProgramContactBlock;
  occurrences?: ProgramOccurrence[];
}