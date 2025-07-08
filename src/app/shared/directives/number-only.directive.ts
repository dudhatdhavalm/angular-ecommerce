import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'input[numberOnly]'
})
export class NumberOnlyDirective {

  constructor(private _el: ElementRef) { }

  // Updated event parameter with explicit type for Angular 12 strict type checking
  @HostListener('input', ['$event']) onInputChange(event: Event) {
    const initalValue = this._el.nativeElement.value;
    if (initalValue == 0) {
      this._el.nativeElement.value = "";
    } else {
      this._el.nativeElement.value = initalValue.replace(/[^0-9]*/g, "");
      if (initalValue !== this._el.nativeElement.value) {
        event.stopPropagation();
      }
    }
  }

}