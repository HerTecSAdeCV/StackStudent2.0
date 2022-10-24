import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {AlumnoService} from 'src/app/services/alumno.service'
import {Alumno} from 'src/app/interfaces/alumno'

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  listAlumno: Alumno[] = []
  loading: boolean = false;

  constructor(private _alumnoService: AlumnoService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getListAlumnos();
  }

  getListAlumnos(){
    this.loading = true;

    this._alumnoService.getListAlumnos().subscribe((data:Alumno[]) => {
      this.listAlumno = data;
      this.loading = false;
    })
  }

}
