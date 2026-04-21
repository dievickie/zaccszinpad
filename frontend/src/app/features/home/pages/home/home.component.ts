import { Component, OnDestroy } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

import { PROCESSED_PROGRAM_OCCURRENCES } from '../../../programs/data/programs.processed';
import { getHighlightedOccurrence } from '../../../programs/data/programs.selectors';
import { ProcessedProgramOccurrence } from '../../../programs/data/programs.processed';

import { mapToAppLanguage } from '../../../../core/i18n/i18n.adapter';
import { AppLanguage } from '../../../../core/i18n/i18n.types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TranslatePipe, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {
  protected nextOccurrence?: ProcessedProgramOccurrence;
  protected currentLanguage: AppLanguage = 'hu';
  protected today = new Date().toISOString().slice(0, 10);
  protected formatDate(date: string): string {
    const d = new Date(date);

    return d.toLocaleDateString(this.currentLanguage, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
      });
  }

  private readonly langChangeSubscription: Subscription;

  constructor(private readonly translate: TranslateService) {
    this.setLanguage();

    this.langChangeSubscription = this.translate.onLangChange.subscribe(() => {
      this.setLanguage();
    });

    this.nextOccurrence = getHighlightedOccurrence(
      PROCESSED_PROGRAM_OCCURRENCES
    );
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