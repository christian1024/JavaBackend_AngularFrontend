
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface TipoDocuService {
  id: number;
  nombre: string;
}

@Injectable({
  providedIn: 'root'
})
export class TipoDocuService {
  private apiUrl = 'http://localhost:8080/api/TipoDoc';

  constructor(private http: HttpClient) {}

  getAll(): Observable<TipoDocuService[]> {
    return this.http.get<TipoDocuService[]>(this.apiUrl);
  }
}
