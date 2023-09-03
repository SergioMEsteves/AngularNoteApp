import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.scss']
})
export class StringInterpolationComponent {
    message;

    constructor() {
      this.message = '"I want a banana." - Hermogenes';
    }
  
    generateMessage() {
      return this.message.replace("banana", "celery");
    }
}
