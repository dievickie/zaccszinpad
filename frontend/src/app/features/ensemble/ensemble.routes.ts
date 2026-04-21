import { Routes } from '@angular/router';
import { EnsembleComponent } from './pages/ensemble/ensemble.component';
import { MemberDetailComponent } from './pages/member-detail/member-detail.component';

export const ENSEMBLE_ROUTES: Routes = [
  { path: '', component: EnsembleComponent },
  { path: ':slug', component: MemberDetailComponent }
];