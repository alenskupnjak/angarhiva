import { Component,
          OnInit,
          Input,
          ViewEncapsulation,
          OnChanges,
          SimpleChanges,
          DoCheck,
          AfterContentInit,
          AfterContentChecked,
          AfterViewInit,
          AfterViewChecked,
          OnDestroy,
          ViewChild,
          ElementRef} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements
OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
  @Input() element: {type: string, name: string, content: string, dodatak: string };
  @Input() ime: string ;
  @ViewChild('heading', {static: true}) header: ElementRef;
  pokus = 'Pokus';

  constructor() {
    console.log('constructoe called');
  }

  ngOnChanges(changes: SimpleChanges): void {
  console.log('ngOnChanges called');
  console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log('Text content - ' + this.header.nativeElement.textContent);
    this.pokus = 'daj';
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    console.log('Text content - ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }

}
