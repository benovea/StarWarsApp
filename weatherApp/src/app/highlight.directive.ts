// tslint:disable: typedef
import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  static backgroundColor: string;
  @HostBinding('style.background-color') backgroundColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseout') onMouseLeave() {
    this.backgroundColor = '';
  }
}
