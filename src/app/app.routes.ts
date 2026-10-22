import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Procesos } from './procesos/procesos';
import { Reportes } from './reportes/reportes';
import { DetalleProceso } from './detalle-proceso/detalle-proceso';
import { ErrorPersonalizado } from './error-personalizado/error-personalizado';

export const routes: Routes = [
  { path: 'inicio', component: Inicio },
  { path: 'procesos', component: Procesos },
  { path: 'reportes', component: Reportes },
  { path: 'proceso/:proceso', component: DetalleProceso },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', component: ErrorPersonalizado }
];
