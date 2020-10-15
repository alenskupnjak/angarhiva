import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingServices } from '../logging.services';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingServices]
})
export class NewAccountComponent {


  constructor (private logging: LoggingServices,
              private accountService: AccountService
    ) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    this.logging.logstatusChange(accountStatus);
    //   console.log('A server status changed, new status: ' + accountStatus);
   }

   obrisi(accountName: string, accountStatus: string) {
     this.accountService.brisi();
   }
}
