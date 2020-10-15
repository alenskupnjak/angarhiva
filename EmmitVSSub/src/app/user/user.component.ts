import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;
  konj: number;

  constructor(private router: ActivatedRoute,
              private userService: UserService) {}



  ngOnInit() {
    this.router.params.subscribe((params: Params) => {
      console.log(params);
      this.id = +params.id;
      this.konj = +params.konj;
      this.userService.SubjectMoj.next(27);
    });
  }

  onActivatedLosije() {
    this.userService.EmitterLosije.emit(true);
    this.userService.SubjectMoj.next(11);
  }

  onActivatedBolje() {
    this.userService.SubjectBolje.next(true);
    this.userService.SubjectMoj.next(99);
  }
}
