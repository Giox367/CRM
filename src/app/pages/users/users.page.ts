import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { environment } from 'src/environments/environment';
import { UsersService } from './users.service';

@Component({
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.css'],
})
export class UsersPage implements OnInit {
  [x: string]: any;
  user: User[] = [];
  constructor(private http: HttpClient, public service:UsersService) {}

  ngOnInit(): void {
    this.http.get(environment.urlAPI + 'users').subscribe((obj: any) => (this.user = obj));
  }

  destroyUser(obj: User) {
    this.service.deleteUser(obj.id).subscribe();
    this.service.getUser().subscribe((obj: any) => (this.service.users = obj));
    this.http.get(environment.urlAPI + 'users').subscribe((obj: any) => (this.user = obj));
    // console.log(this.service.deleteUser(user.id));
  }
}
