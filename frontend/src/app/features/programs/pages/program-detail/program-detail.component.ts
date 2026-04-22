import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

import {
  ProcessedProgramOccurrence,
  ProcessedProgramSeries,
  PROCESSED_PROGRAM_SERIES
} from '../../data/programs.processed';

@Component({
  selector: 'app-program-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './program-detail.component.html',
  styleUrls: ['./program-detail.component.scss']
})
export class ProgramDetailComponent {
  protected readonly currentLanguage = 'hu'; // később ide jön a translate service
  protected program?: ProcessedProgramSeries;

  constructor(private readonly route: ActivatedRoute) {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.program = PROCESSED_PROGRAM_SERIES.find((p) => p.slug === slug);
  }

  protected trackOccurrence(_: number, occurrence: ProcessedProgramOccurrence): string {
    return occurrence.id;
  }
}