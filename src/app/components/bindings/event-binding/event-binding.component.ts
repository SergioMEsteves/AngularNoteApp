import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent {
  animal = `🦜`;

  onClick() {
    alert('Button was clicked!');
  }

  onKeyUp(keyUpEvent: { code: string; }) { // Makes sure property code is a string
    keyUpEvent.code === 'Enter' && (this.animal = 'Bacon!');
    // Above is an 'if then' statement
  }
}
