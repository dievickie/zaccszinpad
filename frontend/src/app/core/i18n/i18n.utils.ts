import { AppLanguage } from './i18n.types';

export function pickLocalizedText<T extends Record<AppLanguage, string>>(
  value: T,
  language: AppLanguage
): string {
  return value[language];
}