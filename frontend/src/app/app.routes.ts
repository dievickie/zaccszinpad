import { Routes } from '@angular/router';

import { HomeComponent } from './features/home/pages/home/home.component';
import { EnsembleComponent } from './features/ensemble/pages/ensemble/ensemble.component';
import { PerformancesComponent } from './features/performances/pages/performances/performances.component';
import { ContactComponent } from './features/contact/pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'tarsulat', component: EnsembleComponent },
  { path: 'eloadasok', component: PerformancesComponent },
  { path: 'kapcsolat', component: ContactComponent },
  { path: '**', redirectTo: '' }
];