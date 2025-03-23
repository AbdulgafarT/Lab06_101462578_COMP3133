import { Directive, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Output() formatted = new EventEmitter<string>();

  constructor(private el: ElementRef) {}

  @HostListener('blur') onBlur() {
    const value: string = this.el.nativeElement.value;
    const upper = value.toUpperCase();
    this.el.nativeElement.value = upper;
    this.formatted.emit(upper);
  }
}
