import { RedirectComponent } from './redirect/redirect.component';
import { FederatedSignInComponent } from './federated-sign-in/federated-sign-in.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthPage } from './auth-page.page';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';


const routes: Routes = [
  {
    path: '',
    component: AuthPage,
    children: [
      { path: '', redirectTo: '/auth/sign-in', pathMatch: 'full' },
      { path: 'create-account', component: CreateAccountComponent },
      { path: 'sign-in', component: SignInComponent },
      { path: 'reset-password', component: ResetPasswordComponent },
      { path: 'redirect', component: RedirectComponent },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AuthPage,
    CreateAccountComponent,
    SignInComponent,
    ResetPasswordComponent,
    FederatedSignInComponent,
    RedirectComponent
  ]
})
export class AuthPageModule {}
