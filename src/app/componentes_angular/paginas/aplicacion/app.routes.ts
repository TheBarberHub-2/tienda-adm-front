import { Routes } from '@angular/router';
import { AdministrarUsuarios } from '../administrar-usuarios/administrar-usuarios';
import { Inicio } from '../inicio/inicio';
import { ActualizarUsuarios } from '../actualizar-usuarios/actualizar-usuarios';
import { CrearUsuarios } from '../crear-usuarios/crear-usuarios';

export const routes: Routes = [
    { path: 'administrar-usuarios', component: AdministrarUsuarios },
    { path: 'actualizar-usuarios', component: ActualizarUsuarios },
    { path: 'crear-usuarios', component: CrearUsuarios },
    { path: '**', component: Inicio }
];
