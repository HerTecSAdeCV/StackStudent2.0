import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Materia } from 'src/app/interfaces/materia';
import { MateriaService } from 'src/app/services/materia.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-materias-p',
  templateUrl: './add-materias-p.component.html',
  styleUrls: ['./add-materias-p.component.css']
})
export class AddMateriasPComponent implements OnInit {

  form: FormGroup;
  loading: boolean = false;
  id: number;
  operacion: string = 'Agregar ';

  constructor(
    private fb: FormBuilder,
    private _materiaService: MateriaService,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute
  ) { 
    this.form = this.fb.group({
      nombreMateria: ['', Validators.required],
      descripcion: ['', Validators.required],
      cuatrimestre: [null, Validators.required],
    })
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
  }

  addProduct() {
    /*  console.log(this.form.value.name);
     console.log(this.form.get('name')?.value); */

    const materia: Materia = {
      nombreMateria: this.form.value.nombreMateria,
      descripcion: this.form.value.descripcion,
      cuatrimestre: this.form.value.cuatrimestre,
      profesor: localStorage.getItem('correo'),
    }
    this.loading = true;

    if (this.id !== 0) {
      // Es editar 

    } else {
      // Es agregagar
      this._materiaService.saveProduct(materia).subscribe(() => {
        this.toastr.success(`La materia ${materia.nombreMateria} fue registrado con exito`, 'Producto registrado');
        this.loading = false;
        this.router.navigate(['/dashboardP/materias']);
      })
    }
  }

}
