import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverrCreationStatus = 'Jos nije kreriran server';
  serverName = 'TestServer';
  userName = '';
  serverCreated = false ;
  servers = ['Prvi server', 'drugi server'];
  zapis = '';
  poljezapisa = [];


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverrCreationStatus = 'Server je kreiran =  ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement> event.target).value;
  }

  onCleanUserName() {
    this.userName = '';
  }

  dodajZapis() {

    this.poljezapisa.push(this.zapis);
    console.log(this.poljezapisa);
  }

  Broji() {
      console.log(this.poljezapisa.length);
      return this.poljezapisa.length;
  }

}
