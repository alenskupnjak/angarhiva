import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  accounts: { name: string, status: string}[] = [];

  constructor(private accountsService: AccountService) {}


  ngOnInit() {
  this.accounts = this.accountsService.accounts;
  }

  onAccountAdded(name: string, status: string) {
    this.accountsService.addAccount(name, status);
  }

  obrisiZapis() {
    this.accountsService.brisi();
  }

}
