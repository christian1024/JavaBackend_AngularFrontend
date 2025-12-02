
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CargoService {
  id: number;
  nombre: string;
  area_id: number;
}

@Injectable({
  providedIn: 'root'
})
export class CargoService {
  private apiUrl = 'http://localhost:8080/api/cargos';

  constructor(private http: HttpClient) {}

  getAll(): Observable<CargoService[]> {
    return this.http.get<CargoService[]>(this.apiUrl);
  }
}

