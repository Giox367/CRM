import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { AuthService } from '../auth.service';

@Component({
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.css'],
})
export class RegisterPage implements OnInit {
  @ViewChild('f') form!: NgForm;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.authService.signUp(this.form.value).subscribe((data) => this.router.navigate(['/login']));
  }
}
