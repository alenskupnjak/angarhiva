import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {

  constructor(private elementRef: ElementRef) {


  }

  ngOnInit() {
    // nije dobra preksa
    this.elementRef.nativeElement.style.background = 'green';
  }
}
