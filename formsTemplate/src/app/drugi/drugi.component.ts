import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-drugi',
  templateUrl: './drugi.component.html',
  styleUrls: ['./drugi.component.css']
})
export class DrugiComponent implements OnInit {
  defaultQuestion = 'pet';
  answer = '';
  genders = ['Muško', 'Žensko'];
  pretplata = ['Basic', 'Advanced', 'Pro'];
  pocetnaVrijednost = 'Advanced';
  user = {
    username: '',
    email: '',
    tajnoPitanje: '',
    odgovor: '',
    gender: ''
  };

  mojiPodaci = {
    mojeEmail: '',
    dugmad: '',
    Password: '',
  };

  subbmited = false;

  constructor() { }


  mojaForma(form: NgForm) {
    console.log(form);
    this.subbmited = true;
    this.mojiPodaci.mojeEmail = form.value.mojeEmail;
    this.mojiPodaci.dugmad = form.value.dataPretplata;
    this.mojiPodaci.Password = form.value.pass;
  }


  ngOnInit() {
  }

}
