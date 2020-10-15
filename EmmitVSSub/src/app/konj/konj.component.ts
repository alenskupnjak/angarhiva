import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-konj',
  templateUrl: './konj.component.html',
  styleUrls: ['./konj.component.css']
})
export class KonjComponent implements OnInit {
  
  konj: number;

  constructor(private router: ActivatedRoute,
              private userService: UserService) { }

  ngOnInit() {
    this.router.params.subscribe((params: Params) => {
      console.log(params);
      this.konj = +params.konj;
    });
    this.userService.SubjectMoj.next(17);
  }

}
