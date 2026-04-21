import { toSlug } from '../../ensemble/utils/member-slug.util';
import { ProgramOccurrence, ProgramSeries } from './program.model';
import { PROGRAM_OCCURRENCES } from './program-occurrences.mock';
import { PROGRAM_SERIES } from './program-series.mock';

export interface ProcessedProgramSeries extends ProgramSeries {
  slug: string;
}

export interface ProcessedProgramOccurrence extends ProgramOccurrence {
  slug: string;
}

export const PROCESSED_PROGRAM_SERIES: ProcessedProgramSeries[] = PROGRAM_SERIES.map(
  (series) => ({
    ...series,
    slug: series.slug ?? toSlug(series.title.hu)
  })
);

export const PROCESSED_PROGRAM_OCCURRENCES: ProcessedProgramOccurrence[] =
  PROGRAM_OCCURRENCES.map((occurrence) => ({
    ...occurrence,
    slug: occurrence.slug ?? toSlug(occurrence.title.hu)
  }));