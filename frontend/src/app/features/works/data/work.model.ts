export type LocalizedText = {
  [key: string]: string;
};

export interface PerformanceCreditName {
  name: string;
  memberSlug?: string;
}

export interface PerformanceCreditGroup {
  label: LocalizedText;
  names: PerformanceCreditName[];
  separator?: string;
}

export interface Performance {
  id: string;
  slug?: string;
  title: LocalizedText;
  shortDescription?: LocalizedText;
  longDescription?: LocalizedText[];
  imageUrl?: string;
  creditGroups?: PerformanceCreditGroup[];
  creditsNote?: LocalizedText;
}