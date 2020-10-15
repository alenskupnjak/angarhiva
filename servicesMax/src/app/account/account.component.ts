import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingServices} from '../logging.services';
import { AccountService} from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingServices]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;


  constructor (private logging: LoggingServices,
               private accountService: AccountService) {}


  onSetTo(status: string) {
    this.accountService.updatedStatus(this.id, status);
    this.logging.logstatusChange(status);
    // console.log('A server status changed, new status: ' + status);
  }
}
