import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { KonjComponent } from './konj/konj.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'user/:id', component: UserComponent},
  {path: 'konj', component: KonjComponent},
  {path: 'konj/:konj', component: KonjComponent},
  {path: 'konj/:nekavrijednost', component: KonjComponent},
  {path: 'user', component: UserComponent},
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
