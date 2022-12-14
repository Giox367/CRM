import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';
import { UserToken } from '../interfaces/user-token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogged!: UserToken;
  isLogin = false;

  constructor(private http: HttpClient) {}
  signIn(userObj: User) {
    // this.isLogged = JSON.parse(localStorage.getItem('isLogged')!).user;
    return this.http.post(environment.urlAPI + 'login', userObj).pipe(
      tap((data) => {
        console.log(data);
        this.isLogged = data as UserToken;
        this.isLogin = true;
      })
    );
  }

  signUp(user: User) {
    return this.http.post(environment.urlAPI + 'register', user);
  }

  ngOnDestroy(): void {
    localStorage.clear();
  }
}
