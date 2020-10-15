import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // numbers = [1, 2, 3, 4, 5];
  parni = [2, 4, 6];
  neparni = [1, 3, 5];
  value = 0;
  onlyOdd = false;



  promjeni () {
    this.onlyOdd = !this.onlyOdd;
  }



}
