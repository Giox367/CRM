import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: User[] = [];

  constructor(private http: HttpClient) {}

    getUser() {
      return this.http.get<User>(environment.urlAPI + 'users');
    }

    deleteUser(id: Number) {
      return this.http.delete<User>(environment.urlAPI + 'users/' + id);
    }


}
