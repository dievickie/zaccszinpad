import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslateModule],
  template: `
    <section class="home">
      <h1>{{ 'home.title' | translate }}</h1>
      <p>{{ 'home.subtitle' | translate }}</p>
    </section>
  `
})
export class HomeComponent {}