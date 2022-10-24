import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {ProfesorService} from 'src/app/services/profesor.service'
import {Profesor} from 'src/app/interfaces/profesor'

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {

  listProfesor: Profesor[] = []
  loading: boolean = false;

  constructor(private _profesorService: ProfesorService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getListProfesores();
  }

  getListProfesores(){
    this.loading = true;

    this._profesorService.getListProfesores().subscribe((data:Profesor[]) => {
      this.listProfesor = data;
      this.loading = false;
    })
  }

}
