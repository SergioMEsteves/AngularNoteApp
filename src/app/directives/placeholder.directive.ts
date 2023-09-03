import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPlaceholderDirective]'
})
export class PlaceholderDirective {
  // Custom directive that can be used directly in HTML to conditionally render DOM

  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) { }

  @Input() set appPlaceholderDirective(noteListLength: number) {
     if(noteListLength==0) {
      this.vcRef.createEmbeddedView(this.templateRef);
      // Above accesses the DOM object's container and instantiates an imbedded view of the HTML object within it.
     } else {
      this.vcRef.clear();
      // Clears object from container, preventing it from rendering.
     }
  }
}
