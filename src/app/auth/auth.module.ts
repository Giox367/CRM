import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './login/login.page';
import { RegisterPage } from './register/register.page';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: 'register',
    component: RegisterPage,
  },
];

@NgModule({
  declarations: [LoginPage, RegisterPage],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    HttpClientModule,
    CommonModule,
  ],
})
export class AuthModule {}
