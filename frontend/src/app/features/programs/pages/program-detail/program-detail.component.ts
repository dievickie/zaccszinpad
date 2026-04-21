import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import {
  PROCESSED_PROGRAM_SERIES,
  PROCESSED_PROGRAM_OCCURRENCES,
  ProcessedProgramSeries,
  ProcessedProgramOccurrence
} from '../../data/programs.processed';
import { PROCESSED_PERFORMANCES } from '../../../performances/data/performances.processed';

import { mapToAppLanguage } from '../../../../core/i18n/i18n.adapter';
import { AppLanguage } from '../../../../core/i18n/i18n.types';

@Component({
  selector: 'app-program-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './program-detail.component.html',
  styleUrls: ['./program-detail.component.scss']
})
export class ProgramDetailComponent {
  protected program?: ProcessedProgramSeries;
  protected occurrences: ProcessedProgramOccurrence[] = [];
  protected currentLanguage: AppLanguage = 'hu';
  protected getPerformanceSlug(performanceId: string): string | undefined {
  return PROCESSED_PERFORMANCES.find((performance) => performance.id === performanceId)?.slug;
}
  protected formatDate(date: string): string {
  const d = new Date(date);

  return d.toLocaleDateString(this.currentLanguage, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly translate: TranslateService
  ) {
    this.setLanguage();

    this.translate.onLangChange.subscribe(() => {
      this.setLanguage();
    });

    const slug = this.route.snapshot.paramMap.get('slug');

    const found = PROCESSED_PROGRAM_SERIES.find(
      (p) => p.slug === slug
    );

    if (!found) {
      void this.router.navigate(['/programok']);
      return;
    }

    this.program = found;

    this.occurrences = PROCESSED_PROGRAM_OCCURRENCES.filter(
    (o) => o.seriesId === found.id
    );

  }

  private setLanguage(): void {
    const lang =
      this.translate.getCurrentLang() ||
      this.translate.getFallbackLang() ||
      'hu';

    this.currentLanguage = mapToAppLanguage(lang);
  }
}