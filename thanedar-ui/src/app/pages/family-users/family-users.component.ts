import { Component, OnInit } from '@angular/core';
import { UserService, FamilyUser } from '../../services/user.service';

@Component({
  selector: 'app-family-users',
  templateUrl: './family-users.component.html',
})
export class FamilyUsersComponent implements OnInit {
  users: FamilyUser[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getFamilyUsers().subscribe({
      next: (data) => (this.users = data),
      error: (err) => console.error(err)
    });
  }
}
