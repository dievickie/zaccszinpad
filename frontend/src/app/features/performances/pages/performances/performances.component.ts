import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

import { PROCESSED_PERFORMANCES } from '../../data/performances.processed';
import { AppLanguage } from '../../../../core/i18n/i18n.types';
import { mapToAppLanguage } from '../../../../core/i18n/i18n.adapter';

@Component({
  selector: 'app-performances',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './performances.component.html',
  styleUrls: ['./performances.component.scss']
})
export class PerformancesComponent implements OnDestroy {
  protected readonly performances = PROCESSED_PERFORMANCES;
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