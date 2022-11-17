import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { environment } from 'src/environments/environment';

@Component({
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.css'],
})
export class UsersPage implements OnInit {
  user: User[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get(environment.urlAPI + 'users').subscribe((obj: any) => (this.user = obj));
  }
}
