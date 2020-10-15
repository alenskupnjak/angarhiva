import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string, dodatak: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string, dodatak: string}>();
  newServerContent = 'bbb';
  @ViewChild('treciPodatak', {static: true}) treciPodatak: ElementRef;

  constructor() {}

  ngOnInit() {
  }

  onAddServer(newServerName: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: newServerName.value,
      serverContent: this.newServerContent,
      dodatak: this.treciPodatak.nativeElement.value});
  }

  onAddBlueprint(newServerName: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: newServerName.value,
      serverContent: this.newServerContent,
      dodatak: this.treciPodatak.nativeElement.value});
  }


}
