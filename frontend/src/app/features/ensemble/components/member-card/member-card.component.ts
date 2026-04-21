import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Member } from '../../data/member.model';
import { AppLanguage } from '../../../../core/i18n/i18n.types';

@Component({
  selector: 'app-member-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss']
})
export class MemberCardComponent {
  @Input() member!: Member;
  @Input() language: AppLanguage = 'hu';
}