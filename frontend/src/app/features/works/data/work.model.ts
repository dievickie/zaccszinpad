export type LocalizedText = {
  [key: string]: string;
};

export interface WorkCreditName {
  name: string;
  memberSlug?: string;
}

export interface WorkCreditGroup {
  label: LocalizedText;
  names: WorkCreditName[];
  separator?: string;
}

export interface Work {
  id: string;
  slug?: string;
  title: LocalizedText;
  shortDescription?: LocalizedText;
  longDescription?: LocalizedText[];
  imageUrl?: string;
  creditGroups?: WorkCreditGroup[];
  creditsNote?: LocalizedText;
}
