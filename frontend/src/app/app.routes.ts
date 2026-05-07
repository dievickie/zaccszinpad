import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/pages/home/home.component';
import { ContactComponent } from './features/contact/pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },

  {
    path: 'tarsulat',
    loadChildren: () =>
      import('./features/ensemble/ensemble.routes')
        .then(m => m.ENSEMBLE_ROUTES)
  },

  {
    path: 'programok',
    loadChildren: () =>
      import('./features/programs/programs.routes')
        .then(m => m.PROGRAMS_ROUTES)
  },

  {
    path: 'munkak',
    loadChildren: () =>
      import('./features/works/works.routes')
        .then(m => m.WORKS_ROUTES)
  },

  { path: 'eloadasok', redirectTo: 'munkak', pathMatch: 'full' },
  { path: 'eloadasok/:slug', redirectTo: 'munkak/:slug', pathMatch: 'full' },

  { path: 'kapcsolat', component: ContactComponent },

  { path: '**', redirectTo: '' }
];
