import { ProcessedProgramOccurrence, PROCESSED_PROGRAM_OCCURRENCES, PROCESSED_PROGRAM_SERIES } from './programs.processed';

export const getProgramSeries = () => PROCESSED_PROGRAM_SERIES;

export const getUpcomingHighlightedOccurrences = (
  occurrences: ProcessedProgramOccurrence[] = PROCESSED_PROGRAM_OCCURRENCES
) => {
  const now = new Date();

  return [...occurrences]
    .filter(
      (o) =>
        o.isHighlighted &&
        o.isPublic &&
        o.startDate &&
        new Date(o.startDate) >= now
    )
    .sort(
      (a, b) =>
        new Date(a.startDate!).getTime() - new Date(b.startDate!).getTime()
    );
};

export const getPastHighlightedOccurrences = (
  occurrences: ProcessedProgramOccurrence[] = PROCESSED_PROGRAM_OCCURRENCES
) => {
  const now = new Date();

  return [...occurrences]
    .filter(
      (o) =>
        o.isHighlighted &&
        o.isPublic &&
        o.startDate &&
        new Date(o.startDate) < now
    )
    .sort(
      (a, b) =>
        new Date(b.startDate!).getTime() - new Date(a.startDate!).getTime()
    );
};

export const getHighlightedOccurrence = (
  occurrences: ProcessedProgramOccurrence[] = PROCESSED_PROGRAM_OCCURRENCES
) => {
  const upcoming = getUpcomingHighlightedOccurrences(occurrences);

  if (upcoming.length > 0) {
    return upcoming[0];
  }

  const past = getPastHighlightedOccurrences(occurrences);
  return past[0];
};