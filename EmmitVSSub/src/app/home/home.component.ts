import { Component, OnInit, OnDestroy } from '@angular/core';

import { interval, Subscription, Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription: Subscription;
  private drugi: Subscription;
  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userService.SubjectMoj.subscribe(data => {
      console.log('Moj broj=' + data);
    });



    const mojObserver = Observable.create(observer => {
      let broj = 0;
      setInterval(() => {
        observer.next(broj);
        if (broj === 5) {
          observer.complete();
        }

        if (broj > 3) {
          observer.error(new Error('Broj je veci od 3'));
        }
        broj++;
        }, 1000);
      }
    );

    // mojObserver.pipe(map( data => {
    //     return data;
    //   }));

    this.firstObsSubscription = mojObserver.pipe(map( data => {
      return data;
    })).subscribe(data => {
      console.log('firstObsSubscription= ' + (data + 1) );
    }, error => {
      console.log(error);
      alert(error.message);
    }, () =>{
      console.log('Gotovo');
    }
    );

  }

  ngOnDestroy() {
    this.firstObsSubscription.unsubscribe();
  }
}
