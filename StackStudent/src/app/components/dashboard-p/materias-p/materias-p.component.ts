import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {MateriaService} from 'src/app/services/materia.service'
import {Materia} from 'src/app/interfaces/materia'

@Component({
  selector: 'app-materias-p',
  templateUrl: './materias-p.component.html',
  styleUrls: ['./materias-p.component.css']
})
export class MateriasPComponent implements OnInit {

  listMaterias: Materia[] = []
  loading: boolean = false;
  profesor = localStorage.getItem('correo')

  constructor(
    private _materiaService: MateriaService, 
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getListMaterias();
  }

  getListMaterias() {
    this.loading = true;

    this._materiaService.getListProducts().subscribe((data: Materia[]) => {
      this.listMaterias = data;
      this.loading = false;
    })
  }
  
}
