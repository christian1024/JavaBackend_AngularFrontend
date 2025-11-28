
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Personal {
  nombre: string;
  apellido: string;
}

@Injectable({ providedIn: 'root' })
export class PersonalService {
  private apiUrl = 'http://localhost:8080/api/personal'; // Ajusta el puerto si es distinto

  constructor(private http: HttpClient) {}

  getPersonal(): Observable<Personal[]> {
    return this.http.get<Personal[]>(this.apiUrl);
  }
}
