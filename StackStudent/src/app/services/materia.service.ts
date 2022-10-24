import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Materia } from '../interfaces/materia';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/materia'
  }

  saveProduct(materia: Materia): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`,materia)
  }

  getListProducts(): Observable<Materia[]> {
    return this.http.get<Materia[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

}
