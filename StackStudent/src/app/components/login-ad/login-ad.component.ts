import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from 'src/app/services/error.service';
import { AdministradorService } from 'src/app/services/administrador.service';
import { Administrador } from 'src/app/interfaces/administrador';

@Component({
  selector: 'app-login-ad',
  templateUrl: './login-ad.component.html',
  styleUrls: ['./login-ad.component.css']
})
export class LoginAdComponent implements OnInit {

  correoInstitucional: string = '';
  password: string = '';
  loading: boolean = false;

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private _adminService: AdministradorService,
    private _errorService: ErrorService
  ) { }

  ngOnInit(): void {
  }

  login() {

    // Validamos que el usuario ingrese datos
    if (this.correoInstitucional == '' || this.password == '') {
      this.toastr.error('Todos los campos son obligatorios', 'Error');
      return
    }

    // Creamos el body
    const admin: Administrador = {
      correoInstitucional: this.correoInstitucional,
      password: this.password
    }

    this.loading = true;
    this._adminService.login(admin).subscribe({
      next: (token) => {
        localStorage.setItem('token', token);
        this.router.navigate(['/dashboardAd'])
      },
      error: (e: HttpErrorResponse) => {
        this._errorService.msjError(e);
        this.loading = false
      }
    })
  }

}
