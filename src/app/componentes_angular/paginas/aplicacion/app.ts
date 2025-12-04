import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CHeaderBootstrap } from '../../ui/c-header/c-header-bootstrap/c-header-bootstrap';
import { CFooterBootstrap } from '../../ui/c-footer/c-footer-bootstrap/c-footer-bootstrap';
import { CHeaderBEM } from '../../ui/c-header/c-header-bem/c-header-bem';
import { CFooterBem } from "../../ui/c-footer/c-footer-bem/c-footer-bem";

import { Inicio } from '../../paginas/inicio/inicio';
import { CUserTabla } from '../../ui/c-user-tabla/c-user-tabla';
import { UserService } from '../../../services/user.service';
import { Usuario } from '../../../models/usuario';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CHeaderBootstrap, CHeaderBEM, CFooterBootstrap, CFooterBem, Inicio, CUserTabla],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  usuarios: Usuario[] = []
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAll().subscribe(
      {
        next: (usuarios) => {
          this.usuarios = usuarios;
        },
        error: (error) => {
          console.log(error);
        }
      }
    );
  }










}
