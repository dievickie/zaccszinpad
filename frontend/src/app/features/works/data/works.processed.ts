import { works } from './works.mock';
import { Work } from './work.model';
import { toSlug } from '../../ensemble/utils/member-slug.util';

export interface ProcessedWork extends Omit<Work, 'imageUrl' | 'coverImage' | 'heroImage'> {
  slug: string;
  cardImage?: string;
  posterImage?: string;
}

export const PROCESSED_WORKS: ProcessedWork[] = works.map((work) => {
  const posterImage = work.posterImage ?? work.coverImage ?? work.imageUrl;
  const cardImage = work.cardImage ?? work.heroImage ?? posterImage;

  return {
    ...work,
    cardImage,
    posterImage,
    slug: work.slug ?? toSlug(work.title['hu'])
  };
});
