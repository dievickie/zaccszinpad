import { PERFORMANCES } from './performances.mock';
import { Performance } from './performance.model';
import { toSlug } from '../../ensemble/utils/member-slug.util';

export interface ProcessedPerformance extends Performance {
  slug: string;
}

export const PROCESSED_PERFORMANCES: ProcessedPerformance[] = PERFORMANCES.map(
  (performance) => ({
    ...performance,
    slug: performance.slug ?? toSlug(performance.title.hu)
  })
);