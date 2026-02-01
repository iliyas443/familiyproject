import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MATERIAL_IMPORTS } from '../../material.imports';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ...MATERIAL_IMPORTS],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login(this.username, this.password).subscribe({
      next: (res: any) => {
        this.auth.saveToken(res.access);
        this.router.navigate(['/home']);
      },
      error: err => {
        alert('Invalid credentials');
        console.error(err);
      }
    });
  }
}
