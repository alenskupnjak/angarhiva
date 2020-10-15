import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()

export class UserService {

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Peter'];

  constructor(private counterSercice: CounterService) {}

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterSercice.incrementInactiveToActive();
  }

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterSercice.incrementActiveToInactive();
  }

}
