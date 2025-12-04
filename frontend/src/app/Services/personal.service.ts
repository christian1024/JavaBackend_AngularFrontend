
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


// Si el backend devuelve nombres (DTO), usa esta interfaz:
export interface PersonalDto {
  id: number;
  nombre: string;
  apellido: string;
  numeroDocumento: string;
  tipoDocumentoNombre: string;
  cargoNombre: string | null;
  email: string;
  telefono: string | null;
  fechaIngreso: string;
  estado: string;
}
@Injectable({ providedIn: 'root' })
export class PersonalService {
  private apiUrl = 'http://localhost:8080/api/personal';

  constructor(private http: HttpClient) {}

  // Selecciona la interfaz correcta según tu backend (Personal[] o PersonalDto[])
  getAll(): Observable<PersonalDto[]> {
    const token = localStorage.getItem('token');
    const headers = token
      ? new HttpHeaders({ Authorization: `Bearer ${token}` })
      : undefined;
    return this.http.get<PersonalDto[]>(this.apiUrl, { headers });
  }

  create(personal: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = token
      ? new HttpHeaders({ Authorization: `Bearer ${token}` })
      : undefined;
    return this.http.post<any>(this.apiUrl, personal, { headers });
  }
}
