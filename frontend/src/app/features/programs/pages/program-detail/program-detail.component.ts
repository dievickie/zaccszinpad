import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProcessedProgramOccurrence, ProcessedProgramSeries, PROCESSED_PROGRAM_SERIES } from '../../data/programs.processed';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-program-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './program-detail.component.html',
  styleUrls: ['./program-detail.component.scss']
})
export class ProgramDetailComponent {
  protected readonly currentLanguage = 'hu';
  protected program?: ProcessedProgramSeries;

  constructor(private readonly route: ActivatedRoute) {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.program = PROCESSED_PROGRAM_SERIES.find((item) => item.slug === slug);
  }

  protected trackOccurrence(_: number, occurrence: ProcessedProgramOccurrence): string {
    return occurrence.id;
  }
}