import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

import { PROCESSED_MEMBERS, ProcessedMember } from '../../data/members.processed';
import { mapToAppLanguage } from '../../../../core/i18n/i18n.adapter';
import { AppLanguage } from '../../../../core/i18n/i18n.types';

@Component({
  selector: 'app-member-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss']
})
export class MemberDetailComponent implements OnDestroy {
  protected member?: ProcessedMember;
  protected currentLanguage: AppLanguage = 'hu';

  private readonly langChangeSubscription: Subscription;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly translate: TranslateService
  ) {
    this.setLanguage();

    this.langChangeSubscription = this.translate.onLangChange.subscribe(() => {
      this.setLanguage();
    });

    const slug = this.route.snapshot.paramMap.get('slug');

    const found = PROCESSED_MEMBERS.find(
      (m) => m.profileType === 'full' && m.slug === slug
    );

    if (!found) {
      void this.router.navigate(['/tarsulat']);
      return;
    }

    this.member = found;
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