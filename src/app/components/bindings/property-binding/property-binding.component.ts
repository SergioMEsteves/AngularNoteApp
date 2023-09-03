import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent {
    message = `Bound via property binding`;

    getMessage() {
      console.log(`getting message...`);
      return this.message;
    }
}
