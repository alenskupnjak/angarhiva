import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'ime servera', content: ' ovo je test pravi', dodatak: ' dodatni text'}];


  onServerAdded(serverData: {serverName: string, serverContent: string, dodatak: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
      dodatak: serverData.dodatak
    });
  }

  onBlueprintAdded(bluePrintData: {serverName: string, serverContent: string, dodatak: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.serverName,
      content: bluePrintData.serverContent,
      dodatak: bluePrintData.dodatak
    });


  }

  onChangeFirst() {
    this.serverElements[0].name = 'Promjenjeno!';
  }

  onDestroyFirst() {
   this.serverElements.splice(0, 1);
  }








}
