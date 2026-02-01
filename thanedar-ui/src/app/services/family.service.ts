import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class FamilyService {
  private apiUrl = 'http://127.0.0.1:8000/api/family/';

  constructor(private http: HttpClient, private auth: AuthService) {}

  private headers() {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`,
      'Content-Type': 'application/json'
    });
  }

  getAllMembers() {
    return this.http.get<any[]>(this.apiUrl, { headers: this.headers() });
  }

  addMember(member: any) {
    return this.http.post(this.apiUrl, member, { headers: this.headers() });
  }
}
