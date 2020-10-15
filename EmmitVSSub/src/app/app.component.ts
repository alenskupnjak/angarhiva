import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs';

import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  userActivatedLosije = false;
  private Losije: Subscription;

  userActivatedBolje = false;
  private Bolje: Subscription;

  BehaviorSubject = new BehaviorSubject('Start');
  subject = new Subject();

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.Losije = this.userService.EmitterLosije.subscribe( didActivated => {
    this.userActivatedLosije = didActivated;




    console.log('-------------X---------------------');
    this.BehaviorSubject.subscribe((data) => {
      console.log('BehaviorSubject A:', data);
    });
    this.subject.subscribe((data) => {
      console.log('subject A:', data);
    });

    console.log('-------------XX---------------------');
    this.BehaviorSubject.next('1');
    this.subject.next('1');
    console.log('-------------XXX-----------------');
    this.BehaviorSubject.next('2');
    this.subject.next('2');
    console.log('-------------XXXX------------------');
    // subscriber 2
    this.BehaviorSubject.subscribe((data) => {
      console.log('BehaviorSubject B:', data);
    });
    this.subject.subscribe((data) => {
      console.log('subject B:', data);
    });
    console.log('------------XXXXX-------------');
    this.BehaviorSubject.next('3');
    this.subject.next('3');
    console.log('----------XXXXXXXXX---------------');

    this.BehaviorSubject.subscribe((data) => {
      console.log('BehaviorSubject C:', data);
    });
    this.subject.subscribe((data) => {
      console.log('subject C:', data);
    });

    console.log('---------XXXXXXXXXXXXXX--------');
    this.BehaviorSubject.next('4');
    this.subject.next('4');

    console.log('----XXXXXXXXXXXXXXXXXXXXXXX---');

    console.log(this.BehaviorSubject);
    console.log(this.subject);



    });

    this.Bolje = this.userService.SubjectBolje.subscribe(data => {
      this.userActivatedBolje = data;
    });

  }

  ngOnDestroy(): void {
    this.Losije.unsubscribe();
    this.Bolje.unsubscribe();
    this.subject.unsubscribe();
  }


}
