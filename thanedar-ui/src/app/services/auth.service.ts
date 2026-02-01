import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loginUrl = 'http://127.0.0.1:8000/api/login/'; // Django login endpoint

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post<any>(this.loginUrl, { username, password });
  }

  saveToken(token: string) {
    if (typeof window !== 'undefined') {
    localStorage.setItem('token', token);
    }
  }

  getToken(): string | null {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('token');
    }
    return null;
  }


  logout() {
    localStorage.removeItem('token');
    window.location.href = '/';
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
