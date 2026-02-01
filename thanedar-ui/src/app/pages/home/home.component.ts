import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MATERIAL_IMPORTS } from '../../material.imports';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { FamilyService } from '../../services/family.service';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatTableModule, ...MATERIAL_IMPORTS],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  users: any[] = [];
  members: any[] = [];
  userCols = ['username', 'email', 'first_name', 'last_name'];
  memberCols = ['name', 'relation', 'age'];

  constructor(
    private auth: AuthService,
    private userService: UserService,
    private familyService: FamilyService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userService.getAuthUsers().subscribe(users => (this.users = users));
    this.familyService.getAllMembers().subscribe(members => (this.members = members));
  }

  logout() {
    this.auth.logout();
  }

  goToAdd() {
    this.router.navigate(['/add-member']);
  }
}
