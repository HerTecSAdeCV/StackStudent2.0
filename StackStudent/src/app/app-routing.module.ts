import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Guards
import { AuthGuard } from './utilis/auth.guard';

//Componentes
import { LoginAdComponent } from './components/login-ad/login-ad.component';
import { LoginAlComponent } from './components/login-al/login-al.component';
import { LoginPComponent } from './components/login-p/login-p.component';
import { RegisterAdComponent } from './components/register-ad/register-ad.component';
import { RegisterAlComponent } from './components/register-al/register-al.component';
import { RegisterPComponent } from './components/register-p/register-p.component';
import { DashboardAdComponent } from './components/dashboard-ad/dashboard-ad.component';
import { ProfesoresComponent } from './components/dashboard-ad/profesores/profesores.component';
import { InicioComponent } from './components/dashboard-ad/inicio/inicio.component';
import { AddProfesorComponent } from './components/dashboard-ad/add-profesor/add-profesor.component';
import { AddAlumnosComponent } from './components/dashboard-ad/add-alumnos/add-alumnos.component';
import { AlumnosComponent } from './components/dashboard-ad/alumnos/alumnos.component';
import { AddMateriaComponent } from './components/dashboard-ad/add-materia/add-materia.component';
import { MateriasComponent } from './components/dashboard-ad/materias/materias.component';
import { DashboardPComponent } from './components/dashboard-p/dashboard-p.component';
import { InicioPComponent } from './components/dashboard-p/inicio-p/inicio-p.component';
import { AddMateriasPComponent } from './components/dashboard-p/add-materias-p/add-materias-p.component';
import { MateriasPComponent } from './components/dashboard-p/materias-p/materias-p.component';
import { InfoMateriaComponent } from './components/dashboard-p/info-materia/info-materia.component';
import { AutoEvaluacionComponent } from './components/dashboard-p/auto-evaluacion/auto-evaluacion.component';
import { InicioAlComponent } from './components/dashboard-al/inicio-al/inicio-al.component';
import { DashboardAlComponent } from './components/dashboard-al/dashboard-al.component';

const routes: Routes = [
  { path: '', redirectTo: 'loginAl', pathMatch: 'full' },
  { path: 'loginAd', component: LoginAdComponent },
  { path: 'loginP', component: LoginPComponent },
  { path: 'loginAl', component: LoginAlComponent },
  { path: 'registerAd', component: RegisterAdComponent },
  { path: 'registerP', component: RegisterPComponent },
  { path: 'registerAl', component: RegisterAlComponent },
  { path: 'dashboardAd', component: DashboardAdComponent, canActivate: [AuthGuard],
    children:[
      {path: 'inicio', component: InicioComponent},
      {path: 'profesores', component: ProfesoresComponent},
      {path: 'addProfesores', component: AddProfesorComponent},
      {path: 'addAlumnos', component: AddAlumnosComponent},
      {path: 'alumnos', component: AlumnosComponent},
      {path: 'addMaterias', component: AddMateriaComponent},
      {path: 'materias', component: MateriasComponent},
      { path: '**', redirectTo: 'inicio', pathMatch: 'full' }
    ]
  },

  { path: 'dashboardP', component: DashboardPComponent, canActivate: [AuthGuard],
    children:[
      {path: 'inicio', component: InicioPComponent},
      {path: 'addMaterias', component: AddMateriasPComponent},
      {path: 'materias', component: MateriasPComponent},
      {path: 'materia/:id', component: InfoMateriaComponent},
      {path: 'evaluacion/:id', component: AutoEvaluacionComponent},
      {path: 'correos', component: AlumnosComponent},
      { path: '**', redirectTo: 'inicio', pathMatch: 'full' }
    ]
  },

  { path: 'dashboardAl', component: DashboardAlComponent, canActivate: [AuthGuard],
    children:[
      {path: 'inicio', component: InicioAlComponent},
      {path: 'addMaterias', component: AddMateriasPComponent},
      {path: 'materias', component: MateriasPComponent},
      {path: 'materia/:id', component: InfoMateriaComponent},
      {path: 'evaluacion/:id', component: AutoEvaluacionComponent},
      { path: '**', redirectTo: 'inicio', pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
