import { Routes } from '@angular/router';
import { WorksComponent } from './pages/works/works.component';
import { WorkDetailComponent } from './pages/work-detail/work-detail.component';

export const WORKS_ROUTES: Routes = [
  { path: '', component: WorksComponent },
  { path: ':slug', component: WorkDetailComponent }
];