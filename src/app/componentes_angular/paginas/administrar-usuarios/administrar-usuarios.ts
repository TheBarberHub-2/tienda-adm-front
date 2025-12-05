import { Component } from '@angular/core';
import { CUserTablaBootstrap } from "../../ui/c-user-tabla/c-user-tabla-bootstrap/c-user-tabla-bootstrap";
import { Usuario } from '../../../models/usuario';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-administrar-usuarios',
  imports: [CUserTablaBootstrap],
  templateUrl: './administrar-usuarios.html',
  styleUrl: './administrar-usuarios.scss',
})
export class AdministrarUsuarios {
  usuarios: Usuario[] = []

  constructor(private userService: UserService) { } // Esto es para inyectar el servicio y poder usarlo

  ngOnInit() {
    this.userService.getAll().subscribe( // mi metodo getAll() es un Observable, por lo que debo suscribirme para obtener los datos
      {
        next: (usuarios) => { // next es un callback que se ejecuta cuando el Observable emite un valor
          this.usuarios = usuarios;
          console.log(this.usuarios);
        },
        error: (error) => { // error es un callback que se ejecuta cuando el Observable emite un error
          console.log(error);
        }
      }
    );
  }
}
