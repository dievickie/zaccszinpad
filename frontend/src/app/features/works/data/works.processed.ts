import { works } from './works.mock';
import { Work } from './work.model';
import { toSlug } from '../../ensemble/utils/member-slug.util';

export interface ProcessedWork extends Work {
  slug: string;
}

export const PROCESSED_WORKS: ProcessedWork[] = works.map((work) => ({
  ...work,
  slug: work.slug ?? toSlug(work.title['hu'])
}));
