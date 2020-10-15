import { Injectable } from '@angular/core';
import { LoggingServices } from './logging.services';
@Injectable()
export class AccountService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  constructor(private loggingService: LoggingServices) { }


  addAccount (name: string, status: string) {
    this.accounts.push({name: name, status: status});
    this.loggingService.logstatusChange(status);
  }

  updatedStatus (id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logstatusChange(status);
  }

  brisi() {
    this.accounts.splice(0, 1);
  }
}
