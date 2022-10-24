import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Profesor } from '../interfaces/profesor';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/profesor'
  }

  signIn(profesor: Profesor): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`, profesor);
   }

   login(profesor: Profesor): Observable<string> {
    return this.http.post<string>(`${this.myAppUrl}${this.myApiUrl}/loginP`, profesor)
   }

   getListProfesores():Observable<Profesor[]>{
    return this.http.get<Profesor[]>(`${this.myAppUrl}${this.myApiUrl}/dashboard/ListProfesores`);
   }
   
}
