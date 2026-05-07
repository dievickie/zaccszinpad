import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { PROCESSED_works, ProcessedWork } from '../../data/works.processed';
import { mapToAppLanguage } from '../../../../core/i18n/i18n.adapter';
import { AppLanguage } from '../../../../core/i18n/i18n.types';

@Component({
  selector: 'app-work-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './work-detail.component.html',
  styleUrls: ['./work-detail.component.scss']
})
export class WorkDetailComponent {
  protected work?: ProcessedWork;
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

    const found = PROCESSED_works.find((p) => p.slug === slug);

    if (!found) {
      void this.router.navigate(['/munkak']);
      return;
    }

    this.work = found;
  }

  private setLanguage(): void {
    const lang =
      this.translate.getCurrentLang() ||
      this.translate.getFallbackLang() ||
      'hu';

    this.currentLanguage = mapToAppLanguage(lang);
  }
}