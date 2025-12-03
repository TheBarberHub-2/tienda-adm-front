import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CHeaderBootstrap } from '../../ui/c-header/c-header-bootstrap/c-header-bootstrap';
import { CFooterBootstrap } from '../../ui/c-footer/c-footer-bootstrap/c-footer-bootstrap';
import { CHeaderBEM } from '../../ui/c-header/c-header-bem/c-header-bem';
import { CFooterBem } from "../../ui/c-footer/c-footer-bem/c-footer-bem";

import { Inicio } from '../../paginas/inicio/inicio';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CHeaderBootstrap, CHeaderBEM, CFooterBootstrap, CFooterBem, Inicio],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('tienda-adm-front');
}
