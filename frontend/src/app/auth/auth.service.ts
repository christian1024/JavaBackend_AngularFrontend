
// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:8080/auth';

  constructor(private http: HttpClient) {}


  login(username: string, password: string) {
    return this.http.post<{ token: string }>('http://localhost:8080/auth/login', { username, password })
      .pipe(tap(res => localStorage.setItem('token', res.token)));
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    // Opcional: validar expiración si agregas "exp" y la lees en el cliente
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
  }
}
