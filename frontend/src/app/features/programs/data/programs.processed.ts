import { PROGRAM_OCCURRENCES } from './program-occurrences.mock';
import { PROGRAM_SERIES } from './program-series.mock';
import { ProgramOccurrence, ProgramSeries } from './program.model';

export interface ProcessedProgramOccurrence extends ProgramOccurrence {
  seriesSlug: string;
}

export interface ProcessedProgramSeries extends ProgramSeries {
  occurrences: ProcessedProgramOccurrence[];
}

const seriesById = new Map<string, ProgramSeries>(
  PROGRAM_SERIES.map((series) => [series.id, series])
);

export const PROCESSED_PROGRAM_OCCURRENCES: ProcessedProgramOccurrence[] =
  PROGRAM_OCCURRENCES.map((occurrence) => ({
    ...occurrence,
    seriesSlug: seriesById.get(occurrence.seriesId)?.slug ?? occurrence.seriesId
  }));

export const PROCESSED_PROGRAM_SERIES: ProcessedProgramSeries[] =
  PROGRAM_SERIES.map((series) => ({
    ...series,
    occurrences: PROCESSED_PROGRAM_OCCURRENCES.filter(
      (occurrence) => occurrence.seriesId === series.id
    ).sort((a, b) => {
      const aTime = a.startDate ? new Date(a.startDate).getTime() : 0;
      const bTime = b.startDate ? new Date(b.startDate).getTime() : 0;
      return aTime - bTime;
    })
  }));