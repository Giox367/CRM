import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogged: User | null = null;
  constructor(private http: HttpClient) {}
  signIn(user: User) {
    this.isLogged = user;
    return this.http.post(environment.urlAPI + 'login', user);
  }

  signUp(user: User) {
    return this.http.post(environment.urlAPI + 'register', user);
  }

  ngOnDestroy(): void {
    localStorage.clear();
  }
}
