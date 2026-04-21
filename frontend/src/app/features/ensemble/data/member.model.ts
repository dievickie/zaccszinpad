export type ProfileType = 'full' | 'short' | 'minimal';
export type MemberCategory = 'core' | 'guest' | 'team';
export type AppLanguage = 'hu' | 'en' | 'de';

export interface LocalizedText {
  hu: string;
  en: string;
  de: string;
}

export interface Member {
  name: LocalizedText;
  slug?: string;
  role: LocalizedText;
  shortBio?: LocalizedText;
  longBio?: LocalizedText[];
  imageUrl?: string;
  profileType: ProfileType;
  category: MemberCategory;
}