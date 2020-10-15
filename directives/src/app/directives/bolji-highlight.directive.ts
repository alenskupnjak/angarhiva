import { Directive,
         Renderer2,
         OnInit,
         ElementRef,
         HostListener,
         HostBinding,
         Input} from '@angular/core';

@Directive({
  selector: '[appBoljiHighlight]'
})
export class BoljiHighlightDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  @Input() defaultColor = 'transparent';
  @Input() highlightColor = 'blue';
  @HostBinding('style.backgroundColor') pozadina = this.defaultColor;

  ngOnInit() {
  //   this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');

  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
      // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
      this.pozadina = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
      // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
      this.pozadina = this.defaultColor;
  }
}
