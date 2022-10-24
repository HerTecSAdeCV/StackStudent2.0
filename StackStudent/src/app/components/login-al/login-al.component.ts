import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from 'src/app/services/error.service';
import { AlumnoService } from 'src/app/services/alumno.service';
import { Alumno } from 'src/app/interfaces/alumno';

@Component({
  selector: 'app-login-al',
  templateUrl: './login-al.component.html',
  styleUrls: ['./login-al.component.css']
})
export class LoginAlComponent implements OnInit {

  correoInstitucional: string = '';
  password: string = '';
  loading: boolean = false;

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private _almunoService: AlumnoService,
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
    const profesor: Alumno = {
      correoInstitucional: this.correoInstitucional,
      password: this.password
    }

    this.loading = true;
    this._almunoService.login(profesor).subscribe({
      next: (token) => {
        localStorage.setItem('token', token);
        this.router.navigate(['/dashboardAl'])
      },
      error: (e: HttpErrorResponse) => {
        this._errorService.msjError(e);
        this.loading = false
      }
    })
  }

}
