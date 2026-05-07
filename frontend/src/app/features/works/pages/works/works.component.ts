import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

import { PROCESSED_WORKS } from '../../data/works.processed';
import { AppLanguage } from '../../../../core/i18n/i18n.types';
import { mapToAppLanguage } from '../../../../core/i18n/i18n.adapter';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnDestroy {
  protected readonly works = PROCESSED_WORKS;
  protected currentLanguage: AppLanguage = 'hu';

  private readonly langChangeSubscription: Subscription;

  constructor(private readonly translate: TranslateService) {
    this.setLanguage();

    this.langChangeSubscription = this.translate.onLangChange.subscribe(() => {
      this.setLanguage();
    });
  }

  ngOnDestroy(): void {
    this.langChangeSubscription.unsubscribe();
  }

  private setLanguage(): void {
    const activeLanguage =
      this.translate.getCurrentLang() || this.translate.getFallbackLang() || 'hu';

    this.currentLanguage = mapToAppLanguage(activeLanguage);
  }
}
