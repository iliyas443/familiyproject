import { Component, OnInit } from '@angular/core';
import { UserService, AuthUser } from '../../services/user.service';

@Component({
  selector: 'app-auth-users',
  templateUrl: './auth-users.component.html',
})
export class AuthUsersComponent implements OnInit {
  users: AuthUser[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getAuthUsers().subscribe({
      next: (data) => (this.users = data),
      error: (err) => console.error(err)
    });
  }
}
