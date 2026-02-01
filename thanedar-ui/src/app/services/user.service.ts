import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface AuthUser {
  id: number;
  username: string;
  email: string;
}

export interface FamilyUser {
  id: number;
  name: string;
  age: number;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://127.0.0.1:8000/api/users';

  constructor(private http: HttpClient) {}

  private headers(): HttpHeaders {
    const token = localStorage.getItem('token') || '';
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }

  getAuthUsers(): Observable<AuthUser[]> {
    return this.http.get<AuthUser[]>(`${this.baseUrl}users/`, { headers: this.headers() });
}

getFamilyUsers(): Observable<FamilyUser[]> {
    return this.http.get<FamilyUser[]>(`${this.baseUrl}family/`, { headers: this.headers() });
}

}
