import { AppLanguage } from './i18n.types';

export function mapToAppLanguage(lang: string | null | undefined): AppLanguage {
  switch (lang) {
    case 'en':
      return 'en';
    case 'de':
      return 'de';
    case 'hu':
    default:
      return 'hu';
  }
}