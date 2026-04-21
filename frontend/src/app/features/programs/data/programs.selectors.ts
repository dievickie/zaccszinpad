import { ProcessedProgramOccurrence } from './programs.processed';

export function getHighlightedOccurrence(
  occurrences: ProcessedProgramOccurrence[]
): ProcessedProgramOccurrence | undefined {
  const now = new Date();

  const upcoming = occurrences
    .filter(
      (o) =>
        o.isHighlighted &&
        o.isPublic &&
        o.startDate &&
        new Date(o.startDate) >= now
    )
    .sort(
      (a, b) =>
        new Date(a.startDate!).getTime() -
        new Date(b.startDate!).getTime()
    );

  if (upcoming.length > 0) {
    return upcoming[0];
  }

  // fallback: legutóbbi múltbeli
  const past = occurrences
    .filter(
      (o) =>
        o.isHighlighted &&
        o.isPublic &&
        o.startDate &&
        new Date(o.startDate) < now
    )
    .sort(
      (a, b) =>
        new Date(b.startDate!).getTime() -
        new Date(a.startDate!).getTime()
    );

  return past[0];
}