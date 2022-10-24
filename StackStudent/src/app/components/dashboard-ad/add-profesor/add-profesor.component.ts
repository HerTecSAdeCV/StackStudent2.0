import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from 'src/app/services/error.service';
import { Profesor } from 'src/app/interfaces/profesor';
import { ProfesorService } from 'src/app/services/profesor.service';

@Component({
  selector: 'app-add-profesor',
  templateUrl: './add-profesor.component.html',
  styleUrls: ['./add-profesor.component.css']
})
export class AddProfesorComponent implements OnInit {

  correoInstitucional: string = '';
  password: string = '';
  confirmPassword: string = '';
  loading: boolean = false;

  constructor(
    private toastr: ToastrService,
    private _profesorService: ProfesorService,
    private router: Router,
    private _errorService: ErrorService
  ) { }

  ngOnInit(): void {
  }

  addProfesor() {

    // Validamos que el usuario ingrese valores
    if (this.correoInstitucional == '' || this.password == '' || this.confirmPassword == '') {
      this.toastr.error('Todos los campos son obligatorios', 'Error');
      return;
    }

    // Validamos que las password sean iguales
    if (this.password != this.confirmPassword) {
      this.toastr.error('Las passwords ingresadas son distintas', 'Error');
      return;
    }

    // Creamos el objeto
    const profesor: Profesor = {
      correoInstitucional: this.correoInstitucional,
      password: this.password
    }

    this.loading = true;
    this._profesorService.signIn(profesor).subscribe({
      next: (v) => {
        this.loading = false;
        this.toastr.success(`El usuario ${this.correoInstitucional} fue registrado con exito`, 'Usuario registrado');
        this.router.navigate(['/dashboardAd/profesores']);
      },
      error: (e: HttpErrorResponse) => {
        this.loading = false;
        this._errorService.msjError(e);
      }
    })
  }

}
