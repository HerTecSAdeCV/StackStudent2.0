import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

//modiulos
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { AddTokenInterceptor } from './utilis/add-token.interceptor';

// Componentes
import { ProfesoresComponent } from './components/dashboard-ad/profesores/profesores.component';
import { InicioComponent } from './components/dashboard-ad/inicio/inicio.component';
import { AddProfesorComponent } from './components/dashboard-ad/add-profesor/add-profesor.component';
import { AlumnosComponent } from './components/dashboard-ad/alumnos/alumnos.component';
import { AddAlumnosComponent } from './components/dashboard-ad/add-alumnos/add-alumnos.component';
import { AddMateriaComponent } from './components/dashboard-ad/add-materia/add-materia.component';
import { MateriasComponent } from './components/dashboard-ad/materias/materias.component';
import { InicioPComponent } from './components/dashboard-p/inicio-p/inicio-p.component';
import { MateriasPComponent } from './components/dashboard-p/materias-p/materias-p.component';
import { AddMateriasPComponent } from './components/dashboard-p/add-materias-p/add-materias-p.component';
import { InfoMateriaComponent } from './components/dashboard-p/info-materia/info-materia.component';
import { AutoEvaluacionComponent } from './components/dashboard-p/auto-evaluacion/auto-evaluacion.component';
import { InicioAlComponent } from './components/dashboard-al/inicio-al/inicio-al.component';
import { DashboardAdComponent } from './components/dashboard-ad/dashboard-ad.component';
import { DashboardPComponent } from './components/dashboard-p/dashboard-p.component';
import { DashboardAlComponent } from './components/dashboard-al/dashboard-al.component';
import { LoginAdComponent } from './components/login-ad/login-ad.component';
import { LoginPComponent } from './components/login-p/login-p.component';
import { LoginAlComponent } from './components/login-al/login-al.component';
import { RegisterPComponent } from './components/register-p/register-p.component';
import { RegisterAdComponent } from './components/register-ad/register-ad.component';
import { RegisterAlComponent } from './components/register-al/register-al.component';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    DashboardAdComponent,
    DashboardPComponent,
    DashboardAlComponent,
    LoginAdComponent,
    LoginPComponent,
    LoginAlComponent,
    RegisterPComponent,
    RegisterAdComponent,
    RegisterAlComponent,
    ProfesoresComponent,
    InicioComponent,
    AddProfesorComponent,
    AlumnosComponent,
    AddAlumnosComponent,
    AddMateriaComponent,
    MateriasComponent,
    InicioPComponent,
    MateriasPComponent,
    AddMateriasPComponent,
    InfoMateriaComponent,
    AutoEvaluacionComponent,
    InicioAlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
