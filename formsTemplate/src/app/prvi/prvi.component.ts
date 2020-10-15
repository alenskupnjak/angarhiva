import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-prvi',
  templateUrl: './prvi.component.html',
  styleUrls: ['./prvi.component.css']
})
export class PrviComponent implements OnInit {

  @ViewChild('f', {static: true}) signupForm: NgForm;
  // @ViewChild('frm', {static: true}) podaciForme: NgForm;
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

  ngOnInit() {
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //   username: suggestedName,
    //   email: ''
    // },
    // secret: 'pet',
    // quietionAnswer: 'text',
    // dataGender: 'Muško'
    // });

    this.signupForm.form.patchValue({
     userData: {
      username: suggestedName,
    },
    dataGender: 'Muško'
    });

  }

  onSubmit() {
    console.log(this.signupForm);
    this.subbmited = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.tajnoPitanje = this.signupForm.value.secret;
    this.user.odgovor = this.signupForm.value.quietionAnswer;
    this.user.gender = this.signupForm.value.dataGender;
    this.signupForm.reset();
  }

  mojaForma(form: NgForm) {
    console.log(form);
    this.mojiPodaci.mojeEmail = form.value.mojeEmail;
    this.mojiPodaci.dugmad = form.value.dataPretplata;
    this.mojiPodaci.Password = form.value.pass;
  }

}
