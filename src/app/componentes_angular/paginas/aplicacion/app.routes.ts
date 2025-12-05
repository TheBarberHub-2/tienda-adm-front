import { Routes } from '@angular/router';
import { AdministrarUsuarios } from '../administrar-usuarios/administrar-usuarios';
import { Inicio } from '../inicio/inicio';

export const routes: Routes = [
    { path: 'administrar-usuarios', component: AdministrarUsuarios },
    { path: '**', component: Inicio }
];
