import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Alumno } from '../interfaces/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/alumno'
  }

  signIn(alumno: Alumno): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`, alumno);
   }

   login(alumno: Alumno): Observable<string> {
    return this.http.post<string>(`${this.myAppUrl}${this.myApiUrl}/loginA`, alumno)
   }

   getListAlumnos():Observable<Alumno[]>{
    return this.http.get<Alumno[]>(`${this.myAppUrl}${this.myApiUrl}/dashboard/ListAlumnos`);
   }
   
}
