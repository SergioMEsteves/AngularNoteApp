import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root', // how to reference from html: '<app-root></app-root>'
  templateUrl: './app.component.html', // html template to use
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'firstAngularApp';
  isDarkMode = false;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;

    const body = document.querySelector('body');
    body&&body.classList.toggle('dark-mode', this.isDarkMode);
    // If body is not null, toggle/untoggle dark mode.
  }
}
