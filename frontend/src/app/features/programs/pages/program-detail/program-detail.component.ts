import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PROGRAMS } from '../../data/program-occurrences.mock';
import { Program, ProgramOccurrence } from '../../data/program.model';

@Component({
  selector: 'app-program-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './program-detail.component.html',
  styleUrls: ['./program-detail.component.scss']
})
export class ProgramDetailComponent {
  protected program?: Program;

  constructor(private readonly route: ActivatedRoute) {
    const slug = this.route.snapshot.paramMap.get('slug');

    this.program = PROGRAMS.find((item) => item.slug === slug);
  }

  protected trackOccurrence(_: number, occurrence: ProgramOccurrence): string {
    return occurrence.slug;
  }
}