import { Routes } from '@angular/router';
import { PerformancesComponent } from './pages/performances/performances.component';
import { PerformanceDetailComponent } from './pages/performance-detail/performance-detail.component';

export const PERFORMANCES_ROUTES: Routes = [
  { path: '', component: PerformancesComponent },
  { path: ':slug', component: PerformanceDetailComponent }
];