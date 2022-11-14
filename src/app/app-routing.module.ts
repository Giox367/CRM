import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPage } from './pages/register/register.page';
import { LoginPage } from './pages/login/login.page';
import { HomePage } from './pages/home/home.page';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'login-page',
    component: LoginPage,
  },
  {
    path: 'users-details',
    loadChildren: () =>
      import('./pages/users-details/users-details.module').then(
        (m) => m.UsersDetailsModule
      ),
  },
  {
    path: 'register',
    component: RegisterPage,
  },
  {
    path: 'home',
    component: HomePage,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
