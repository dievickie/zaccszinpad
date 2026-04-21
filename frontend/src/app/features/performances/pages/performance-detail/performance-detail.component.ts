import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { PROCESSED_PERFORMANCES, ProcessedPerformance } from '../../data/performances.processed';
import { mapToAppLanguage } from '../../../../core/i18n/i18n.adapter';
import { AppLanguage } from '../../../../core/i18n/i18n.types';

@Component({
  selector: 'app-performance-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './performance-detail.component.html',
  styleUrls: ['./performance-detail.component.scss']
})
export class PerformanceDetailComponent {
  protected performance?: ProcessedPerformance;
  protected currentLanguage: AppLanguage = 'hu';

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

    const found = PROCESSED_PERFORMANCES.find((p) => p.slug === slug);

    if (!found) {
      void this.router.navigate(['/eloadasok']);
      return;
    }

    this.performance = found;
  }

  private setLanguage(): void {
    const lang =
      this.translate.getCurrentLang() ||
      this.translate.getFallbackLang() ||
      'hu';

    this.currentLanguage = mapToAppLanguage(lang);
  }
}