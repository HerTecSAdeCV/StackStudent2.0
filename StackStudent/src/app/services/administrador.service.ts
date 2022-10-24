import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Administrador } from 'src/app/interfaces/administrador';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(
    private http: HttpClient
  ) { 
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/users'
  }

  login(admin: Administrador): Observable<string> {
    return this.http.post<string>(`${this.myAppUrl}${this.myApiUrl}/loginAd`, admin)
   }
}
