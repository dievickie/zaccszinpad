import { LocalizedText } from '../../ensemble/data/member.model';

export interface PerformanceCreditGroup {
  label: LocalizedText;
  names: string[];
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