import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

import { PROCESSED_PROGRAM_SERIES } from '../../data/programs.processed';
import { AppLanguage } from '../../../../core/i18n/i18n.types';
import { mapToAppLanguage } from '../../../../core/i18n/i18n.adapter';

@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnDestroy {
  protected readonly programs = PROCESSED_PROGRAM_SERIES;
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
    const lang =
      this.translate.getCurrentLang() ||
      this.translate.getFallbackLang() ||
      'hu';

    this.currentLanguage = mapToAppLanguage(lang);
  }
}