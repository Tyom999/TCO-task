import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  username: string = '';
  constructor(private router: Router) {
    if (localStorage.getItem('username')) {
      this.router.navigate(['list'])
    }
  }

  ngOnInit(): void {
  }

  login() {
    if (this.username) {
      localStorage.setItem('username', this.username);
      this.router.navigate(['list'])
    }
  }
}
