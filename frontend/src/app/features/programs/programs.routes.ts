import { Routes } from '@angular/router';
import { ProgramsComponent } from './pages/programs/programs.component';
import { ProgramDetailComponent } from './pages/program-detail/program-detail.component';

export const PROGRAMS_ROUTES: Routes = [
  { path: '', component: ProgramsComponent },
  { path: ':slug', component: ProgramDetailComponent }
];