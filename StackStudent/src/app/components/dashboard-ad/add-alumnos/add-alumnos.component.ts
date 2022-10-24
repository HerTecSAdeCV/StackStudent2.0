import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from 'src/app/services/error.service';
import { Alumno } from 'src/app/interfaces/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-add-alumnos',
  templateUrl: './add-alumnos.component.html',
  styleUrls: ['./add-alumnos.component.css']
})
export class AddAlumnosComponent implements OnInit {

  correoInstitucional: string = '';
  password: string = '';
  nombre: string = '';
  apellidoP: string = '';
  confirmPassword: string = '';
  loading: boolean = false;

  constructor(private toastr: ToastrService,
    private _alumnoService: AlumnoService,
    private router: Router,
    private _errorService: ErrorService) { }

  ngOnInit(): void {
  }

  addAlumno() {

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
    const alumno: Alumno = {
      correoInstitucional: this.correoInstitucional,
      password: this.password,
      nombre: this.nombre,
      apellidoP: this.apellidoP
    }

    this.loading = true;
    this._alumnoService.signIn(alumno).subscribe({
      next: (v) => {
        this.loading = false;
        this.toastr.success(`El usuario ${this.correoInstitucional} fue registrado con exito`, 'Usuario registrado');
        this.router.navigate(['/dashboardAd/alumnos']);
      },
      error: (e: HttpErrorResponse) => {
        this.loading = false;
        this._errorService.msjError(e);
      }
    })
  }

}
