import { LocalizedText } from '../../ensemble/data/member.model';

export interface Performance {
  id: string;
  slug?: string;
  title: LocalizedText;
  shortDescription?: LocalizedText;
  longDescription?: LocalizedText[];
  imageUrl?: string;
  memberSlugs?: string[];
}