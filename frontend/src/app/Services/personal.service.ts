
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Personal {
  id: number;
  nombre: string;
  apellido: string;
  tipoDocumentoId: number;
  numeroDocumento: string;
  cargoId: number;
  email: string;
  telefono: string;
  fechaIngreso: string;
  estado: string;
}
@Injectable({
  providedIn: 'root'
})
export class PersonalService {
  private apiUrl = 'http://localhost:8080/api/personal';

  constructor(private http: HttpClient) {}


  getAll(): Observable<Personal[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.get<Personal[]>(this.apiUrl, { headers });
  }


  create(personal: any): Observable<any> {
    const token = localStorage.getItem('token');
    console.log('Token:', token);
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.post<any>(this.apiUrl, personal, { headers });
  }


}
